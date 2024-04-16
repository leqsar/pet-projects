import NavLinks from '@/app/ui/spaceTourism/nav-links'
import Image from 'next/image';
import styles from '@/app/ui/spaceTourism/navigation.module.css'

export default function Navigation() {
  return (
    <div className={styles.wrapper}>
      <Image 
        src="/space-tourism/shared/logo.svg"
        width={48}
        height={48}
        className={styles.icon}
        alt="Space tourism logo"
      />
      <NavLinks />
    </div>
  )
}