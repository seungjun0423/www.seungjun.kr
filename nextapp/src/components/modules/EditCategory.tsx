'use client';

import React, { useRef } from "react";
import styled from "styled-components";
import { editState } from "data/store";


const EditCategries = styled.div`
	height: 3rem;
	display: flex;
	justify-content: center;
	border-bottom: 1px solid #eaecef;

	@media (max-width: 576px) {
		border: none;
		background-color: transparent;
		margin-bottom: 0;
	}
`;

const EditBtn = styled.button`
	border-radius: 5px;
	background-color: transparent;
	border: none;
	font-weight: bold;
	font-size: 1.2rem;
	cursor: pointer;
`;


export default function EditCategory () {
	const { isEdit, setIsEdit } = editState();
	const edit = useRef(false);

	return (
		<EditCategries>
			<EditBtn 
				onClick={()=>{ 
					edit.current = !edit.current; 
					setIsEdit(edit.current);
					console.log(isEdit,"카테고리 수정 버튼 작동중")
				}}
			>
				{isEdit ? "Now Editable": "Edit"}
			</EditBtn>
		</EditCategries>
	)
}