/* eslint-disable @next/next/no-async-client-component */
'use client';

import styled from "styled-components";
import { Route } from "next";
import Link from "next/link";

export default function CategoryTitle({ title, categoryId }: {title: string, categoryId: number}){
	return (
		<PostLists>
			<Link href={`${process.env.NEXT_PUBLIC_REDIRECT}/category/${categoryId}` as Route}>
				<CategoryTitles type="button" value={title} />
			</Link>
		</PostLists>
	)
};

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
	/* color: #5e5e5e; */
	color: ${ props => props.theme.text};
	border: none;
	background-color: transparent;
	cursor: pointer;
`;