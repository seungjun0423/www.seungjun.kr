import React from "react";
import { Metadata } from 'next';
import '../styles/globals.css';

/** styled-components 적용을 위함 */
import StyledComponentsRegistry from '../styles/registry';

import { Open_Sans } from 'next/font/google';

// import GoogleAnalytics from "../components/utils/GoogleAnalytics";
import Main  from 'components/layouts/Main';
import Script from "next/script";

/** font */
const sans = Open_Sans({ subsets: ['latin']});

export const metadata: Metadata = {
  title: '이승준의 블로그',
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

export default function RootLayout( { children }: { children: React.ReactNode }): React.ReactElement {
  return (
    <html lang="ko">
			<head>
				{/* <GoogleAnalytics GA_TRACKING_ID={process.env.GA_TRACKING_ID as string} /> */}
				<Script 
							strategy="afterInteractive" 
							src={`https://www.googletagmanager.com/gtag/js?id=G-FHDZNV24LY`}
						/>
            <Script 
							id='google-analytics' 
							strategy="afterInteractive"
							dangerouslySetInnerHTML={{
                __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('consent', 'default', {
                    'analytics_storage': 'denied'
                });
                
                gtag('config', 'G-FHDZNV24LY', {
                    page_path: window.location.pathname,
                });
                `,
							}}
            />
				
			</head>
			<StyledComponentsRegistry>
				<body >
					<Main Children={children} />
				</body>
			</StyledComponentsRegistry>
    </html>
  );
};
