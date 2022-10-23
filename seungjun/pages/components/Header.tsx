import styles from'../../styles/Common.module.css'
import Link from 'next/link'


const Header = () => {
  return (
    <div className={styles.HeaderWrapper}>
      <h1><Link href="/">Seungjun Lee</Link></h1>
    </div>
  )
}

export default Header
