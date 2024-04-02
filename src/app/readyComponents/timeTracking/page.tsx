import styles from './page.module.css'
import TimeCard from './timeCard'
import Image from 'next/image';
import { rubik } from '@/app/ui/fonts';

export default function TimeTrackingPage() {
  return (
    <div className={`${styles.page} ${rubik.className}`}>
      <div className={styles.cardWrapper}>
        <div className={styles.profileCard}>
          <div className={styles.profile}>
            <Image
              src='/image-jeremy.png'
              className={styles.photo}
              width={85}
              height={85}
              alt='Profile photo'
            ></Image>
            <p className={styles.heading}>Report for</p>
            <p className={styles.name}>John Doe</p>
          </div>
          <ul className={styles.termsList}>
            <li>Daily</li>
            <li>Weekly</li>
            <li>Monthly</li>
          </ul>
        </div>
        <TimeCard sphere='Work' imgSrc='/icon-work.svg' hours={32} lastWeekHours={36} />
        <TimeCard sphere='Play' imgSrc='/icon-play.svg' hours={10} lastWeekHours={8} />
        <TimeCard sphere='Study' imgSrc='/icon-study.svg' hours={4} lastWeekHours={7} />
        <TimeCard sphere='Exercise' imgSrc='/icon-exercise.svg' hours={4} lastWeekHours={6} />
        <TimeCard sphere='Social' imgSrc='/icon-social.svg' hours={5} lastWeekHours={10} />
        <TimeCard sphere='Self Care' imgSrc='/icon-self-care.svg' hours={2} lastWeekHours={2} />
      </div>
    </div>
  )
}