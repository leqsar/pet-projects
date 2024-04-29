import styles from '@/app/ui/memo/result.module.css'
import buttons from '@/app/ui/memo/buttons.module.css'
import { Player } from '@/app/utils/constants/memo/types'
import ResultStatsCard from './resultStatsCard'
import Link from 'next/link'
import { useRouter } from 'next/navigation';

type Props = {
  playersArray: Player[],
  restart: Function,
  totalTurns: number,
}

export default function Result({playersArray, restart, totalTurns} : Props) {
  const router = useRouter();

  const restartGame = () => {
    router.refresh();
    restart();
  }

  return (
    <div className={styles.popupWrapper}>
      <div className={styles.popup}>
        <h1 className={styles.heading}>
          {playersArray.length === 1
            ? 'Victory!'
            : `Player ${playersArray[0].playerNumber} Wins!`
          }
        </h1>
        <p className={styles.subheading}>Game is over! Here are the results...</p>
        <ul className={styles.resultsWrapper}>
          {playersArray.map((player) => {
            return (
              <ResultStatsCard
              key={player.playerNumber}
              player={player}
              totalTurns={playersArray.length === 1 ? totalTurns : undefined}
            />)
          })}
        </ul>
        <div className={buttons.buttonsWrapper}>
          <button 
            className={buttons.restartButton}
            onClick={restartGame}
          >Restart</button>
          <Link href='/projects/memo/settings' className={buttons.newGameButton}>Setup New Game</Link>
        </div>
      </div>
    </div>
  )
}