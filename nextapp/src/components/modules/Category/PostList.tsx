'use client';

import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

import Post from "../Post/Post";
import { PostType } from '../../../types/interface'

import { _axios } from "hooks/axios";

const PostLists = styled.div`
	width: 100%;
	text-align: center;
	align-items: center;
	padding: 1rem 0 1rem 0;

	@media (max-width: 576px) {
		margin-bottom: 0;
		border: none;
		/* display:flex; */
		
		& :last-child {
			margin-right: 1rem;
		}
	}
`;



const CategoryTitle = styled.input`
	font-size: 1.5rem;
	font-weight: bold;
	color: #5e5e5e;
	border: none;
	background-color: transparent;
	cursor: pointer;
`;

/** 서버에서 카테고리와 작성글 목록을 받아와 열거해주는 컴포넌트 */
export default function PostList({ title, categoryId }: {title: string, categoryId: number}){
	const [ postList, setPostList ] = useState<PostType[]>([]);
	
	useEffect(() => {	
		const fetchPostData = async () => {
			const postData = await _axios.post('/post/categoryPosts',{categoryId});
			const data = postData.map((el: Partial<PostType>)=>{ el.fold = false; return el});
			setPostList(data);
		}
		fetchPostData();
	}, [categoryId]);

	const spreadHandler = ( ) : void => {
		const foldControll = postList.map(el=> {el.fold=!el.fold; return el});
		setPostList(foldControll);
	}

	return (
		<PostLists>
			<CategoryTitle type="button" onClick={ () => spreadHandler()} value={title} />
			{	postList.map((el, index) => 
				el.fold ? <Post key={index} data={el}/>: '')
			}
		</PostLists>
	)
}