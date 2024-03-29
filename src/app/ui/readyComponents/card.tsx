import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export default function Card({
  imageSrc,
  linkHref,
  name
}: {
  imageSrc: string,
  linkHref: string,
  name: string,
}) {
  return (
    <>
      <div>
        <Link href={linkHref} className={styles.cardWrapper}>
          <p className={styles.name}>{name}</p>
          <Image
            src={imageSrc}
            width={288}
            height={192}
            alt="Card preview"
          />
        </Link>
      </div>
    </>
  )
}