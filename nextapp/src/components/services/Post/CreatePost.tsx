'use client';

import React, { ChangeEvent, DragEvent, useState } from "react";
import styled from "styled-components";
import { FaPhotoVideo } from 'react-icons/fa';


const CreatePosts = styled.section`
	width: 100%;
	height: 100%;
	overflow-y: hidden;
	overflow-x: auto;
`;

const P = styled.p`
	display: flex;
	justify-content: center;
	font-size: 2rem;
	font-weight: bold;
`;

const FormBox = styled.div`
	width: 100%;
	height: 100%;
	padding-left: 5%;
	padding-right: 5%;

	@media (min-width: 1280px) {
		padding: 0 10% 0 10%;
	}
`;

const Forms = styled.form`
	width: 100%;
	height: 100%;
`;

const Inputs = styled.input`
	display: none;
	height: 100%;
`;

const Labels = styled.label`
	width: 100%;
	height: 20%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	border: 3px dotted skyblue;
	border-radius: 5px;
	margin: 5% 0 1% 0;

	@media (max-width: 520px) {
		margin-bottom: 3%;
	};
`;

const Textareas = styled.textarea`
	width: 100%;
	height: 50%;
	font-size: 1rem;
	padding: 1rem;
	border-radius: 5px;

	@media (max-width: 768px) {
		height: 55%;
	};

	@media (max-width: 768px) {
		height: 50%;
	};
`;

const Submit = styled.button`
	width: 100%;
	height: 4%;
	border-radius: 30px;
	border: none;
	margin-top: 10px;
	font-size: 1rem;
	font-weight: bold;
`;



export default function CreatePost(){
	const [dragging, setDragging] = useState(false);
  const [file, setFile] = useState<File>();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const files = e.target?.files;
    if (files && files[0]) {
      setFile(files[0]);
      console.log(files[0]);
    }
  };

  const handleDrag = (e: DragEvent) => {
    if (e.type === 'dragenter') {
      setDragging(true);
    } else if (e.type === 'dragleave') {
      setDragging(false);
    }
  };

  const handleDragOver = (e: DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: DragEvent) => {
    e.preventDefault();
    setDragging(false);
    const files = e.dataTransfer?.files;
    if (files && files[0]) {
      setFile(files[0]);
      console.log(files[0]);
    }
  };
	
	return(
		<CreatePosts>
			<P>
				글 작성하기
			</P>
			<FormBox>
				<Forms>
					<Inputs  id='input-upload' type='file' accept='image/*' onChange={handleChange}/>
					<Labels htmlFor='input-upload' onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDragOver} onDrop={handleDrop}>
						<FaPhotoVideo style={{ width: '30px' ,height: '30px', color: 'gray'}}></FaPhotoVideo>
						<p style={{fontWeight: 'bold'}}>이미지 첨부</p>
					</Labels>
					<Textareas  name='text'  id='input-text'  required  rows={10}  placeholder={'내용 작성...'}	/>
					<Submit>
						제출
					</Submit>
				</Forms>
			</FormBox>
		</CreatePosts>
	)
}