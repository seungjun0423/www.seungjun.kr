'use client';

import React, { ReactNode, useRef } from "react";
import styled from "styled-components";

import { Editor, EditorProps} from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
// import '@toast-ui/editor/dist/theme/toastui-editor-dark.css';

import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';

export interface EditortParams extends EditorProps{
	children?: ReactNode;
	ref?: any;
	contents: string;
};

const EditorBox = styled.div`
	width: 100%;
	height: 100%;
	@media (min-width: 1280px) {
		padding: 0 10% 0 10%;
	}
`;

const BtnBox = styled.div`
	width: 100%;
	height: 50px;
	display: flex;
	justify-content: center;

	@media (max-width: 520px) {
		height: 40px;
	}
`;

const Submit = styled.button`
	width: 20%;
	border-radius: 30px;
	border: none;
	margin-top: 10px;
	font-size: 1rem;
	font-weight: bold;

	@media (max-width: 520px) {
		width: 30%;
	}
`;

export default function PostEditor ({ contents }: EditortParams ): React.ReactElement {
	const text = useRef(null);

	return (
		<EditorBox>
			<Editor
				ref={text}
				height="70vh"
				placeholder="내용을 입력해주세요." 
				initialEditType='markdown' 
				previewStyle="tab"
				hideModeSwitch={true}
				plugins={[ colorSyntax ]}
				autofocus={true}
				usageStatistics={false}
				// theme="dark"
			>			
			</Editor>
			<BtnBox>
				<Submit>
					제출
				</Submit>
			</BtnBox>
		</EditorBox>
		);
};

