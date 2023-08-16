'use client'

// 라이브러리 
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

// 컴포넌트와 기타 등등
import List from "components/services/Category/CategoryList";

const Sidebars = styled.aside`
	border-right: 1px solid #eaecef;
	overflow-y: auto;
	width: 30%;
	max-width: 220px;
	min-width: 160px;

	@media (max-width: 576px) {
		border-right: 0;
		width: 0;
		padding: 0;
		min-width: 0;
	}
`;

const Wrapper = styled.div`
	width: 100%;

	@media (max-width: 576px) {
		position: fixed; 
		bottom: 0;
		display: flex;
		flex-direction: row;
		border-top: 1px solid #eaecef;
		width: 100%;
		border-right: 0;
		gap: 3rem;
		padding: 1rem;
		align-items: center;
		overflow-x: auto;
		z-index: 99;
		background-color:#ffffff;
	}
`;

const EditBtnBox = styled.div`
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

const ListBox = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 1rem;

	@media (max-width: 576px) {
		margin-top: 0;
		display: flex;
		flex-direction: row;
		padding: 0;
	}
`;

/** List 컴포넌트의 뷰를 담당*/
export default function Sidebar(): React.ReactElement {
	const edit = useRef(false);
	console.log(edit.current);

  return (
    <Sidebars>
			<Wrapper>
				
				<EditBtnBox>
					<EditBtn onClick={()=>{ edit.current = !edit.current; console.log(edit.current,"버튼 작동중")}}>
						Edit
					</EditBtn>
				</EditBtnBox>
				
				<ListBox>
					<List />
				</ListBox>

			</Wrapper>
    </Sidebars>
  );
};