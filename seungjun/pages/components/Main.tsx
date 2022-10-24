import styles from'../../styles/Common.module.css'
import Link from 'next/link'
import Image from 'next/image'



const Main = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.MenuWrapper}>
        <h2 className={styles.MenuItem}><Link href="/about"><Image src="/about.svg" width={600} height={600}></Image></Link></h2>
        <h2 className={styles.MenuItem}><Link href="/learn"><Image src="/learn.svg" width={600} height={600}></Image></Link></h2>
        <h2 className={styles.MenuItem}><Link href="/test"><Image src="/test.svg" width={600} height={600}></Image></Link></h2>
        <h2 className={styles.MenuItem}><Link href="/etc"><Image src="/etc.svg" width={600} height={600}></Image></Link></h2>
      </div>
        <div className={styles.MainWrapper}>
          
        </div>
    </div>
  )
}

export default Main
