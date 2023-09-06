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
import axios from "axios";

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
	const [ optionList, setOptionList] = useState<React.ReactElement[]>([
		<option key='init' value='선택'>
			선택
		</option>
	]);
	const editorRef = useRef<any>(null);
	const [ title, setTitle] = useState<string>('');
	const [ categoryId, setCategoryId] = useState<string>('');
	const [ contents, setContents] = useState<HTMLElement>();
	const [ images, setImages ] = useState<any[]>(['']);

	useEffect(() => {
		const fetchCategory = async () => {
			const categoryData: Category[] = await _axios.get('/category/all');
			const optionEl = categoryData.map((el: Category, index: number)=>{
				return (
					<option key={index} value={el.id}>
						{el.title}
					</option>
				)
			});
			setOptionList([ ...optionList, ...optionEl]);
		}
		fetchCategory();
	}, []);

	const contentsOnChange = () => {
		const contentHtml: HTMLElement = editorRef.current?.getInstance().getHTML();
		setContents(contentHtml);
	}

	const submitHandler = async () => {
		await _axios.post('/post/createPost',{title, categoryId, contents})
		window.location.replace(`${process.env.NEXT_PUBLIC_REDIRECT}`)
		return 
	};


	return(
		<CreatePosts>
			<H1>
				글 작성하기
			</H1>
			<EditorBox>
				<InfoBox>
					<Label>글 타이틀</Label>
					<input 
						style={{borderRadius: '5px', padding:'5px', border:'1px solid gray', fontSize:'0.7rem'}} 
						type="text" 
						placeholder="제목을 입력해주세요"
						onChange={(e)=>{setTitle(e.target.value)}}
					/>
				</InfoBox>
				<InfoBox>
					<Label>카테고리 선택하기</Label>
					<select 
						style={{borderRadius: '5px', border:'1px solid gray', height:'30px', fontFamily:'inherit'}}
						onChange={(e)=>{setCategoryId(e.target.value)}}
					>
						{optionList}
					</select>
				</InfoBox>
				<Editor
					ref={editorRef}
					height="100%"
					initialEditType='markdown' 
					initialValue='type here!!!'	
					previewStyle="tab"
					hideModeSwitch={true}
					plugins={[ colorSyntax ]}
					autofocus={false}
					usageStatistics={false}
					onChange={contentsOnChange}
					hooks={{
						async addImageBlobHook(blob, callback){
							try{
								const formData = new FormData();
								formData.append('image', blob);
								const res = await axios.post(`${process.env.NEXT_PUBLIC_CORS_URL}/uploads/upload`,
								formData, {headers: { 'Content-Type': 'multipart/formed-data'}}
								) 
								console.log('이미지가 업로드 됐습니다.',res.data);
								callback(res.data, 'image');	
							} catch(err) {
								alert('파일 업로드 실패');
							}
						}
					}}
					// theme="dark"	
				></Editor>
				<SubmitBtn handler={submitHandler}/>
			</EditorBox>
		</CreatePosts>
	)
}