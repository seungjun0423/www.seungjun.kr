import styles from'../../styles/Common.module.css'
import Link from 'next/link'
import Image from 'next/image'


const Header = () => {
  return (
    <div className={styles.HeaderWrapper}>
      <Link href="/">
        <Image src="/no-background.svg" width={800} height={600} className={styles.TitleImage}/> 
      </Link>
    </div>
  )
}

export default Header
