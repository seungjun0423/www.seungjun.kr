'use client';
import React, { ReactNode } from "react";
import Sidebar from "./Sidebar";
import Content from "components/layouts/Content";
import { styled } from "styled-components";

export default function Main ({ categoryData, children }: {categoryData: any, children: ReactNode}) {
	return (
		<Mains>
			<Sidebar data={categoryData}/>
			<Content>
				{children}
			</Content>
		</Mains>
	);
};

const Mains = styled.main`
	width: 100%;
	/* height: calc(100vh - 110px); */
	height: 100vh;
	display: flex;
	background-color: ${ props => props.theme.background };
`;