'use client'
import styles from '@/app/projects/spaceTourism/destination/page.module.css'
import { useState } from 'react'
import Planet from '@/app/ui/spaceTourism/destination/planet';
import { MouseEvent } from 'react';
import clsx from 'clsx';
import { barlowCondensed, barlow, bellefair } from '@/app/ui/fonts';

export default function Destination() {
  const [name, setName] = useState('moon');

  function handleClick(event: MouseEvent<HTMLUListElement>) {
    const targetElem = event.target as HTMLElement;
    if(targetElem.tagName === 'LI' && targetElem.textContent) {
      setName(targetElem.textContent);
    }
  }

  return (
    <div className={styles.page}>
      <div className={`${styles.headingWrapper} ${barlowCondensed.className}`}>
        <span className={styles.number}>01</span>
        <h1 className={styles.heading}>pick your destination</h1>
      </div>
      <nav className={styles.navigationWrapper}>
        <ul className={`${styles.navigation} ${barlowCondensed.className}`} onClick={handleClick}>
          <li className={clsx(styles.destination,{
            [styles.activeDestination]: name === 'moon',
          })}>moon</li>
          <li className={clsx(styles.destination,{
            [styles.activeDestination]: name === 'mars',
          })}>mars</li>
          <li className={clsx(styles.destination,{
            [styles.activeDestination]: name === 'europa',
          })}>europa</li>
          <li className={clsx(styles.destination,{
            [styles.activeDestination]: name === 'titan',
          })}>titan</li>
        </ul>
      </nav>
      <Planet name={name}/>
    </div>
  )
}