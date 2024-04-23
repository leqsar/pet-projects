'use client'
import styles from '@/app/projects/memo/game/page.module.css';
import { useSearchParams } from 'next/navigation';
import StatsCard from '@/app/ui/memo/inGameStatsCard';
import generateNumbersArray from '@/app/utils/constants/memo/generateNumbersArray';
import type { CardType, Theme, Stats } from '@/app/utils/constants/memo/types';
import Card from '@/app/ui/memo/card';
import { useEffect, useState } from 'react';
import randomizeArray from '@/app/utils/constants/memo/randomizeArray';
import checkMatch from '@/app/utils/constants/memo/chechMatch';
import generatePlayersArray from '@/app/utils/constants/memo/generatePlayers';

export default function Game() {
  const searchParams = useSearchParams();
  const [cardsArray, setCardsArray] = useState<CardType[] | []>([]);
  const [playersArray, setPlayersArray] = useState<Stats[] | []>([]);
  const [openCardsIndexes, setOpenCardsIndexes] = useState<number[] | []>([]);
  const [clickable, setClickable] = useState(true);

  const theme = searchParams.get('theme') as Theme;
  const playersNumber = Number(searchParams.get('playersNumber'));
  const gridSize = Number(searchParams.get('gridSize'));
  const gridArea = gridSize*gridSize;

  if(!theme || !playersNumber || !gridSize) {
    throw new Error('Ooops, something went wrong');
  }

  useEffect(() => {
    const cardsArray = generateNumbersArray(gridArea, theme);
    const playersArray = generatePlayersArray(playersNumber);
    setCardsArray(randomizeArray(cardsArray));
    console.log(playersArray);
    setPlayersArray(playersArray);
  }, [gridArea, theme, playersNumber])

  useEffect(() => {
    if(openCardsIndexes.length === 2) {
      const arrCopy = [...cardsArray];
      setClickable(false);
      setTimeout(() => {
        if(checkMatch(cardsArray, openCardsIndexes)) {
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
      }, 1000)
      }
    }, [openCardsIndexes, cardsArray])

  const handleCardClick = (number: number) => {
    if(clickable) {
      const cardIndex = cardsArray.findIndex((card) => card.number === number);
      const card = cardsArray[cardIndex];
      card.isOpen = true;
      const arrCopy = [...cardsArray];
      arrCopy.splice(cardIndex, 1, card);
      setCardsArray(arrCopy);
      setOpenCardsIndexes([...openCardsIndexes, cardIndex])
    }
  }

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1>memo</h1>
        <nav className={styles.navigation}>
          <button className={styles.restartButton}>Restart</button>
          <button className={styles.newGameButton}>New Game</button>
        </nav>
      </header>
      <main>
        <div className={`${styles.field} ${styles['size'+gridArea]}`}>
          {cardsArray.map((card) => {
            return (
              <Card
                key={card.content}
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
              return <StatsCard player={player} key={player.playerNumber}/>
            })
          : <div className={styles.soloStats}>
              <p className={styles.time}>0:00</p>
              <p className={styles.pairs}>Pairs </p>
            </div>
        }
      </footer>
    </div>
  )
}