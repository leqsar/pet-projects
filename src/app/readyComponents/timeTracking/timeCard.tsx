import styles from './page.module.css'
import Image from 'next/image';

export default function TimeCard({
  sphere,
  imgSrc,
  hours,
  lastWeekHours
}:{
  sphere: string,
  imgSrc: string,
  hours: number,
  lastWeekHours: number
}) {
  return (
    <div className={styles.timeCard}>
      <Image
        src={imgSrc}
        className={styles.image}
        width={79}
        height={79}
        alt=''
      ></Image>
      <div className={styles.card}>
        <p>{sphere}</p>
        <p>{hours}hrs</p>
        <p>Last week - {lastWeekHours}hrs</p>
      </div>
      <Image
        src='/icon-ellipsis.svg'
        className={styles.menuIcon}
        width={21}
        height={5}
        alt='Menu icon'
      ></Image>
    </div>
  )
}