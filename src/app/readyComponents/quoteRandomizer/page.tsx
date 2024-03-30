'use client'

import styles from './page.module.css'
import { useState } from 'react';
import Image from 'next/image';

export default function QuoteRandomizer() {
  const [adviceObj, setAdviceObj] = useState({
      id: '0',
      advice: 'Click the button below to get your first advice',
  });

  async function handleClick() {
    try {
      const response = await fetch('https://api.adviceslip.com/advice');
      const advice = await response.json();
      setAdviceObj(advice.slip)
    } catch (err) {
      console.error('Error occurred during the advice fetching', err)
    }
  }

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <p className={styles.adviceNumber}>ADVICE # {adviceObj.id}</p>
        <p className={styles.advice}>{adviceObj.advice}</p>
        <Image 
          className={styles.stripe}
          width={445}
          height={16}
          src='/pattern-divider-desktop.svg'
          alt=''
        ></Image>
        <Image 
          className={styles.stripeMobile}
          width={300}
          height={16}
          src='/pattern-divider-mobile.svg'
          alt=''
        ></Image>
        <button className={styles.button} onClick={handleClick}>
          <Image
            className={styles.dice}
            width={24}
            height={24}
            src='/icon-dice.svg'
            alt='Dice icon'
          ></Image>
        </button>
      </div>
    </div>
  )
}