import React, { ReactNode } from "react";
import { Metadata } from 'next';
import Script from "next/script";
import '../styles/globals.css';

import StyledComponentsRegistry from '../components/lib/registry';

import GoogleAnalytics from "util/GoogleAnalytics";
import Main  from 'components/layouts/Main';
import Header from "components/layouts/Header";
import Footer from "components/layouts/Footer";

import localFont from 'next/font/local';
import { ScriptTag } from "util/InlineScript";
import { ColorModeProvider } from "data/ColorModeContext";
import ThemeContext from "data/ThemeContext";

const font = localFont({
  src: '../../public/font/JalnanOTF.otf',
  display: 'swap',
})

export type Props = {
	children: ReactNode;
}

export const metadata: Metadata = {
	metadataBase: new URL(`${process.env.NEXT_PUBLIC_REDIRECT}`),
  title: {
		default: '이승준의 개발 블로그',
		template: '이승준의 개발 블로그 | %s'
	},
  description: '웹 개발자, 리액트 개발자, 프론트엔드 개발자, 풀스택 개발자, 비전공자 개발자, web developer, react developer, fronted developer, fullstack developer',
	openGraph: {
		type: 'website',
		description: '이승준의 개발 블로그',
		url: 'https://www.seungjun.kr/',
		locale: "ko_KR",
	},
	viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
	
	verification: {
	google:"1W_oTVzw1T7HBJ1qU74euJ4kUOqKIOaSGMqYCN3jF",
		other: {
			"naver-site-verification":"ed9b5c6474ce11bd2641d3627ae889ce9a58c002"
		}
	},
}

export default function RootLayout ({ children }: Props) {

  return (
		<ColorModeProvider>
		<ThemeContext>
		<html lang="ko">
			<head>
				<GoogleAnalytics 
					GA_TRACKING_ID={process.env.NEXT_PUBLIC_GA_TRACKING_ID as string} 
				/>
				<ScriptTag />
			</head>
			<StyledComponentsRegistry >
				<body className={font.className}>
					<Header/>
						<Main>
							{children}
						</Main>
					<Footer/>
				</body>
			</StyledComponentsRegistry>
    </html>
		</ThemeContext>
		</ColorModeProvider>
  );
};
