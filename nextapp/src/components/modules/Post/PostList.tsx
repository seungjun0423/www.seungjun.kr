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
	cursor: pointer;
`;

export default function PostList ({ postTitle }: { postTitle: string}) {
	return (
		<PostLists>
			{postTitle}
		</PostLists>
	)
}