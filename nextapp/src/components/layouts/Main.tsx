
import React from "react";
import Sidebar from "./Sidebar";
import Content from "components/layouts/Content";
import { Props } from "app/layout";
import { CategoryData } from 'types/types'

export default async function Main ({ children }: Props) {
	const categoryData: CategoryData[] = await fetch(
		`${process.env.NEXT_PUBLIC_CORS_URL}/category/all`,
		{	cache: 'no-store'})
		.then(res=>res.json());

	return (
		<main style={{width:'100%',height:'calc(100vh - 129px)',display:'flex'}}>
			<Sidebar data={categoryData}/>
			<Content>
				{children}
			</Content>
		</main>
	);
};