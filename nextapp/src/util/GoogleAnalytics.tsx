'use client';
import { NextScript } from 'next/document';
import Script from 'next/script'

export default function GoogleAnalytics({GA_TRACKING_ID} : {GA_TRACKING_ID : string}){
    return (
        <>
					<Script 
						src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
					/>
					<Script 
						id='google-analytics' 
						dangerouslySetInnerHTML={{
							__html: `
							window.dataLayer = window.dataLayer || [];
							function gtag(){dataLayer.push(arguments);}
							gtag('js', new Date());

							gtag('consent', 'default', {
									'analytics_storage': 'denied'
							});
							
							gtag('config', '${GA_TRACKING_ID}', {
									page_path: window.location.pathname,
							});
							`,
						}}
					/>
        </>
)}