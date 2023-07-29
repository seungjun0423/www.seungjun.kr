import { Metadata } from 'next';
import '../styles/globals.css';
import styles from '../styles/layout.module.css';
import { Open_Sans, Nanum_Gothic } from 'next/font/google';
import Link from 'next/link';

const sans = Open_Sans({ subsets: ['latin']});
// const gothic = Nanum_Gothic({
// 	weight:"700",
// 	subsets: ['latin'],
// });

export const metadata: Metadata = {
  title: '이승준의 블로그',
  description: '웹 개발자, 리액트 개발자, 노드 개발자, 프론트엔드 개발자, 풀스택 개발자, 블록체인 개발자, 비전공자 개발자, web developer, react developer, node developer, fronted developer, fullstack developer, blockchain developer',
	
	// Todo: 디자인 작업하면서 파비콘 추가하기
	// icons: {
	// 	icon: favicon,
	// },
}

let dummy = [
	{
		title: 'study',
		subCategory: ['html', 'css', 'javaScript', 'react', 'next.js', 'nest.js', 'algorithm']
	},
	{
		title: 'profile',
		subCategory: [ 'age', 'career', 'teck stack', 'recent interest']
	},
	{
		title: 'etc',
		subCategory: ['schedule', 'reading', 'hobby']
	} 
]

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
			<head />
      <body >
				<header className={styles.header}>
					<Link className={styles.title} href={'/'}>Blog</Link>
					<Link className={styles.nav} href={'/admin'}>
						Admin
					</Link>
				</header>
				
				<div className={styles.main}>
					<div className={styles.sidebar}>
						{
							dummy.map( el => {
								return (
								<Link key={el.title} href={`/${el.title}`}>
									{el.title}
								</Link>
								)
							})
						}
					</div>
					<div className={styles.contents}>
						{children}
					</div>
				</div>
				
				<footer className={styles.footer}>
					<text>
						풋터입니다
					</text>
				</footer>
			</body>
    </html>
  )
}
