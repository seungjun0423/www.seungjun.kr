import React from "react";
import dynamic from "next/dynamic";

export default function Post () {
	const DynamicCreatePost = dynamic(()=>import('components/modules/Post/CreatePost'),{ssr: false});
	return (
		<DynamicCreatePost>
		</DynamicCreatePost>
	);
};