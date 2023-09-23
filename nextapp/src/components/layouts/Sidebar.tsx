'use client'

// 라이브러리 
import React, { useContext } from "react";
import styled, { keyframes } from "styled-components";

// 컴포넌트와 기타 등등
import CategoryTitle from "components/modules/CategoryTitle";
import { CategoryData } from 'types/types'

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
		animation: ${sildIn} 1.5s ease-out forwards;
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
		border-top: 1px solid #eaecef;
		width: 100%;
		border-right: 0;
		gap: 3rem;
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

/** List 컴포넌트의 뷰를 담당*/
export default function Sidebar ({ data }: { data: CategoryData[] }) {
  return (
		<Sidebars>
			<Wrapper>
				<ListBox>
					{
						data.map((el, index)=>{
							return <CategoryTitle key={index} title={el.title} categoryId={el.id}/>
						})
					}
				</ListBox>

			</Wrapper>
		</Sidebars>
  );
};