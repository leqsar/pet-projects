import styles from '@/app/ui/spaceTourism/destination/planet.module.css'
import Image from 'next/image';
import { planets } from '@/app/utils/constants/planets';
import { barlow, barlowCondensed, bellefair } from '@/app/ui/fonts';

export default function Planet({ name } : {name: string}) {
  const currentPlanet = planets.find(planet => planet.name === name);
  
  if(!currentPlanet) throw new Error('This space object does not exist')
  
  return (
    <div className={styles.planetWrapper}>
      <div className={styles.imageWrapper}>
        <Image
          src={currentPlanet.imageSrc}
          fill
          className={styles.image}
          alt={`Picture of ${currentPlanet.name}`}
        />
      </div>
      <div className={styles.planet}>
        <p className={`${styles.name} ${bellefair.className}`}>{currentPlanet.name}</p>
        <p className={`${styles.info} ${barlow.className}`}>{currentPlanet.info}</p>
        <ul className={styles.statsWrapper}>
          <li className={styles.stats}>
            <p className={`${styles.statsHeader} ${barlowCondensed.className}`}>avg. distance</p>
            <p className={`${styles.statsInfo} ${bellefair.className}`}>{currentPlanet.distance}</p>
          </li>
          <li className={styles.stats}>
            <p className={`${styles.statsHeader} ${barlowCondensed.className}`}>est. travel time</p>
            <p className={`${styles.statsInfo} ${bellefair.className}`}>{currentPlanet.travelTime}</p>
          </li>
        </ul>
      </div>
    </div>
  )
}