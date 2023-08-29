'use client';

import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

import Post from "../Post/Post";
import { PostType } from '../../../types/interface'

import { _axios } from "hooks/axios";

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



const PostLists = styled.input`
	font-size: 1.5rem;
	font-weight: bold;
	text-align: center;
	color: black;
	border: none;
	background-color: transparent;
	cursor: pointer;
`;

// const PostBox = styled.div`
// 	width: 100%;
// 	display:flex;
// 	flex-direction: column;
// `;

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
		<Lists>
			<PostLists type="button" onClick={ () => spreadHandler()} value={title} />
			{	postList.map((el, index) => 
				el.fold ? <Post key={index} title={el.title} contents={el.contents}/> : '')
			}
		</Lists>
	)
}