'use client';

import React, { useRef } from "react";
import styled from "styled-components";

import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor/dist/theme/toastui-editor-dark.css';

import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';

import SubmitBtn from "components/ui/button/SubmitBtn";

const EditorBox = styled.div`
	width: 100%;
	height: 65%;
	padding-left: 5%;
	padding-right: 5%;

	@media (min-width: 1200px) {
		padding: 0 10% 0 10%;
	}

	@media (max-width: 576px){
		height: 55%;
	}
`;

const BtnBox = styled.div`
	width: 100%;
	height: 50px;
	display: flex;
	justify-content: center;

	@media (max-width: 576px) {
		height: 40px;
	}
`;

const Submit = styled.input`
	width: 10rem;
	border-radius: 30px;
	border: none;
	margin-top: 10px;
	font-size: 1rem;
	font-weight: bold;
	cursor: pointer;
	
	@media (max-width: 576px) {
		width: 8rem;
	}
`;

export default function PostEditor (){
	const text = useRef(null);
	return (
		<EditorBox>
			<Editor
				ref={text}
				height="100%"
				placeholder="내용을 입력해주세요." 
				initialEditType='markdown' 
				previewStyle="tab"
				hideModeSwitch={true}
				plugins={[ colorSyntax ]}
				autofocus={true}
				usageStatistics={false}
				// theme="dark"	
			/>
			<SubmitBtn />
		</EditorBox>
		);
};

