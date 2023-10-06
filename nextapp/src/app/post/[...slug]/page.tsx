import React from "react";
import dynamic from "next/dynamic";
import ReadPost from "components/page/Post/ReadPost";
import type { Metadata } from 'next'
import { PostType } from "types/interface";

interface Props  {
	params: {
		slug: any;
	};
};

const getPostData = async (slug: string[]) : Promise<PostType | void> => {
	if (slug[0] !== 'write' && slug[1] !== 'edit'){
		const postData = await fetch(`${process.env.NEXT_PUBLIC_CORS_URL}/post/id/${slug}`,
			{
				method: 'GET',
				cache: 'no-cache'
			})
		.then(res=>res.json());
		return postData;
	}
}

export const generateMetadata = async ({ params }: any): Promise<Metadata | void> => {
	const { slug } = params;
	if(slug[0] === 'write' || slug[1] === 'edit'){
		return{
			title: slug[0].toUpperCase(),
			description: slug[0].toUpperCase(),
		}
	} else if(slug?.length){
		const data = await getPostData(params?.slug[0]);
		
		return {
			title: `${data?.title}`,
			description: `${data?.desc}`,
		}
	};
};

export default async function Post({ params: { slug } }: Props) {
	const postData: any = await getPostData(slug);
	
	if(slug[0] === 'write'){
		const DynamicWritePost = dynamic(()=>import('components/page/Post/WritePost'),{ssr: false});

		return (
			<DynamicWritePost>
			</DynamicWritePost>
		)

	} else if(slug[1] === 'edit'){
		const DynamicEditPost = dynamic(()=>import('components/page/Post/EditPost'),{ssr: false});
		return (
			<DynamicEditPost>
				{slug}
			</DynamicEditPost>
		)

	} 
		
	return (
		<section key={`readPost : ${postData.id}`}>
			<ReadPost>
				{postData}
			</ReadPost>
		</section>
	)	
};

export const generateStaticParams = async (): Promise<any | void> => {
	const data = await fetch(`${process.env.NEXT_PUBLIC_CORS_URL}/post/all`,
			{
				method: 'GET',
				cache: 'no-cache'
			})
		.then(res=>res.json());
	return data.map((post: any) =>({
		params: { slug: `${post.id}` }
	}));
};