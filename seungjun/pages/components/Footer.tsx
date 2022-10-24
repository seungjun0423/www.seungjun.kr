import styles from'../../styles/Common.module.css'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className={styles.FooterWrapper}>
      <a href='sibonum@gmail.com' className={styles.FooterIcon}>
      <Image src="/email.png" width={55} height={60}></Image>
      </a>
      <a href='https://github.com/seungjun0423'>
        <Image src="/github.png" width={60} height={60}></Image>
      </a>
      <a href='https://seungjun0423.notion.site'>
        <Image src="/notion.png" width={60} height={60}></Image>
      </a>
    </div>
  )
}

export default Footer
