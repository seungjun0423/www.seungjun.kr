'use client';

import React, { useRef } from "react";
import styled from "styled-components";

import { Editor, EditorProps} from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';

import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';

export interface EditortParams extends EditorProps{
	contents: string;
};

const EditorBox = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	/* @media (min-width: 1280px) {
		padding: 0 10% 0 10%;
	} */
`;

const Submit = styled.button`
	width: 30%;
	height: 5%;
	border-radius: 30px;
	border: none;
	margin-top: 10px;
	font-size: 1rem;
	font-weight: bold;
`;

export default function PostEditor ({ contents }: EditortParams ): React.ReactElement {
	const text = useRef(null);

	return (
		<EditorBox id='editor'>
			<Editor 
				ref={text}
				placeholder="내용을 입력해주세요." 
				initialEditType='markdown' 
				previewStyle="tab"
				hideModeSwitch={true}
				plugins={[colorSyntax]}
				autofocus={true}
			>			
			</Editor>
			<Submit>
				제출
			</Submit>
		</EditorBox>
		);
};

