'use client';
import React from "react";
import styled, { keyframes } from "styled-components";
import Link from "next/link";
import { PostType } from "types/interface";
import { postStore } from "data/store";
import { Route } from "next";

export default function PostTitle ({ data }: { data: PostType}) {
	return (
		<Posts onClick={()=>{postStore.setState({nowPost: data},true);}}>
			<Link href={`${process.env.NEXT_PUBLIC_REDIRECT}/post/${data.id}` as Route}>
				{data.title}
			</Link>
		</Posts>
	)
};

const Posts = styled.button`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	border: none;
	background-color: transparent;
	font-size: inherit;
	cursor: pointer;
`;
