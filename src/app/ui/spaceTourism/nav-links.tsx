"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from '@/app/ui/spaceTourism/navigation.module.css'
import clsx from 'clsx';
import { barlow, barlowCondensed, bellefair } from '@/app/ui/fonts';

const links = [
  { name: 'Home', href: '/projects/spaceTourism', number: "00" },
  { name: 'Destination', href: '/projects/spaceTourism/destination', number: "01" },
  { name: 'Crew', href: '/projects/spaceTourism/crew', number: "02" },
  { name: 'Technology', href: '/projects/spaceTourism/technology', number: "03" },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <div className={styles.linksWrapper}>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx( styles.linkWrapper, barlowCondensed.className, {
                [styles.activeLink]: pathname === link.href,
            })}
          >
            <p className={styles.number}>{link.number}</p>
            <p className={styles.name}>{link.name}</p>
          </Link>
        );
      })}
    </div>
  );
}
