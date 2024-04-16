"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from '@/app/ui/spaceTourism/navigation.module.css'

const links = [
  { name: 'Home', href: '/spaceTourism', number: "00" },
  { name: 'Destination', href: '/spaceTourism/destination', number: "01" },
  { name: 'Crew', href: '/spaceTourism/crew', number: "02" },
  { name: 'Technology', href: '/spaceTourism/technology', number: "03" },
];

export default function NavLinks() {
  // const pathname = usePathname();

  return (
    <div className={styles.linksWrapper}>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={styles.linkWrapper}
          >
            <p className={styles.name}>{link.name}</p>
            <p className={styles.number}>{link.number}</p>
          </Link>
        );
      })}
    </div>
  );
}

// className={clsx(
//   'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
//   {
//     'bg-sky-100 text-blue-600': pathname === link.href,
//   },
// )}
