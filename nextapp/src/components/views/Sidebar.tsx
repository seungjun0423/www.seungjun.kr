'use client'

// 라이브러리 
import React from "react";
import Link from "next/link";
import styled from "styled-components";

// 컴포넌트와 기타 등등
import List from "components/services/Category/CategoryList";

const Sidebars = styled.aside`
	border-right: 1px solid;
	overflow-y: auto;
	padding: 2rem;
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
		border-top: 1px solid;
		width: 100%;
		border-right: 0;
		gap: 3rem;
		padding: 1rem;
		align-items: center;
		overflow-x: auto;
		z-index: 99;
	}
`;

const Btn = styled.button`
	width: 50px;
	height: 40px;
	border: none;
	font-size: 2rem;
	background-color: transparent;
	cursor: pointer;
	
	@media (min-width: 576px) {
		display: none;
	}
`;

/** List 컴포넌트의 뷰를 담당*/
export default function Sidebar(): React.ReactElement {
  return (
    <Sidebars>
			<Wrapper>

				{/* <Btn>
					{'<='}
				</Btn> */}

				<Link href={'/Edit'}>
					Edit
				</Link>
				<List />

				{/* <Btn>
					{'=>'}
				</Btn> */}

			</Wrapper>
    </Sidebars>
  );
};