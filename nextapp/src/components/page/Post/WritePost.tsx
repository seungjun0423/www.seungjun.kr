'use client';
import React, { ReactNode, useEffect, useRef, useState } from "react";
import styled from "styled-components";

import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';;

import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';

import Prism from 'styles/prism';
import 'styles/prism.css';
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';

import SubmitBtn from "components/ui/button/SubmitBtn";
import { CategoryData } from "types/types";
import { toast } from "react-toastify";

export default function WritePost ({children}: {children: ReactNode}) {
	const [ optionList, setOptionList] = useState<React.ReactElement[]>([
		<option key='init' value='선택'>
			선택
		</option>
	]);
	const editorRef = useRef<any>(null);
	const [ title, setTitle] = useState<string>('');
	const [ categoryId, setCategoryId] = useState<string>('');
	const [ contents, setContents] = useState<any>();
	const [ desc, setDesc] = useState<string>('');

	useEffect(() => {
		const fetchCategory = async () => {
			const categoryData: CategoryData[] = await fetch(
				`${process.env.NEXT_PUBLIC_CORS_URL}/category/all`,
				{
					method: 'GET',
					credentials: 'include',
				}
				).then(res=>res.json());
			const optionEl = categoryData.map((el: CategoryData, index: number)=>{
				return (
					<option key={index} value={el.id}>
						{el.title}
					</option>
				)
			});
			setOptionList([ ...optionList, ...optionEl]);
		}
		fetchCategory();
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const contentsOnChange = () => {
		const contentHtml: HTMLElement = editorRef.current?.getInstance().getHTML();
		setContents(contentHtml);
	}

	const submitHandler = async () => {
		if( !title || !categoryId || !contents){
			return toast.error('항목을 모두 작성해주세요'); 
		} else if (title && categoryId && contents){
			try {
				const req: any = await fetch(
					`${process.env.NEXT_PUBLIC_CORS_URL}/post/write`,
					{
						method: 'POST',
						body: JSON.stringify({title, categoryId, contents, desc}),
						headers: { 'Content-Type': 'application/json' },
						credentials: 'include',
						cache:'no-cache',
					}
				)
				.then(req=>req.json());
				if(req){
					window.location.replace(`${process.env.NEXT_PUBLIC_REDIRECT}`)
					return toast.success('새로운 게시물이 등록되었습니다. 👌')
				} else if(!req){
					return toast.error('게시물 등록 실패')
				}
			} catch (err) {
				return toast.error('게시물 등록 실패')
			}
		}
	};


	return(
		<WritePosts key='writePosts'>
			<H1>
				글 작성하기
			</H1>
			<EditorBox>
				<InfoBox>
					<Label>글 제목</Label>
					<TextInput 
						type="text" 
						placeholder="제목을 입력해주세요"
						onChange={(e)=>{setTitle(e.target.value)}}
					/>
				</InfoBox>
				<InfoBox>
					<Label>카테고리 선택하기</Label>
					<Select 
						onChange={(e)=>{setCategoryId(e.target.value)}}
					>
						{optionList}
					</Select>
				</InfoBox>
				<InfoBox>
					<Label>게시물 요약</Label>
					<TextInput 
						type="text" 
						placeholder="게시물 요약"
						onChange={(e)=>{setDesc(e.target.value)}}
					/>
				</InfoBox>
				<Editor
					ref={editorRef}
					height="100%"
					initialEditType='markdown' 
					initialValue='type here!!!'	
					previewStyle="vertical"
					hideModeSwitch={true}
					plugins={[[codeSyntaxHighlight, { highlighter: Prism }], colorSyntax ]}
					autofocus={false}
					usageStatistics={false}
					onChange={contentsOnChange}
					hooks={{
						async addImageBlobHook(blob, callback){
							try{
								const formData = new FormData();
								formData.append('image', blob);

								const req: any = await fetch(
									`${process.env.NEXT_PUBLIC_CORS_URL}/uploads/upload`,
									{
										method: 'POST',
										body: formData,
										credentials: 'include',
										cache:'no-cache',
									}
								)
								.then(req=>req.json());
								if(req.url){
									toast.success('이미지가 업로드 됐습니다. 👌');
									callback(req.url, 'image');		
								}
							} catch(err) {
								return toast.error('파일 업로드 실패');
							}
						}
					}}
				></Editor>
				<SubmitBtn handler={submitHandler}/>
			</EditorBox>
		</WritePosts>
	)
};

const WritePosts = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	height: 100%;
	overflow-y: auto;
	overflow-x: auto;
	margin-top: 30px;
`;

const H1 = styled.h1`
	display: flex;
	justify-content: center;
`;

const EditorBox = styled.div`
	width: 100%;
	max-width:1000px;
	height: 80%;
	margin-top: 30px;

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

const TextInput = styled.input`
	border-radius: 5px; 
	padding:5px;
	border:1px solid gray; 
	font-size: 0.7rem; 
	color: '#5e5e5e';
	&::placeholder{
		color: #b8b8b8;
	}
`;

const Select = styled.select`
	border-radius: 5px; 
	border:1px solid gray; 
	font-size: 0.7rem; 
	height: 30px; 
	font-family: inherit;
	color: #5e5e5e;
`;

