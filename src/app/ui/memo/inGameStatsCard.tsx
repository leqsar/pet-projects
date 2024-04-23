import styles from '@/app/ui/memo/statsCard.module.css';
import { Stats } from '@/app/utils/constants/memo/types';

export default function StatsCard({ player } : {player : Stats}) {
  return (
    <div className={styles.statsWrapper}>
      <p className={styles.player}>Player {player.playerNumber}</p>
      <p className={styles.score}>{player.score}</p>
    </div>
  )
}