'use client';

import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Viewer } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import { _axios } from "hooks/axios";
import { PostType } from "types/interface";
import { postStore } from "data/store";

const PostViewers = styled.div`
	width: 100%;
	height: min-content;
	padding: 4rem;
	margin-bottom: 5vh;

	@media (max-width: 576px) {
		margin-bottom: 10vh;
	}
`;

//Todo: 데이터 입력 테스트 필요
export default function Postviewer({ children }: {children: number}) {
	const [contents , setContents] = useState<string>();
	const obj = window.sessionStorage.getItem('post-storage');
	const data:PostType = JSON.parse(obj as string).state.nowPost
	// useEffect(()=>{
	// 		console.log(data);
	// 		setContents(data.contents);
	// },[])

	return (
		<PostViewers id='viewer'>
			<Viewer
				initialValue={
					`<div> ${children}번 포스트임 <span style="color:blue;">내용은 ${data?.contents}</span></div>`
				}
			/>
		</PostViewers>
	)
}