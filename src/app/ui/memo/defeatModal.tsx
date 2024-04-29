import styles from '@/app/ui/memo/defeatModal.module.css';
import buttons from '@/app/ui/memo/buttons.module.css';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function DefeatModal({ totalTurns, restart } : { totalTurns: number, restart: Function }) {
  const router = useRouter();
  const restartGame = () => {
    console.log('here')
    router.refresh();
    restart();
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.popup}>
        <p>You lost :C</p>
        <p>You`ve made {totalTurns} turns</p>
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