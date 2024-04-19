'use client'
import NavLinks from '@/app/ui/spaceTourism/nav-links'
import Image from 'next/image';
import styles from '@/app/ui/spaceTourism/navigation.module.css'
import { useState } from 'react';
import clsx from 'clsx';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleClick() {
    setIsMenuOpen(true);
  }

  function handleClose() {
    setIsMenuOpen(false);
  }

  return (
    <div className={styles.wrapper}>
      <Image 
        src="/space-tourism/shared/logo.svg"
        width={48}
        height={48}
        className={styles.icon}
        alt="Space tourism logo"
      />
      <NavLinks isMenuOpen={isMenuOpen} handleClose={handleClose}/>
      <Image 
        src="/space-tourism/shared/icon-hamburger.svg"
        width={24}
        height={21}
        className={clsx(styles.hamburger, {
          [styles.hamburgerHidden] : isMenuOpen
        })}
        alt="Hamburger icon"
        onClick={handleClick}
      />
    </div>
  )
}