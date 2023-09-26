import Image from "next/image";
import styles from 'styles/about.module.css';
import { FcGraduationCap, FcSupport } from 'react-icons/fc'


interface Props  {
	params: {
		slug: any;
	};
};

export default function About ({ params }: Props) {
	return(
		<section key='about' className={styles.contents}>
			<div className={styles.profileBox}>
				<Image
					className={styles.profile}
					alt='이미지 준비중입니다' 
					src={'https://s3.ap-northeast-2.amazonaws.com/www.seungjun.kr/prod/PHOTO_001128.jpg'} 
					width={300}
					height={315}
					/>
				</div>
				<div className={styles.textBox}>
					<h2 className={styles.title}> study <FcGraduationCap /> </h2>
					<div>
						함창초등학교<br/> 
						함창중등학교<br/>  
						점촌고등학교<br/>
						국민대학교 법학부<br/> 
						코드스테이츠 SEB 
					</div>
					<h2 className={styles.title}> tech <FcSupport/></h2>
					<div>
						javascript<br/>
						typscript<br/>
						react<br/>
						next.js<br/>
					</div>
					<h2 className={styles.title}> experienced </h2>
					<div>
						node<br/>
						express<br/>
						nest.js<br/>
						prisma<br/>
						mysql<br/>
						aws<br/>
						leaflet<br/>
						docker<br/>
						etc...
					</div>
					<h2 className={styles.title}> interested in </h2>
					<div>
						blockchain<br/>
						solidity<br/>
					</div>
				</div>
		</section>
	)
};
