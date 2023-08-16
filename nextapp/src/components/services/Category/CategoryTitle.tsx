'use client';

import React, { useEffect, useState } from "react";
import Link from "next/link";
import styled from "styled-components";

import { authState, editState } from "data/store";

import PostList from "../Post/PostList";

import { SidebarDummy } from "../../../data/dummy";

interface Category {
	id: number;
	title: string;
	priority: number;
	post: string[];
	spread: boolean;
};

const Lists = styled.div`
	width: 100%;
	text-align: center;
	align-items: center;
	padding: 1rem 0 1rem 0;
	/* border: 1px solid #eaecef; */

	@media (max-width: 576px) {
		margin-bottom: 0;
		border: none;
		
		& :last-child {
			margin-right: 1rem;
		}
	}
`;

const Categories = styled.input`
	font-size: 1.5rem;
	font-weight: bold;
	text-align: center;
	color: black;
	border: none;
	background-color: transparent;
	cursor: pointer;
`;

/** 서버에서 카테고리와 작성글 목록을 받아와 열거해주는 컴포넌트 */
export default function CategoryTitle({ title, posts }: {title: string, posts: string[]}): React.ReactElement{
	const { isAdmin, setIsAdmin } = authState();
	const { isEdit, setIsEdit } = editState();

	const [ categories, setCategories ] = useState<Category[]>(
		[
			{
				id: 0,
				title: '',
				priority: 0 ,
				post: [],
				spread: false,
			},
		]
	);
	
	useEffect(() => {
		// Todo: 서버 작업 후 데이터 교체 필요 
		let data = SidebarDummy.map(el=> {
			Object.defineProperty(el, `spread`, {
				value: false,
				writable: true,
				enumerable: true,
				configurable: true,
			});
			return el;
		});
		setCategories(data);
	}, []);

	/** Input: title | Return: active setCategories hook for change spread property | How: false -> true or true -> false   */
	const spreadHandler = ( el: string ) : void => {
		let find = categories.filter( value => value.title === el )[0];
		find.spread = !find.spread;
		
		let others = SidebarDummy.filter( value => value.title !== el);
		others = others.map(el => {el.spread = false; return el});
		others.push(find);

		setCategories(others);
	}

	return (
		<Lists>
			<Link href={`/${title}`}>
				<Categories type="button" onClick={ () => spreadHandler(title)} value={title} />
				{	
					categories.filter(el=> el.spread)[0]?.title === title ?
						posts.map((el, index)=>{ return <PostList key={index} categoryTitle={title} postTitle={el} /> })
						: <></>
				}
			</Link>
		</Lists>
	)
}