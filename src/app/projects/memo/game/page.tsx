'use client'
import styles from '@/app/projects/memo/game/page.module.css';
import { useSearchParams } from 'next/navigation';
import StatsCard from '@/app/ui/memo/inGameStatsCard';
import generateNumbersArray from '@/app/utils/helpers/memo/generateNumbersArray';
import type { CardType, Theme, Player } from '@/app/utils/constants/memo/types';
import Card from '@/app/ui/memo/card';
import { useEffect, useState, useCallback, Suspense } from 'react';
import randomizeArray from '@/app/utils/helpers/memo/randomizeArray';
import checkMatch from '@/app/utils/helpers/memo/chechMatch';
import generatePlayersArray from '@/app/utils/helpers/memo/generatePlayers';
import passPlayersTurn from '@/app/utils/helpers/memo/passPlayersTurn';
import Result from '@/app/ui/memo/result';
import sortPlayers from '@/app/utils/helpers/memo/sortPlayers';
import Header from '@/app/ui/memo/header';
import DefeatModal from '@/app/ui/memo/defeatModal';

export default function Game() {
  const [cardsArray, setCardsArray] = useState<CardType[] | []>([]);
  const [playersArray, setPlayersArray] = useState<Player[] | []>([]);
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [openCardsIndexes, setOpenCardsIndexes] = useState<number[] | []>([]);
  const [clickable, setClickable] = useState(true);
  const [totalTurns, setTotalTurns] = useState(0);
  const [totalPoints, setTotalPoints] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [timeLeft, setTimeLeft] = useState(10);
  // getting settings from query parameters
  const searchParams = useSearchParams();
  const theme = searchParams.get('theme') as Theme;
  const playersNumber = Number(searchParams.get('playersNumber'));
  const gridSize = Number(searchParams.get('gridSize'));
  const gridArea = gridSize*gridSize;
  const sumOfPoints = gridArea/2;
  
  if(!theme || !playersNumber || !gridSize) {
    throw new Error('Ooops, something went wrong');
  }

  // generates game according to chosen settings
  const startGame = useCallback(() => {
    const cardsArray = generateNumbersArray(gridArea, theme);
    const playersArray = generatePlayersArray(playersNumber);
    setCardsArray(randomizeArray(cardsArray));
    setPlayersArray(playersArray);
  }, [gridArea, theme, playersNumber])

  function restart() {
    setIsGameOver(false);
    setOpenCardsIndexes([]);
    startGame();
    setTimeLeft(10);
    setCurrentPlayer(1);
    setTotalTurns(0);
  }

  useEffect(() => {
    startGame();
  }, [startGame])

  useEffect(() => {
    if(playersArray.length === 1) {
      const timer = setInterval(() => {
        setTimeLeft(prevTimeLeft => {
          if (prevTimeLeft === 0) {
            clearInterval(timer);
            return 0;
          } else {
            return prevTimeLeft - 1;
          }
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  })

  // finishes the game if all cards are opened
  useEffect(() => {
    if(totalPoints === sumOfPoints) setIsGameOver(true);
  }, [totalPoints, sumOfPoints])

  // processes every turn result (where each turn finishes after 2 cards are opened)
  useEffect(() => {
    if(openCardsIndexes.length === 2) {
      const arrCopy = [...cardsArray];
      setClickable(false);
      setTotalTurns(total => total+1);

      setTimeout(() => {
        if(checkMatch(cardsArray, openCardsIndexes)) {
          if(playersArray.length > 1) {
            const playersArrCopy = [...playersArray];
            playersArrCopy[currentPlayer-1].score++;
            setPlayersArray(playersArrCopy);
          }
          setTotalPoints(totalPoints+1);
          openCardsIndexes.map((index) => {
            arrCopy[index].isLocked = true;
          })
        } else {
          openCardsIndexes.map((index) => {
            arrCopy[index].isOpen = false;
          })
        }
        setCardsArray(arrCopy);
        setOpenCardsIndexes([]);
        setClickable(true);
        setCurrentPlayer(() => {
          return playersArray.length > 1 ? passPlayersTurn(playersArray, currentPlayer) : 1;
        });
      }, 1000)
    }
  }, [openCardsIndexes, cardsArray, playersArray, currentPlayer, totalPoints])

  const handleCardClick = (number: number) => {
    if(clickable) {
      setCardsArray((prevCardsArray) => {
        return prevCardsArray.map((card) => card.number === number ? {...card, isOpen:true}: card)
      });
      setOpenCardsIndexes([
        ...openCardsIndexes,
        cardsArray.findIndex((card) => card.number === number)
      ])
    }
  }

  return (
    <Suspense>
      <div className={styles.page}>
        <Header restart={restart}/>
        {isGameOver ? <Result playersArray={sortPlayers(playersArray)} restart={restart} totalTurns={totalTurns}/> : null}
        {timeLeft === 0 ? <DefeatModal totalTurns={totalTurns} restart={restart}/> : null}
          <main>
            <div className={`${styles.field} ${styles['size'+gridArea]}`}>
              {cardsArray.map((card) => {
                return (
                  <Card
                    key={card.number}
                    card={card}
                    theme={theme}
                    handleCardClick={handleCardClick}
                  />
                )
              })}
            </div>
          </main>
        <footer className={styles.stats}>
          {playersArray.length > 1
            ? playersArray.map((player) => {
              return <StatsCard player={player} key={player.playerNumber} currentPlayer={currentPlayer}/>
            })
            : <div className={styles.soloStats}>
                <p className={styles.time}>{Math.floor(timeLeft / 60)}:{timeLeft % 60 < 10 ? '0' : ''}{timeLeft % 60}</p>
                <p className={styles.pairs}>Turns {totalTurns}</p>
              </div>
          }
        </footer>
      </div>
    </Suspense>
  )
}