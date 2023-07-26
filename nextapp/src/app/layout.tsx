import '../styles/globals.css';
import styles from '../styles/layout.module.css';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Seungjun',
  description: 'Hi',
}

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
					<h1>Blog</h1>
					<nav className={styles.nav}>
					</nav>
				</header>
				
				<div className={styles.main}>
					<div className={styles.menubar}>
						<a>
							study
						</a>
						<a>
							profile
						</a>
						<a>
							etc
						</a>
					</div>
					<div className={styles.contents}>
						{children}
					</div>
				</div>
				
				<footer className={styles.footer}>
					풋터입니다
				</footer>
			</body>
    </html>
  )
}
