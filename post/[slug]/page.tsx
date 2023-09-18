import React from "react";
import ReadPost from "components/modules/Post/ReadPost";
import type { Metadata, ResolvingMetadata } from 'next'

type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

interface Post  {
	params: {
		slug: any;
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
			<title>
				{postData.title}
			</title>
			<ReadPost>
				{postData}
			</ReadPost>
		</section>
	)	
}