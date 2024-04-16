import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <Link href='/readyComponents' className={styles.components}>Small/single page components</Link>
      <Link href='/projects' className={styles.projects}>Projects</Link>
    </main>
  );
}
