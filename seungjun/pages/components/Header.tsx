import styles from'../../styles/Common.module.css'
import Link from 'next/link'
import Image from 'next/image'


const Header = () => {
  return (
    <div className={styles.HeaderWrapper}>
      <Image src="/icon-192x192.png" width={100} height={100}/> 
      <h1><Link href="/">Seungjun Lee</Link></h1>
    </div>
  )
}

export default Header
