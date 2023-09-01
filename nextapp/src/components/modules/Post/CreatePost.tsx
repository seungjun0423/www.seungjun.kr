'use client';

import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor/dist/theme/toastui-editor-dark.css';

import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';

import { _axios } from "hooks/axios";
import SubmitBtn from "components/ui/button/SubmitBtn";

type Category = {
	id: number;
	title: string;
	createdAt: Date;
	updateAt: Date;
}

const CreatePosts = styled.section`
	width: 100%;
	height: 100%;
	overflow-y: hidden;
	overflow-x: auto;
`;

const H1 = styled.h1`
	display: flex;
	justify-content: center;
	margin: 30px;

	@media (min-width: 1200px) {
		margin: 30px 0 20px 0;
	}
`;

const EditorBox = styled.div`
	width: 100%;
	height: 65%;
	padding-left: 5%;
	padding-right: 5%;
	margin-top: 50px;

	@media (min-width: 1200px) {
		padding: 0 10% 0 10%;
	}

	@media (max-width: 576px){
		height: 55%;
	}
`;

const InfoBox = styled.div`
	width: 100%;
	display: flex;
	justify-content: left;
	align-items: center;
	margin: 1rem 0 1rem 0;
`;

const Label = styled.label`
	margin-right: 10px;
`;

export default function CreatePost ({children}: {children: React.ReactNode}) {
	// const [ category, setCategory] = useState<Category[]>();
	const [ options, setOptions] = useState<React.ReactElement[]>();
	const text = useRef(null);


	useEffect(() => {
		const fetchCategory = async () => {
			const categoryData = await _axios.get('/category/all');
			const optionData: string[] = categoryData.map((el: Category)=> el.title);
			const optionEl = optionData.map((el: string, index: number) => { 
				return (
					<option key={index}>
						{el}
					</option>
					)
			});
			// setCategory(categoryData);
			setOptions(optionEl);
		}
		fetchCategory();
	}, [])

	const submitHandler = () => {
		return 
	};

	return(
		<CreatePosts>
			<H1>
				글 작성하기
			</H1>
			<EditorBox>
				<InfoBox>
					<Label>카테고리 선택하기</Label>
					<select style={{borderRadius: '5px', border:'1px solid gray'}}>
						{options}
					</select>
				</InfoBox>
				<InfoBox>
					<Label>글 타이틀</Label>
					<input style={{borderRadius: '5px', paddingLeft:'7px', border:'1px solid gray'}} type="text"></input>
				</InfoBox>
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
		</CreatePosts>
	)
}