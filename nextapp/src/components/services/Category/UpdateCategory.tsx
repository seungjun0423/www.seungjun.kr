'use client';

import Link from "next/link";
import React from "react";
import styled from "styled-components";

interface Category {
	id: number;
	title: string;
	priority: number;
	post: string[];
	spread: boolean;
};

const UpdateCategories = styled.div`
	width: 100%;
	padding: 1rem 0 1rem 0;

	@media (max-width: 576px) {
		margin-bottom: 0;
		border: none;
		
		& :last-child {
			margin-right: 1rem;
		}
	}
`;

const Categories = styled.input`
	width: 100%;
	font-size: 1.5rem;
	font-weight: bold;
	font-style: normal;
	color: black;
	border: none;
	text-align: center;
	cursor: pointer;
`;

const PostList = styled.input`
	width: 100%;
	border: none;
	text-align: center;
	cursor: pointer;
`;

export default function UpdatCategory ({ title, posts }: {title: string, posts: string[]}) {
	return (
		<UpdateCategories>
			<Categories type="text" defaultValue={title} required/>
			{ 
				posts.map((el)=>{
					return <PostList  type="text" defaultValue={el} required/> 
				})
			}
		</UpdateCategories>
	)
}