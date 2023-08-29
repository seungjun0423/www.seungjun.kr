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

export default function PostEditor ({children}: {children: React.ReactNode}){
	const submitHandler = () => {
		return 
	}
	const text = useRef(null);
	return (
		<EditorBox>
			<Editor
				height="100%"
				initialEditType='markdown' 
				previewStyle="tab"
				hideModeSwitch={true}
				plugins={[ colorSyntax ]}
				autofocus={true}
				usageStatistics={false}
				// theme="dark"	
			></Editor>
			<SubmitBtn handler={submitHandler}/>
		</EditorBox>
		);
};

