import React from "react";
import dynamic from "next/dynamic";


export default function ReadPost({ children }: {children: number}){
	const DynamicPostViewer = dynamic(()=>import('components/lib/PostViewer'),{ssr: false});
	return(
		<div>
			<DynamicPostViewer>
				{children}
			</DynamicPostViewer>
		</div>
	)
}