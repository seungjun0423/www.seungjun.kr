'use client';

import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Viewer } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import { _axios } from "hooks/axios";
import { PostType } from "types/interface";


import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';

const PostViewers = styled.div`
	width: 100%;
	height: min-content;
`;

//Todo: 데이터 입력 테스트 필요
export default function Postviewer({ children }: {children: number}) {
	const obj = window.sessionStorage.getItem('post-storage');
	const data: PostType = JSON.parse(obj as string).state.nowPost;

	return (
		<PostViewers id='viewer'>
			<Viewer
				plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]}
				initialValue={
					`<div> 
						<h1 style='border: none; font-size: 1.5rem; margin-bottom: 2rem;'>
							${data?.title}
						</h1> 
						<span style="font-size: 16px;">
							${data?.contents}
						</span>
					</div>`
				}
			/>
		</PostViewers>
	)
}