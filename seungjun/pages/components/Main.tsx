import styles from'../../styles/Common.module.css'
import Link from 'next/link'


const Main = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.MenuWrapper}>
        <h2 className={styles.MenuItem}><Link href="/about">Introduce</Link></h2>
        <h2 className={styles.MenuItem}><Link href="/learn">Learn</Link></h2>
        <h2 className={styles.MenuItem}><Link href="/test">Test</Link></h2>
        <h2 className={styles.MenuItem}><Link href="/etc">etc</Link></h2>
      </div>
        <div className={styles.MainWrapper}>
          
        </div>
    </div>
  )
}

export default Main
