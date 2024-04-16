import Navigation from '@/app/ui/spaceTourism/navigation'
import styles from '@/app/projects/spaceTourism/layout.module.css'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.page}>
      <Navigation />
      {children}
    </div>
  );
}