import styles from '@/app/ui/spaceTourism/technology/technology.module.css'
import { technologies } from '@/app/utils/constants/technologies'
import Image from 'next/image';
import { barlowCondensed, barlow, bellefair } from '@/app/ui/fonts';
import { useMediaQuery } from 'react-responsive'

export default function Technology({ techNumber }: {techNumber: number}) {
  const currentTech = technologies.find(technology => technology.number === techNumber);
  const isTabletSize = useMediaQuery({query: '(max-width: 950px)'});
  console.log(isTabletSize)
  
  if(!currentTech) throw new Error('This space technology does not exist')
  
    return (
      <div className={styles.technologyWrapper}>
        <div className={styles.technology}>
          <p className={`${styles.heading} ${barlowCondensed.className}`}>the terminology...</p>
          <h1 className={`${styles.name} ${bellefair.className}`}>{currentTech.name}</h1>
          <p className={`${styles.definition} ${barlow.className}`}>{currentTech.definition}</p>
        </div>
        <Image 
          src={isTabletSize? currentTech.imageTablet : currentTech.image}
          className={styles.image}
          alt={`Picture of ${currentTech.name}`}
        />
      </div>
  )
}