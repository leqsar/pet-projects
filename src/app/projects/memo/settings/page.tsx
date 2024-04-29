'use client'
import styles from '@/app/projects/memo/settings/page.module.css';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import clsx from 'clsx';
import type { Settings } from '@/app/utils/constants/memo/types';
import { themesArray, sizesArray, playersArray } from '@/app/utils/constants/memo/settings';

export default function Settings() {
  const router = useRouter();
  const [settings, setSettings] = useState<Settings>({
    theme: '',
    playersNumber: '',
    gridSize: ''
  });
  const [shake, setShake] = useState(false);

  const handleChange = (key:string, value: string) => {
    setSettings(prevSettings => ({
      ...prevSettings,
      [key]: value
    }));
  };

  const startGame = () => {
    if(Object.values(settings).every(value => value !== '')) {
      router.push(
        `/projects/memo/game?theme=${settings.theme}&playersNumber=${settings.playersNumber}&gridSize=${settings.gridSize}`
      );
    } else {
      setShake(true);
      setTimeout(() => {
        setShake(false);
      }, 400);
    }
  }

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
                  [styles.chosen] : settings.theme === theme,
                  [styles.shake] : shake && (settings.theme === '')
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
                  [styles.chosen] : settings.playersNumber === num,
                  [styles.shake] : shake && (settings.playersNumber === '')
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
                  [styles.chosen] : settings.gridSize === size,
                  [styles.shake] : shake && (settings.gridSize === '')
                })}
              >{size}x{size}</p>
            ))}
          </div>
        </div>
        <button
          className={styles.button}
          onClick={startGame}
        >Start Game</button>
      </div>
    </div>
  )
}