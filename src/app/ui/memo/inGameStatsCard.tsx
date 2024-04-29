import styles from '@/app/ui/memo/statsCard.module.css';
import { Player } from '@/app/utils/constants/memo/types';
import clsx from 'clsx';

export default function StatsCard({ player, currentPlayer } : {player: Player, currentPlayer: number}) {
  return (
    <div className={clsx(styles.statsWrapper, {
      [styles.active] : player.playerNumber === currentPlayer
    })}>
      <p className={styles.player}>Player {player.playerNumber}</p>
      <p className={styles.score}>{player.score}</p>
    </div>
  )
}