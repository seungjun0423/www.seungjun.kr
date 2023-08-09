'use client'

// 더미 데이터
import { SidebarDummy } from "data/dummy";

// 라이브러리 
import React from "react";
import Link from "next/link";
import { useEffect, useState } from "react";
import styled from "styled-components";

// 컴포넌트와 기타 등등
import { Category } from "model/interface";

const Sidebars = styled.aside`
	display: flex;
	width: 15rem;
	height: 100%;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	border-right: 1px solid;
	overflow-y: auto;
`;

const Wrapper = styled.span`
	display: flex;
	&:last-child{
		margin-bottom: 3rem;
	}
`;

const Category = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	font-size: 2rem;
	color: black;
`;

const SubCategory = styled.div`
	font-size: 1.5rem;
	align-items: center;
`;

export default function Sidebar(): React.ReactElement {
	const [ categories, setCategories ] = useState<Category[]>(
		[
			{
				id: 0,
				title: '',
				priority: 0 ,
				post: [],
				spread: false,
			},
		]
	);
	
	useEffect(() => {
		// Todo: 서버 작업 후 데이터 교체 필요 
		let data = SidebarDummy.map(el=> {
			Object.defineProperty(el, `spread`, {
				value: false,
				writable: true,
				enumerable: true,
				configurable: true,
			});
			return el;
		});
		setCategories(data);
	}, []);

	/** Input: title | Return: active setCategories hook for change spread property | How: false -> true or true -> false   */
	const spreadHandler = ( el: string ) : void => {
		let find = categories.filter( value => value.title === el )[0];
		find.spread = !find.spread;
		
		let others = SidebarDummy.filter( value => value.title !== el);
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
				SidebarDummy.map( (el,index) => (
						<Wrapper key={index}>
							<Link href={`/${el.title}`} style={{ textDecoration: 'none' }}>
								<Category onClick={ () => spreadHandler(el.title)}>
									{ el.title }
								</Category>
									{ el.spread ? 
										el.post.map( (val,index) => (
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