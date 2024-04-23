'use client'
import styles from '@/app/projects/memo/settings/page.module.css'
import { useState } from 'react'
import { MouseEvent } from 'react'
import Link from 'next/link'

type Settings = {
  theme: 'numbers' | 'icons' | '';
  playersNumber: '1' | '2' | '3' | '4' | '';
  gridSize: '4x4' | '6x6' | '';
}

export default function Settings() {
  const [settings, setSetting] = useState<Settings>({
    theme: '',
    playersNumber: '',
    gridSize: ''
  });

  function handleClick(event: MouseEvent<HTMLDivElement>) {
    const currentTarget = event.currentTarget as HTMLElement;

    if(currentTarget.tagName === 'P') {

    }
  }

  return (
    <div className={styles.page}>
      <div className={styles.settings}>
        <div className={styles.settingWrapper}>
          <p className={styles.heading}>Select Theme</p>
          <div className={styles.themeWrapper} onClick={handleClick}>
            <p className={styles.theme}>Numbers</p>
            <p className={styles.theme}>Icons</p>
          </div>
        </div>
        <div className={styles.settingWrapper}>
          <p className={styles.heading}>Number of Players</p>
          <div className={styles.playersWrapper} onClick={handleClick}>
            <p className={styles.number}>1</p>
            <p className={styles.number}>2</p>
            <p className={styles.number}>3</p>
            <p className={styles.number}>4</p>
          </div>
        </div>
        <div className={styles.settingWrapper}>
          <p className={styles.heading}>Grid size</p>
          <div className={styles.sizesWrappers} onClick={handleClick}>
            <p className={styles.size}>4x4</p>
            <p className={styles.size}>6x6</p>
          </div>
        </div>
        <Link
          href={{ pathname: '/projects/memo/game', query: settings }}
          className={styles.button}
        >Start Game</Link>
      </div>
    </div>
  )
  
}