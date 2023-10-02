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
			<StyledLink href={`${process.env.NEXT_PUBLIC_REDIRECT}post/${data.id}` as Route}>
				{data.title}
			</StyledLink>
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

const StyledLink =styled(Link)`
	color: ${ props => props.theme.borderColor};
`;
