'use client'
import styles from '@/app/readyComponents/creditCard/page.module.css'

export default function Error({ message }: {message: string}) {
  return (
    <p className={styles.error}>{message}</p>
  )
}