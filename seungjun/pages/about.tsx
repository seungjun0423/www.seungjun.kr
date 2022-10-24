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
          <div>
            점촌고등학교 (2010.03~2012.12) <br />
            국민대학교 법학부 사법학 전공(2013.03~2021.08) <br />
            코드 스테이츠 부트캠프 소프트엔지니어링 과정(2022.01~2022.06)
          </div>
        </div>
        
        <div className={styles.AboutElement}>
          <h2>이력</h2>
          <br />
          <div >
            공군 병장 만기 제대(2015.01~2017.01) <br />
            공공근로 인턴십 (구로구청 혁신교육지구, 2020.06~2020.12) <br />
            에피넷 FE (2022.09.19 ~ )
          </div>
        </div>

        <div className={styles.AboutElement}>
          <h2>기술</h2>
          <br />
          <div>
            <span>JavaScript, React.js, Node.JS, Git, Python</span>
          </div>
        </div>

        <div className={styles.AboutElement}>
          <h2>연락</h2>
          <br />
          <div>
            <h4>E-mail</h4> 
            : <a href='sibonum@gmail.com'>sibonum@gmail.com</a> <br /><br />
            <h4>Github</h4>
            : <a href='https://github.com/seungjun0423'>https://github.com/seungjun0423</a> <br /><br />
            <h4>Notion</h4>
            : <a href='https://seungjun0423.notion.site'>https://seungjun0423.notion.site</a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default about
