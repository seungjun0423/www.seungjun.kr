'use clinet'
import React from "react";
import dynamic from "next/dynamic";

export default async function Write() {
	const DynamicWritePost = dynamic(()=>import('components/modules/Post/WritePost'),{ssr: false});

	return (
		<DynamicWritePost>
		</DynamicWritePost>
	)
}