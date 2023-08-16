'use client';

import React from "react";
import styled from "styled-components";
import Link from "next/link";

const PostLists = styled.div`
`;

export default function PostList ({ categoryTitle, postTitle }: { categoryTitle: string, postTitle: string}) {
	return (
		<PostLists>
			<Link href={`/${categoryTitle}/${postTitle}`}>
			{postTitle}
			</Link>
		</PostLists>
	)
}