import React from "react";
import dynamic from "next/dynamic";
import ReadPost from "components/modules/Post/ReadPost";
import type { Metadata, ResolvingMetadata } from 'next'
import { PostType } from "types/interface";

interface Props  {
	params: {
		slug: any;
	};
};

const getPostData = async (slug: string[]) : Promise<PostType | void> => {
	if (slug[0] !== 'write' && slug[0] !== 'edit' ){
		const postData = await fetch(`${process.env.NEXT_PUBLIC_CORS_URL}/post/id/${slug}`,
			{
				method: 'GET',
			})
		.then(res=>res.json());
		return postData;
	}
}

export const generateMetadata = async ({ params }: any): Promise<Metadata | void> => {
	const { slug } = params;
	if(slug[0] === 'write' || slug[0] === 'edit'){
		return{
			title: slug[0].toUpperCase()
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
	if(slug[0] === 'write'){
		const DynamicWritePost = dynamic(()=>import('components/modules/Post/WritePost'),{ssr: false});

		return (
			<DynamicWritePost>
			</DynamicWritePost>
		)

	} else if(slug[1] === 'edit'){
		const DynamicUpdatePost = dynamic(()=>import('components/modules/Post/EditPost'),{ssr: false});

		return (
			<DynamicUpdatePost>
				{slug}
			</DynamicUpdatePost>
		)

	} else if (slug[0] !== 'write' && slug[1] !== 'edit' ) {
		const postData = await getPostData(slug);
		
		return (
			<section>
				<ReadPost>
					{postData}
				</ReadPost>
			</section>
		)	
	}
};