import styles from '../styles/Common.module.css'
import Header from './components/Header'

const about = () => {
  return (
    <div>
      <Header></Header>
      <div className={styles.AboutWrapper}>
        <h1>이승준(1994.04.23~)</h1>
        <h2>Web Engineer</h2>

        <div>
          <h2>학력</h2>
          <br />
          <div>
            점촌고등학교 졸업 <br />
            국민대학교 법학부 사법학 전공(2013.03~2021.08) <br />
            코드 스테이츠 부트캠프 소프트엔지니어링 과정(2022.01~2022.06) <br />
          </div>
        </div>
        
        <div>
          <h2>이력</h2>
          <br />
          <div>
            공군 병장 만기 제대(2015.01~2017.01) <br />
            공공근로인턴십(구로구청 혁신교육지구, 2020.06~2020.12) <br />
            에피넷(2022.09.19 ~ )<br />
          </div>
        </div>

        <div>
          <h2>연락</h2>
        </div>

        <div>
          <h2>기술</h2>
        </div>

      </div>
    </div>
  )
}

export default about
