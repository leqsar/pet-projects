'use client'
import styles from '@/app/projects/spaceTourism/technology/page.module.css'
import Technology from '@/app/ui/spaceTourism/technology/technology'
import { MouseEvent } from 'react';
import { useState } from 'react';
import clsx from 'clsx';
import { barlowCondensed } from '@/app/ui/fonts';

export default function Technologies() {
  const pageNumbersArray = [1,2,3];
  const [techNumber, setTechNumber] = useState(1);

  function handleClick(event: MouseEvent<HTMLUListElement>) {
    const eventTarget = event.target as HTMLElement;

    if(eventTarget.tagName === 'LI') {
      setTechNumber(Number(eventTarget.textContent));
    }
  }

  return (
    <div className={styles.page}>
      <div className={`${styles.headingWrapper} ${barlowCondensed.className}`}>
        <span className={styles.number}>03</span>
        <h1 className={styles.heading}>space launch 101</h1>
      </div>
      <div className={styles.main}>
        <ul className={styles.pagination} onClick={handleClick}>
          {pageNumbersArray.map((elem) => {
            return (
              <li 
                key={elem}
                className={clsx(styles.pageNumber, {
                  [styles.active]: elem === techNumber
                })}>
              {elem}</li>
            )
          })}
        </ul>
        <Technology techNumber={techNumber}/>
      </div>
    </div>
  )
}