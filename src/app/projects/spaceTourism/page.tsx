import styles from './page.module.css';
import { barlow, barlowCondensed, bellefair } from '@/app/ui/fonts';

export default function CardsWrapper() {
  return (
    <div className={`${styles.page} ${barlowCondensed.className}`}>
      <article className={styles.textWrapper}>
        <p className={styles.subheading}>
          SO, YOU WANT TO TRAVEL TO
        </p>
        <h1 className={`${styles.heading} ${bellefair.className}`}>space</h1>
        <p className={`${styles.info} ${barlow.className}`}>
          Let’s face it; if you want to go to space, you might as well
          genuinely go to outer space and not hover kind of on the edge
          of it. Well sit back, and relax because we’ll give you a truly
          out of this world experience!
        </p>
      </article>
      <button className={styles.button}>explore</button>
    </div>
  )
}