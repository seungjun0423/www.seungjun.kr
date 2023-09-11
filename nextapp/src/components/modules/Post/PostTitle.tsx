'use client';

import React from "react";
import styled, { keyframes } from "styled-components";
import Link from "next/link";
import { PostType } from "types/interface";
import { postStore } from "data/store";
import { Route } from "next";

const sildIn = keyframes`
  from {
		transform: translateY(-90%);
		opacity: 0.1;
	}
	to {
		transform: translateY(0);
		opacity: 1;
	}
`;

const Posts = styled.button`
	width: 100%;
	margin-top: 1rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	border: none;
	background-color: transparent;
	cursor: pointer;

	@media (min-width:577px){
		animation: ${sildIn} 0.5s ease forwards;
	}
`;

export default function PostTitle ({ data }: { data: PostType}) {
	return (
		<Posts onClick={()=>{postStore.setState({nowPost: data},true);}}>
			<Link href={`${process.env.NEXT_PUBLIC_REDIRECT}/post/${data.id}` as Route}>
				{data.title}
			</Link>
		</Posts>
	)
}