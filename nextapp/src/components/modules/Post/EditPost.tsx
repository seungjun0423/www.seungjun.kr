'use client';

import React, { useEffect, useRef, useState } from "react";
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
import axios from "axios";
import { PostType } from "types/interface";
import { CategoryData } from "types/types";

const EditPosts = styled.section`
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

export default function EditPost ({ children }: {children: React.ReactNode}) {
	const json = window.sessionStorage.getItem('post-storage');
	const data: PostType = JSON.parse(json as string).state.nowPost;


	const [ optionList, setOptionList] = useState<React.ReactElement[]>([
		<option key='init' value='선택'>
			선택
		</option>
	]);
	const editorRef = useRef<any>(null);
	const [ title, setTitle] = useState<string>(data.title);
	const [ categoryId, setCategoryId] = useState<string | number>(data.categoryId);
	const [ contents, setContents] = useState<any>(data.contents);

	useEffect(() => {
		const htmlString = data.contents;
    editorRef.current?.getInstance().setHTML(htmlString);

		const fetchCategory = async () => {
				const categoryData: CategoryData[] = await fetch(
					`${process.env.NEXT_PUBLIC_CORS_URL}/category/all`,
					{
						method: 'GET',	
						next: { revalidate: 3600 }
					}
				)
				.then(res=>res.json());
			const optionEl = categoryData.map((el: CategoryData, index: number)=>{
				return (
					<option key={index} value={el.id}>
						{el.title}
					</option>
				)
			});
			const initData = categoryData.filter(el=> el.id === data.categoryId)[0];
			const initCategory = <option key='init' value={initData.id}>{initData.title}</option>
			setOptionList([ initCategory,...optionEl]);
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
			alert('항목을 모두 작성해주세요'); 
		} else if (title && categoryId && contents){
			try {
				const req = await axios.patch(`${process.env.NEXT_PUBLIC_CORS_URL}/post/update`,{ id: data.id, title, categoryId, contents})
				if(req){
					window.location.replace(`${process.env.NEXT_PUBLIC_REDIRECT}`)
					return alert('게시물이 수정되었습니다')
				} else if(!req){
					alert('게시물 수정 실패')
				}
			} catch (err) {
				alert(err);
			}
		}
	};

	return(
		<EditPosts>
			<H1>
				글 수정하기
			</H1>
			<EditorBox>
				<InfoBox>
					<Label>글 제목</Label>
					<input 
						style={{borderRadius: '5px', padding:'5px', border:'1px solid gray', fontSize:'0.7rem', opacity:'0.5'}} 
						type="text" 
						defaultValue={data.title}
						onChange={(e)=>{setTitle(e.target.value)}}
					/>
				</InfoBox>
				<InfoBox>
					<Label>카테고리 선택하기</Label>
					<select 
						style={{borderRadius: '5px', border:'1px solid gray', height:'30px', fontFamily:'inherit',color: '#5e5e5e',opacity:'0.5'}}
						onChange={(e)=>{setCategoryId(e.target.value)}}
					>
						{optionList}
					</select>
				</InfoBox>
				<Editor
					ref={editorRef}
					height="100%"
					initialEditType='markdown' 
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
								const res = await axios.post(`${process.env.NEXT_PUBLIC_CORS_URL}/uploads/upload`,
								formData, {headers: { 'Content-Type': 'multipart/formed-data'}}
								) 
								if(res.data){
									alert('이미지가 업로드 됐습니다.');
									callback(res.data, 'image');		
								}
							} catch(err) {
								alert('파일 업로드 실패');
							}
						}
					}}
				></Editor>
				<SubmitBtn handler={submitHandler}/>
			</EditorBox>
		</EditPosts>
	)
}