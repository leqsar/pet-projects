import { Player } from "@/app/utils/constants/memo/types";
import styles from '@/app/ui/memo/resultsCard.module.css'

export default function ResultStatsCard({ player, totalTurns }: {player: Player, totalTurns?: number}) {
  return (
    <li className={styles.stats}>
      <p className={styles.player}>Player {player.playerNumber}</p>
      <p className={styles.score}>
        {totalTurns
          ? `${totalTurns} Turns` 
          : `${player.score} Pairs` 
        }
      </p>
    </li>
  )
}