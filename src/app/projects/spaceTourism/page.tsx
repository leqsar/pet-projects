import { Butterfly_Kids } from 'next/font/google'
import styles from './page.module.css'

export default function CardsWrapper() {
  return (
    <div className={styles.page}>
      <article className={styles.textWrapper}>
        <p className={styles.subheading}>
          SO, YOU WANT TO TRAVEL TO
        </p>
        <h1 className={styles.heading}>space</h1>
        <p className={styles.info}>
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