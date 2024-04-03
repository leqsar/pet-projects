import styles from '@/app/readyComponents/creditCard/page.module.css'
import button from '@/app/readyComponents/creditCard/button.module.css'
import Image from 'next/image'

export default function SuccessPopup() {
  return (
    <div className={styles.popup}>
      <Image
        src='/icon-complete.svg'
        width={80}
        height={80}
        alt='Checkmark icon'
      />
      <h2 className={styles.heading}>Thank you!</h2>
      <p className={styles.info}>We`ve added your card details</p>
      <button className={button.button}>Continue</button>
    </div>
  )
}