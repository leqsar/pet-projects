"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from '@/app/ui/spaceTourism/navigation.module.css'
import Image from 'next/image';
import clsx from 'clsx';
import { barlowCondensed } from '@/app/ui/fonts';

const links = [
  { name: 'Home', href: '/projects/spaceTourism', number: "00" },
  { name: 'Destination', href: '/projects/spaceTourism/destination', number: "01" },
  { name: 'Crew', href: '/projects/spaceTourism/crew', number: "02" },
  { name: 'Technology', href: '/projects/spaceTourism/technology', number: "03" },
];

export default function NavLinks({ isMenuOpen, handleClose }: {
  isMenuOpen: boolean,
  handleClose: Function,
}) {
  const pathname = usePathname();

  return (
    <div className={clsx(styles.linksWrapper, {
      [styles.hamburgerMenu] : isMenuOpen
    })}>
      {isMenuOpen
        ? <Image 
          src="/space-tourism/shared/icon-close.svg"
          width={19}
          height={19}
          className={styles.crossIcon}
          onClick={() => handleClose()}
          alt="Cross icon"
        />
        : null
      }
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx( styles.linkWrapper, barlowCondensed.className, {
                [styles.activeLink]: pathname === link.href,
            })}
            onClick={() => handleClose()}
          >
            <p className={styles.number}>{link.number}</p>
            <p className={styles.name}>{link.name}</p>
          </Link>
        );
      })}
    </div>
  );
}
