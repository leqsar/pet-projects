import styles from '@/app/projects/memo/page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.page}>
      <Link className={styles.link} href='/projects/memo/settings'>
        <button className={styles.button}>Play!</button>
      </Link>
    </div>
  )
}