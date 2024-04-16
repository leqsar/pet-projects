import styles from './page.module.css'
import Card from '../ui/card'

export default function CardsWrapper() {
  return (
    <>
      <h1 className={styles.title}>Projects</h1>
      <div className={styles.cards}>
        <Card linkHref='/projects/spaceTourism' imageSrc='/space-tourism-design.jpg' name='Space tourism site'></Card>
      </div>
    </>
  )
}