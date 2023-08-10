'use client'

// 더미 데이터
import { SidebarDummy } from "data/dummy";

// 라이브러리 
import React from "react";
import Link from "next/link";
import { useEffect, useState } from "react";
import styled from "styled-components";

// 컴포넌트와 기타 등등
import List from "components/services/List";

const Sidebars = styled.aside`
	box-sizing: border-box;
	display: flex;
	height: 83vh;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	border-right: 1px solid;
	overflow-y: auto;
	padding-bottom: 3rem;
	
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
		box-sizing: border-box;
		border-top: 1px solid;
		display: flex;
		flex-direction: row;
		align-items: end;
		width: 100vw;
		height: 3rem;
		gap: 20px;
		padding-top: 2rem;
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