import './globals.css';
import styles from './layout.module.css';
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
				<header>
					<nav>
						<h1>seungjun blog</h1>
						<a href=''>Contact</a>
						<a href=''>About</a>
					</nav>
				</header>
				{children}
			</body>
    </html>
  )
}
