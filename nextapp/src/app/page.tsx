import Link from "next/link";
import { FaGithubSquare, FaInstagram } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import styles from 'styles/home.module.css';

export default function Home() {
  return (
    <section key='home' className={styles.home}>
			<div className={styles.box}>
				방문해주셔서 감사합니다.<br/> 
			</div>
			{/* <div className={styles.box}>
				현재는 
				<Link 
					className={styles.link}
					title="클릭시 노션으로 이동합니다"
					href={'https://seungjun0423.notion.site/root-d581f61308a140a39d0d01807b6c457b?pvs=4'}>
					&nbsp;Notion&nbsp;
				</Link>
				에서 이사중입니다...<br/>
			</div>
			<div className={styles.box}>
				더 궁금한 점은
				<Link 
					className={styles.link}
					title="클릭시 노션으로 이동합니다"
					href={'https://seungjun0423.notion.site/root-d581f61308a140a39d0d01807b6c457b?pvs=4'}>
					&nbsp;Notion&nbsp;
				</Link>
				을 참고해주세요.<br/>
			</div>
			<div className={styles.box}>
				<span style={{marginRight: '10px'}}>
					Contact:
				</span>
				<Link href={'https://github.com/seungjun0423'} className={styles.link}>
					<FaGithubSquare 
						style={{width: '35px',height:'35px', cursor:'pointer'}} 
					/>
				</Link>
				<Link href={'https://www.instagram.com/azzacha00/'} className={styles.link}>
					<FaInstagram 
						style={{width: '35px',height:'35px', cursor:'pointer'}} 
					/>
				</Link>
				<Link href={'mailto: tmdwns0423@nate.com'} className={styles.link}>
					<FiMail 
						style={{width: '35px',height:'35px', cursor:'pointer'}} 
					/>
				</Link>
			</div> */}
    </section>
  );
}
