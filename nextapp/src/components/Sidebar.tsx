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

const Title = styled.div`
	display: flex;
	flex-direction: column;
	font-size: 2.5rem;
	color: black;
`;

const SubTitle = styled.div`
	/* display:none; */
	font-size: 1.5rem;
	/* color: black; */
`

export default function Sidebar() {
	const [state, setstate] = useState();
	
	useEffect(() => {
	
	}, []);

  return (
    <Sidebars>
				{
					dummy.map( el => (
							<Wrapper key={el.title}>
								<Link href={`/${el.title}`} style={{ textDecoration: 'none' }}>
									<Title>
										{ el.title }
									</Title>
										{/* { 
											el.subCategory.map( val => (
												<SubTitle key={val}>
													<Link href={`/${el.title}/${val}`} style={{ textDecoration: 'none', color: 'black'}}>
														{val}
													</Link>
												</SubTitle>
											))
										} */}
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
	},
	{
		title: 'profile',
		// subCategory: [ 'age', 'career', 'teck stack']
		subCategory: []
	},
	{
		title: 'etc',
		// subCategory: ['schedule', 'reading', 'hobby']
		subCategory: []
	} 
];
