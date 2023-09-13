'use client';

import React from "react";
import styled from "styled-components";
import { Viewer } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import { _axios } from "hooks/axios";
import { PostType } from "types/interface";

import Prism from 'styles/prism';
import 'styles/prism.css';
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';
import Link from "next/link";

const PostViewers = styled.div`
	width: 100%;
	height: min-content;
	margin-top: 100px;
	margin-bottom: 200px;
	padding-left: 100px;
	padding-right: 100px;
	font-family: inherit;
	
	@media (max-width: 768px){
		margin-top: 70px;
		padding-left: 50px;
		padding-right: 50px;
	}

	@media (max-width: 577px){
		padding-left: 0;
		padding-right: 0;
		margin-top: 50px;
		margin-bottom: 120px;
	}
`;

const Title = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	border: none;
	font-size: 2rem;
	font-weight: bold;
	margin-bottom: 2rem;
	font-family: inherit;
`;

export default function ReadPost({ children }: {children: number}) {
	const obj = window.sessionStorage.getItem('post-storage');
	const data: PostType = JSON.parse(obj as string).state.nowPost;

	return (
		<PostViewers id='viewer'>
			<Title>
				{data?.title}
				<Link 
					href={`${process.env.NEXT_PUBLIC_REDIRECT}/post/${children}/edit`}
					style={{fontSize:'1.2rem'}}
				>
					Edit
				</Link>
			</Title> 
			<Viewer
				plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]}
				initialValue={
					`<div>
						<title>${data?.title}</title>
						<span style="font-size: 16px;">
							${data?.contents}
						</span>
					</div>`
				}
			/>
		</PostViewers>
	)
}