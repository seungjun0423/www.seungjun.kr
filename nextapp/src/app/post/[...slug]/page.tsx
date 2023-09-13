'use clinet'
import React from "react";
import dynamic from "next/dynamic";

interface Post  {
	params: {
		slug: any;
	};
};

// export async function generateStaticParams() {
//   const postData = await fetch(`${process.env.NEXT_PUBLIC_CORS_URL}/post/all`,
// 	{
// 		method: 'GET',
// 		cache: 'no-store',
// 	})
// 	.then(res=>res.json());

//   return postData.map((post: any) => ({
//     slug: post.id,
//   }))
// }

export default async function Post({ params: { slug } }: Post) {
	console.log(slug);
	if(slug[0] === 'write'){
		const DynamicCreatePost = dynamic(()=>import('components/modules/Post/WritePost'),{ssr: false});

		return (
			<DynamicCreatePost>
			</DynamicCreatePost>
		)

	} else if(slug[1] === 'edit'){
		const DynamicUpdatePost = dynamic(()=>import('components/modules/Post/EditPost'),{ssr: false});

		return (
			<DynamicUpdatePost>
				{slug}
			</DynamicUpdatePost>
		)

	} else if (slug[0] !== 'write' && slug[1] !== 'edit' ) {
		const DynamicPostViewer = dynamic(()=>import('components/modules/Post/ReadPost'),{ssr: false});

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
				<DynamicPostViewer>
					{slug as number}
				</DynamicPostViewer>
			</section>
		)	
	}
}