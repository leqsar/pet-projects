'use client'
import styles from '@/app/projects/memo/game/page.module.css';
import { useSearchParams } from 'next/navigation';
import type { CardType, Theme, Player } from '@/app/utils/constants/memo/types';
import { useEffect, useState, useCallback, Suspense } from 'react';
import generateNumbersArray from '@/app/utils/helpers/memo/generateNumbersArray';
import randomizeArray from '@/app/utils/helpers/memo/randomizeArray';
import checkMatch from '@/app/utils/helpers/memo/chechMatch';
import generatePlayersArray from '@/app/utils/helpers/memo/generatePlayers';
import sortPlayers from '@/app/utils/helpers/memo/sortPlayers';
import passPlayersTurn from '@/app/utils/helpers/memo/passPlayersTurn';
import Header from '@/app/ui/memo/header';
import Card from '@/app/ui/memo/card';
import StatsCard from '@/app/ui/memo/inGameStatsCard';
import Result from '@/app/ui/memo/result';
import DefeatModal from '@/app/ui/memo/defeatModal';

function Game() {
  const [cardsArray, setCardsArray] = useState<CardType[] | []>([]);
  const [openCardsIndexes, setOpenCardsIndexes] = useState<number[] | []>([]);
  const [clickable, setClickable] = useState(true);
  const [playersArray, setPlayersArray] = useState<Player[] | []>([]);
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [totalTurns, setTotalTurns] = useState(0);
  const [totalPoints, setTotalPoints] = useState(0);
  const [timeLeft, setTimeLeft] = useState(120);
  const [isGameOver, setIsGameOver] = useState(false);
  // getting settings from query parameters
  const searchParams = useSearchParams();
  const theme = searchParams.get('theme') as Theme;
  const playersNumber = Number(searchParams.get('playersNumber'));
  const gridSize = Number(searchParams.get('gridSize'));
  const gridArea = gridSize * gridSize;
  const sumOfPoints = gridArea / 2;

  // generates game according to chosen settings
  const startGame = useCallback(() => {
    const cardsArray = generateNumbersArray(gridArea, theme);
    const playersArray = generatePlayersArray(playersNumber);
    setCardsArray(randomizeArray(cardsArray));
    setPlayersArray(playersArray);
  }, [gridArea, theme, playersNumber])

  const restart = () => {
    setIsGameOver(false);
    setOpenCardsIndexes([]);
    startGame();
    setTimeLeft(120);
    setCurrentPlayer(1);
    setTotalTurns(0);
    setTotalPoints(0);
  }

  useEffect(() => {
    startGame();
  }, [startGame])

  //adds a countdown for solo mode
  useEffect(() => {
    if(playersArray.length === 1) {
      const endTime = new Date().getTime() + timeLeft * 1000;
      const timer = setInterval(() => {
        const currentTime = new Date().getTime();
        const timeRemaining = endTime - currentTime;
        if (timeRemaining <= 0 || isGameOver) {
          clearInterval(timer);
          setTimeLeft(0);
        } else {
          setTimeLeft(Math.ceil(timeRemaining / 1000));
        }
      }, 100);
  
      return () => clearInterval(timer);
    }
  }, [timeLeft, playersArray, isGameOver]);

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
    <div className={styles.page}>
      <Header restart={restart}/>
      {isGameOver ? <Result playersArray={sortPlayers(playersArray)} restart={restart} totalTurns={totalTurns}/> : null}
      {timeLeft === 0 && !isGameOver ? <DefeatModal totalTurns={totalTurns} restart={restart}/> : null}
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
  )
}

export default function GameWrapper() {
  return (
    <Suspense>
      <Game />
    </Suspense>
  )
}