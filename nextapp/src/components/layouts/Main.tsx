'use client';
import React from "react";
import Sidebar from "./Sidebar";
import Content from "components/layouts/Content";
import { Props } from "app/layout";
import { CategoryData } from 'types/types'
import { styled } from "styled-components";

export default async function Main ({ children }: Props) {
	const categoryData: CategoryData[] = await fetch(
		`${process.env.NEXT_PUBLIC_CORS_URL}/category/all`,
		{
			method: 'GET',	
			// cache: 'no-cache',
		}
	)
		.then(res=>res.json()
	);

	return (
		// style={{width:'100%',height:'calc(100vh - 129px)',display:'flex'}}
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
	height: calc(100vh - 129px);
	display: flex;
	background-color: ${ props => props.theme.background};
`;