import React from "react";
import UpdatePost from "components/modules/Post/UpdatePost";
import DeletePost from "components/modules/Post/DeletePost";
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
	} else if ( slug === 'update') {
		return <UpdatePost></UpdatePost>;
	} else if ( slug === 'delete') {
		return <DeletePost></DeletePost>;
	} else return <>{slug}</>
}