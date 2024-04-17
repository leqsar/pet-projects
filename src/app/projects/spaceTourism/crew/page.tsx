'use client'
import styles from '@/app/projects/spaceTourism/crew/page.module.css'
import { useState } from 'react';
import { MouseEvent } from 'react';
import Member from '@/app/ui/spaceTourism/crew/member';
import clsx from 'clsx';

export default function Crew() {
  const [memberNumber, setMemberNumber] = useState(1);

  function handleClick(event: MouseEvent<HTMLUListElement>) {
    const eventTarget = event.target as HTMLElement;
    if(eventTarget.tagName === 'LI') {
      setMemberNumber(Number(eventTarget.dataset.number))
    }
  }

  return (
    <div className={styles.page}>
      <div className={styles.headingWrapper}>
        <span className={styles.number}>01</span>
        <h1 className={styles.heading}>pick your destination</h1>
      </div>
      <Member number={memberNumber}/>
      <ul className={styles.pagination} onClick={handleClick}>
        {[1,2,3,4].map((number) => {
          return (
            <li 
              key={number}
              className={clsx(styles.pagePointer, {
                [styles.active]: number === memberNumber
              })}
              data-number={number}
            ></li>
          )
        })}
      </ul>
    </div>
  )
}