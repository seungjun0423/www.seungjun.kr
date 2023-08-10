'use client'

// 라이브러리 
import React from "react";
import Link from "next/link";
import styled from "styled-components";

// 컴포넌트와 기타 등등
import List from "components/services/List";

const Sidebars = styled.aside`
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	align-items: center;
	border-right: 1px solid;
	overflow-y: auto;
	height: inherit;
	padding: 3rem 0 3rem 0;
	gap: 3rem;
	
	@media (min-width: 1440px) {
		width: 15vw;
	}

	@media (min-width: 1024px) and (max-width: 1439px) {
		width: 20vw;
	}
	
	@media (min-width: 769px) and (max-width: 1023px) {
		width: 25vw;
	}
	
	@media (max-width: 768px) {
		width: 30vw;
	}

	@media (max-width: 520px) {
		display: flex;
		flex-direction: row;
		align-content: center;
		box-sizing: border-box;
		border-top: 1px solid;
		padding: 0 2rem 0 2rem;
		width: 100%;
		height: 8vh;
		border-right: 0;
	}
`;

/** List 컴포넌트의 뷰를 담당*/
export default function Sidebar(): React.ReactElement {
  return (
    <Sidebars>
				<Link href={'/Edit'} style={{ textDecoration: 'none', color: 'black' }}>
					Edit
				</Link>
			<List />
    </Sidebars>
  );
};