'use client'
import styles from '@/app/projects/memo/settings/page.module.css';
import { useState } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import type { Settings } from '@/app/utils/constants/memo/types';
import { themesArray, sizesArray, playersArray } from '@/app/utils/constants/memo/settings';

export default function Settings() {
  const [settings, setSettings] = useState<Settings>({
    theme: '',
    playersNumber: '',
    gridSize: ''
  });

  const handleChange = (key:string, value: string) => {
    setSettings(prevSettings => ({
      ...prevSettings,
      [key]: value
    }));
  };

  return (
    <div className={styles.page}>
      <div className={styles.settings}>
        <div className={styles.settingWrapper}>
          <p className={styles.heading}>Select Theme</p>
          <div className={styles.themeWrapper}>
            {themesArray.map(theme => (
              <p 
                key={theme} 
                onClick={() => handleChange('theme', theme)}
                className={clsx(styles.theme, {
                  [styles.chosen] : settings.theme === theme
                })}
              >{theme}</p>
            ))}
          </div>
        </div>
        <div className={styles.settingWrapper}>
          <p className={styles.heading}>Number of Players</p>
          <div className={styles.playersWrapper}>
            {playersArray.map(num => (
              <p 
                key={num} 
                onClick={() => handleChange('playersNumber', num)}
                className={clsx(styles.number, {
                  [styles.chosen] : settings.playersNumber === num
                })}
              >{num}</p>
            ))}
          </div>
        </div>
        <div className={styles.settingWrapper}>
          <p className={styles.heading}>Grid size</p>
          <div className={styles.sizesWrappers}>
            {sizesArray.map(size => (
              <p 
                key={size} 
                onClick={() => handleChange('gridSize', size)}
                className={clsx(styles.size, {
                  [styles.chosen] : settings.gridSize === size
                })}
              >{size}x{size}</p>
            ))}
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