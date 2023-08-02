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
`;

const Category = styled.div`
	display: flex;
	flex-direction: column;
	font-size: 2.5rem;
	color: black;
`;

const SubCategory = styled.div`
	font-size: 1.5rem;
`;

export default function Sidebar() {
	const [ categories, setCategories ] = useState({});
	
	useEffect(() => {
		setCategories(dummy.map(el=> {
			Object.defineProperty(el, `spread`, {
				value: false,
				writable: true,
				enumerable: true,
				configurable: true,
			});
			return el;
		}));
	}, []);

	const spreadHandler = (el: any) => {
		let find = dummy.filter( ak => ak.title === el )[0];
		find.spread = !find.spread;
		
		let others = dummy.filter( ak => ak.title !== el);
		others = others.map(el => {el.spread = false; return el});
		others.push(find);

		setCategories(others);
	}

  return (
    <Sidebars>
				<Link href={'/Edit'} style={{ textDecoration: 'none', color: 'black' }}>
					Edit
				</Link>
			{
				dummy.map( (el,index) => (
						<Wrapper key={index}>
							<Link href={`/${el.title}`} style={{ textDecoration: 'none' }}>
								<Category onClick={ () => spreadHandler(el.title)}>
									{ el.title }
								</Category>
									{ el.spread ? 
										el.subCategory.map( (val,index) => (
											<SubCategory key={index}>
												<Link href={`/${el.title}/${val}`} style={{ textDecoration: 'none', color: 'black' }}>
													{val}
												</Link>
											</SubCategory>
										)) : <></>
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
		priority: 0 ,
		subCategory: [ 'javaScript', 'react', 'next.js', 'nest.js', 'algorithm']
	},
	{
		title: 'profile',
		priority: 1,
		subCategory: [ 'age', 'career', 'tech']
	},
	{
		title: 'etc',
		priority: 2,
		subCategory: ['schedule', 'reading', 'hobby']
	} 
];