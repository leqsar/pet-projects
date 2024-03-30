import styles from './page.module.css'
import Card from '../ui/readyComponents/card'

export default function CardsWrapper() {
  return (
    <>
      <h1 className={styles.title}>Small components such as cards and etc.</h1>
      <div className={styles.cards}>
        <Card linkHref='/readyComponents/cardComponent' imageSrc='/desktop-design.jpg' name='Blog preview card'></Card>
        <Card linkHref='/readyComponents/quoteRandomizer' imageSrc='/quote-design.jpg' name='Quote randomizer'></Card>
      </div>
    </>
  )
}