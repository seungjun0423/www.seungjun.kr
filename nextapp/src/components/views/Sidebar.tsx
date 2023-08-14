'use client'

// 라이브러리 
import React from "react";
import Link from "next/link";
import styled from "styled-components";

// 컴포넌트와 기타 등등
import List from "components/services/CategoryList";

const Sidebars = styled.aside`
	border-right: 1px solid;
	overflow-y: auto;
	padding: 2rem;
	width: 40%;
	max-width: 220px;
	@media (max-width: 520px) {
		border-right: 0;
		width: 0;
		padding: 0;
	}
`;

const Wrapper = styled.div`
	width: 100%;
	
	@media (max-width: 520px) {
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
	}
`;

const Btn = styled.button`
	width: 50px;
	height: 40px;
	border: none;
	font-size: 2rem;
	background-color: transparent;
	cursor: pointer;
	
	@media (min-width: 520px) {
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