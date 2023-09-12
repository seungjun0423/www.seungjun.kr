'use clinet'
import React from "react";
import dynamic from "next/dynamic";
const DynamicPostViewer = dynamic(()=>import('components/lib/PostViewer'),{ssr: false});
import Postviewer from "components/lib/PostViewer";

interface Post  {
	params: {
		slug: number;
	};
};

export default async function Post({ params: { slug } }: Post) {
	const postData = await fetch(`${process.env.NEXT_PUBLIC_CORS_URL}/post/id/${slug}`,
	{
		method: 'GET',
		cache: 'no-store',
	})
	.then(res=>res.json());
  return (
		<section>
			<title>{postData.title}</title>
			<meta name="description" content=""></meta>
			{/* <DynamicPostViewer>
				{slug}
			</DynamicPostViewer> */}
			<Postviewer>
				{slug}
			</Postviewer>
		</section>
  )
}