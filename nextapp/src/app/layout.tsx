import React from "react";
import { Metadata } from 'next';
import '../styles/globals.css';



/** styled-components 적용을 위함 */
import StyledComponentsRegistry from '../styles/registry';

import { Open_Sans } from 'next/font/google';

import GoogleAnalytics from "../util/GoogleAnalytics";
import Main  from 'components/layout/Main';

/** font */
const sans = Open_Sans({ subsets: ['latin']});

export const metadata: Metadata = {
  title: {
		default: '이승준의 블로그',
		template: '개발 블로그 | %s'
	},
  description: '웹 개발자, 리액트 개발자, 노드 개발자, 프론트엔드 개발자, 풀스택 개발자, 블록체인 개발자, 비전공자 개발자, web developer, react developer, node developer, fronted developer, fullstack developer, blockchain developer',

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
	}
	// Todo: 디자인 작업하면서 파비콘 추가하기
	// icons: {
	// 	icon: favicon,
	// },
}

export default function RootLayout ({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
			<GoogleAnalytics GA_TRACKING_ID={process.env.GA_TRACKING_ID as string} />
			<StyledComponentsRegistry>
				<body >
					<Main>
						{children}
					</Main>
				</body>
			</StyledComponentsRegistry>
    </html>
  );
};
