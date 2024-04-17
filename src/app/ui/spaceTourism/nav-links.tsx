"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from '@/app/ui/spaceTourism/navigation.module.css'
import clsx from 'clsx';

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
            className={clsx( styles.linkWrapper, {
                [styles.activeLink]: pathname === link.href,
            })}
          >
            <p className={styles.name}>{link.name}</p>
            <p className={styles.number}>{link.number}</p>
          </Link>
        );
      })}
    </div>
  );
}

// styles.linkWrapper

// className={clsx(
//   'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
//   {
//     'bg-sky-100 text-blue-600': pathname === link.href,
//   },
// )}
