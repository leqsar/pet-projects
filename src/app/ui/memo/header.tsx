'use client'
import styles from '@/app/ui/memo/header.module.css';
import Link from 'next/link';
import { useState } from 'react';
import clsx from 'clsx';
import Image from 'next/image';

export default function Header({restart} : {restart: Function}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function showMenu() {
    setIsMenuOpen(prevState => {
      return !prevState;
    })
  }

  function handleClick() {
    setIsMenuOpen(false);
    restart();
  }

  return (
    <header className={styles.header}>
      <div className={clsx(styles.shadow, {
        [styles.activeShadow] : isMenuOpen,
      })}></div>
      <Link href='/projects/memo' className={styles.heading}>memo</Link>
      <nav className={clsx(styles.navigation, {
        [styles.activeMenu] : isMenuOpen,
      })}>
        <button
          className={styles.restartButton}
          onClick={handleClick}
        >Restart</button>
        <Link href='/projects/memo/settings' className={styles.newGameButton}>New Game</Link>
        <button className={styles.cross} onClick={showMenu}>
          <Image
            src='/memo/cross.svg'
            fill
            alt='Cross icon'
          ></Image>
        </button>
      </nav>
      <button className={styles.menuButton} onClick={showMenu}>Menu</button>
    </header>
  )
}