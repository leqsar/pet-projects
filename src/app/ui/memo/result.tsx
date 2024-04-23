import styles from '@/app/ui/memo/result.module.css'
import { Player } from '@/app/utils/constants/memo/types'
import ResultStatsCard from './resultStatsCard'
import Link from 'next/link'
import { useRouter } from 'next/navigation';

export default function Result({playersArray, restart} : {playersArray: Player[], restart: Function}) {
  const router = useRouter();

  function restartGame() {
    router.refresh();
    restart();
  }

  return (
    <div className={styles.popupWrapper}>
      <div className={styles.popup}>
        <h1 className={styles.heading}>Player {playersArray[0].playerNumber} Wins!</h1>
        <p className={styles.subheading}>Game is over! Here are the results...</p>
        <ul className={styles.resultsWrapper}>
          {playersArray.map((player) => {
            return <ResultStatsCard key={player.playerNumber} player={player}/>
          })}
        </ul>
        <div className={styles.buttonsWrapper}>
          <button 
            className={styles.restartButton}
            onClick={restartGame}
          >Restart</button>
          <Link href='/projects/memo/settings' className={styles.newGameButton}>Setup New Game</Link>
        </div>
      </div>
    </div>
  )
}