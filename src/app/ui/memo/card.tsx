import type { CardType, Theme } from "@/app/utils/constants/memo/types";
import clsx from "clsx";
import styles from '@/app/ui/memo/card.module.css';
import Image from "next/image";

type CardProps = {
  card: CardType,
  theme: Theme,
  handleCardClick: Function,
}

export default function Card({card, theme, handleCardClick} : CardProps) {
  const handleClick = () => {
    if(!card.isLocked && !card.isOpen && card.number) {
      handleCardClick(card.number);
    }
  }
  return (
    <div 
      onClick={handleClick}
      className={clsx(styles.card, {
        [styles.open] : card.isOpen,
        [styles.locked] : card.isLocked,
      })}
    >
      {theme === 'Icons' 
        ? <div className={styles.icon}>
            <Image
            src={card.content}
            fill
            alt='Game icon'
          ></Image>
          </div>
        : <p>{card.content}</p>
      }
    </div>
  )
}