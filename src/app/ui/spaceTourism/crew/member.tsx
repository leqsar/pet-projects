import { members } from '@/app/utils/constants/members'
import styles from '@/app/ui/spaceTourism/crew/member.module.css'
import Image from 'next/image';
import { barlow, bellefair } from '@/app/ui/fonts';

export default function Member({ number }: {number: number}) {
  const currentMember = members.find(member => member.number === number);
  
  if(!currentMember) throw new Error('This member object does not exist')
  
  return (
    <div className={styles.memberWrapper}>
      <Image 
        src={currentMember.image}
        className={styles.image}
        alt={`Picture of ${currentMember.name}`}
      />
      <div className={styles.member}>
        <p className={`${styles.position} ${bellefair.className}`}>{currentMember.position}</p>
        <p className={`${styles.name} ${bellefair.className}`}>{currentMember.name}</p>
        <p className={`${styles.info} ${barlow.className}`}>{currentMember.info}</p>
      </div>
    </div>
  )
}