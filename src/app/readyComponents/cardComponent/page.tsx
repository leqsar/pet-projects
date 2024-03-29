import styles from './page.module.css'
import Image from 'next/image'

export default function BlogCard() {
    return (
    <div className={styles.pageWrapper}>
      <div className={styles.card}>
        <Image 
          src='/illustration-article.svg'
          className={styles.image}
          width={336}
          height={200}
          alt='Illustration'
        ></Image>
        <p className={styles.status}>Learning</p>
        <p className={styles.date}>Published 30 Mar 2024</p>
        <h1 className={styles.title}>HTML & CSS foundations</h1>
        <p className={styles.description}>These languages are the backbone of every website, defining structure, content, and presentation</p>
        <div className={styles.author}>
          <Image 
            src='/image-avatar.webp'
            className={styles.authorPhoto}
            width={32}
            height={32}
            alt='Author`s photo'
          ></Image>
          <p>John Doe</p>
        </div>
      </div>
    </div>
  )
}