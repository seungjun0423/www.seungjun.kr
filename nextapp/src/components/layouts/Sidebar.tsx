'use client'

// 라이브러리 
import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { _axios } from "hooks/axios";

// 컴포넌트와 기타 등등
import { editState } from "data/store";
import PostList from "components/modules/Category/PostList";
import EditCategoryBtn from "components/ui/button/EditCategoryBtn";

import { SidebarDummy } from "data/dummy";
import UpdatCategory from "components/modules/Category/UpdateCategory";

const sildIn = keyframes`
  from {
		transform: translateY(-100%);
	}
	to {
		transform: translateY(0);
	}
`;

const Sidebars = styled.aside`
	border-right: 1px solid #eaecef;
	overflow-y: auto;
	width: 30%;
	max-width: 220px;
	min-width: 160px;
	
	@media (min-width:577px){
		animation: ${sildIn} 0.9s ease-out forwards;
	}

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

type CategoryData = {
	id: number; 
	title: string; 
	createdAt: string;
	updatedAt: string;
}

/** List 컴포넌트의 뷰를 담당*/
export default function Sidebar () {
	const { isEdit, setIsEdit } = editState();
	const [ editBtn, setEditBtn ] = useState<React.ReactElement>(<></>);
	const [ categoryData, setCateogoryData] = useState<CategoryData[]>([]);

	useEffect(() => {
		const sessionState = JSON.parse(`${window.sessionStorage.getItem('state-storage')}`)?.state;
		
		sessionState?.isLogin ? setEditBtn(<EditCategoryBtn/>):setEditBtn(<></>);

		const fetchData = async () => {
			const categoryData = await _axios.get(`/category/all`);
			setCateogoryData(categoryData);
		}

		fetchData();
	}, []);

  return (
		<Sidebars>
			<Wrapper>
				{editBtn}
				<ListBox>
					{ isEdit ?
						categoryData.map((el, index)=>{
							return <UpdatCategory key={index} title={el.title} categoryId={el.id} />
						})
						: categoryData.map((el, index)=>{
							return <PostList key={index} title={el.title} categoryId={el.id}/>
						})
					}
				</ListBox>

			</Wrapper>
		</Sidebars>
  );
};