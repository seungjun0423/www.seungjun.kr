'use clinet'
import React from "react";
import dynamic from "next/dynamic";

interface Post  {
	params: {
		slug: any;
	};
};

export default async function Edit({ params: { slug } }: Post) {
	const DynamicEditPost = dynamic(()=>import('components/modules/Post/EditPost'),{ssr: false});

	return (
		<DynamicEditPost>
			{slug}
		</DynamicEditPost>
	)
}