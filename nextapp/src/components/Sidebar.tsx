'use client'

import Link from "next/link";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Sidebars = styled.aside`
	display: flex;
	width: 300px;
	height: 100%;
	flex-direction: column;
	align-items: center;
	border-right: 1px solid;
`;

const Wrapper = styled.span`
	margin-top: 5rem;
`

const Category = styled.div`
	display: flex;
	flex-direction: column;
	font-size: 2.5rem;
	color: black;
`;

const SubCategory = styled.div`
	/* display:none; */
	font-size: 1.5rem;
	/* color: black; */
`;

const Edit = styled.button`
	background-color: transparent;
	border: 0;
	margin-top: 1rem;
	cursor: pointer;
`;

export default function Sidebar() {
	const [state, setstate] = useState();
	
	useEffect(() => {
	
	}, []);

  return (
    <Sidebars>
			<Edit value={'Edit'}>
				<Link href={'/Edit'} style={{ textDecoration: 'none', color: 'black' }}>
					Edit
				</Link>
			</Edit>
			{
				dummy.map( el => (
						<Wrapper key={el.title}>
							<Link href={`/${el.title}`} style={{ textDecoration: 'none' }}>
								<Category>
									{ el.title }
								</Category>
									{ 
										el.subCategory.map( val => (
											<SubCategory key={val}>
												<Link href={`/${el.title}/${val}`} style={{ textDecoration: 'none', color: 'black'}}>
													{val}
												</Link>
											</SubCategory>
										))
									}
							</Link>
						</Wrapper>
					)
				)
			}
    </Sidebars>
  );
};

const dummy = [
	{
		title: 'study',
		subCategory: [ 'javaScript', 'react', 'next.js', 'nest.js', 'algorithm']
		// subCategory: []
	},
	{
		title: 'profile',
		subCategory: [ 'age', 'career', 'teck stack']
		// subCategory: []
	},
	{
		title: 'etc',
		subCategory: ['schedule', 'reading', 'hobby']
		// subCategory: []
	} 
];
