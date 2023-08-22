'use client';

import React from "react";
import styled from "styled-components";
import Link from "next/link";

const PostLists = styled.button`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	border: none;
	background-color: transparent;
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