import React from "react";
import dynamic from "next/dynamic";

type Post = {
	params: {
		slug: string;
	};
};

export default function Post ({ params: { slug } }: Post ) {
	const DynamicCreatePost = dynamic(()=>import('components/modules/Post/CreatePost'),{ssr: false});

	if (slug === 'createPost') {
		return (
			<DynamicCreatePost>
			</DynamicCreatePost>);
	} else return (
			<section>
				{slug}
			</section>
		);
};