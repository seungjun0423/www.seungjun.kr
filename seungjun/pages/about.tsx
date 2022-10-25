import styles from '../styles/Common.module.css'
import Header from './components/Header'
import Image from 'next/image'


const about = () => {
  return (
    <div>
      <Header></Header>
      <div className={styles.AboutName}>
        <h1>이승준(1994.04.23~)</h1>
        <h2>Web Engineer</h2>

        <div className={styles.AboutElement}>
          <h2>학력</h2>
          <br />
          <div className={styles.contents1}>
            점촌고등학교 <br />(2010.03~2012.12) <br />
            국민대학교 법학부 사법학 전공<br />(2013.03~2021.08) <br />
            코드 스테이츠 부트캠프 소프트엔지니어링 과정<br />(2022.01~2022.06)
          </div>
        </div>
        
        <div className={styles.AboutElement}>
          <h2>이력</h2>
          <br />
          <div className={styles.contents2}>
            공군 병장 만기 제대 <br />(2015.01~2017.01) <br />
            구로구청 공공근로 인턴십<br/> (2020.06~2020.12) <br />
            에피넷 FE <br />(2022.09.19 ~ )
          </div>
        </div>

        <div className={styles.AboutElement}>
          <h2>기술</h2>
          <br />
          <div className={styles.contents3}>
            <span>JavaScript, React.js, Node.JS, Git, Python</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default about
