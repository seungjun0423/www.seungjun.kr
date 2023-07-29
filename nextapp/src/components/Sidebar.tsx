'use client'

import Link from "next/link";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Leftbar = styled.div`
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
`

export default function Sidebar() {
	const [state, setstate] = useState();
	
	useEffect(() => {
	
	}, []);

  return (
    <Leftbar>
				{
					dummy.map( el => {
						return (
							<Wrapper key={el.title}>
								<Link href={`/${el.title}`} style={{ textDecoration: 'none' }}>
									<Title>
										{ el.title }
										{ 
											el.subCategory.map( val => {
												return (
													<SubTitle key={val}>
														{val}
													</SubTitle>
												)
											})
										}
									</Title>
								</Link>
							</Wrapper>
						)
					})
				}
    </Leftbar>
  )
};

const dummy = [
	{
		title: 'study',
		subCategory: [ 'javaScript', 'react', 'next.js', 'nest.js', 'algorithm']
	},
	{
		title: 'profile',
		subCategory: [ 'age', 'career', 'teck stack']
	},
	{
		title: 'etc',
		subCategory: ['schedule', 'reading', 'hobby']
	} 
];
