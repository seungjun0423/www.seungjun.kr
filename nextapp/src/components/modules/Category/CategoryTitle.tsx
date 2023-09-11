/* eslint-disable @next/next/no-async-client-component */
'use client'
import styled from "styled-components";

import { PostType } from '../../../types/interface'

import { _axios } from "hooks/axios";
import { Route } from "next";
import Link from "next/link";

const PostLists = styled.div`
	width: 100%;
	text-align: center;
	align-items: center;
	padding: 1rem 0 1rem 0;

	@media (max-width: 576px) {
		margin-bottom: 0;
		border: none;
		
		& :last-child {
			margin-right: 1rem;
		}
	}
`;

const CategoryTitles = styled.input`
	font-size: 1.5rem;
	font-weight: bold;
	color: #5e5e5e;
	border: none;
	background-color: transparent;
	cursor: pointer;
`;


/** 서버에서 카테고리와 작성글 목록을 받아와 열거해주는 컴포넌트 */
export default async function CategoryTitle({ title, categoryId }: {title: string, categoryId: number}){
	const postList: PostType[] = await fetch(
		`${process.env.NEXT_PUBLIC_CORS_URL}/post/categoryPosts/${categoryId}`,
		{
			method: 'GET',
		})
		.then(res=>res.json());

	return (
		<PostLists>
			<Link href={`${process.env.NEXT_PUBLIC_REDIRECT}/category/${categoryId}` as Route}>
				<CategoryTitles type="button" value={title} />
			</Link>
		</PostLists>
	)
}