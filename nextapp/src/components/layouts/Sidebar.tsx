'use client'; 
import React from "react";
import styled from "styled-components";
import CategoryTitle from "components/page/CategoryTitle";
import { CategoryData } from 'types/types'

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

const Sidebars = styled.aside`
	box-shadow: 2px 0 2px ${ props => props.theme.borderColor};
	overflow-y: auto;
	width: 30%;
	max-width: 220px;
	min-width: 160px;
	border:none;

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
		width: 100%;
		border-right: 0;
		gap: 3rem;
		align-items: center;
		overflow-x: auto;
		z-index: 99;
		background-color: #f5f2f0;
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
		margin-left: 1.5rem;
		display: flex;
		flex-direction: row;
		padding: 0;
	}
`;