'use client'

import React, { useEffect, useState } from "react";
import Link from "next/link";
import styled from "styled-components";

import { SidebarDummy } from "../../../../data/dummy";
import { Category } from "types/interface";

const Lists = styled.span`
	display: flex;
	margin-top: 2.5rem;
	@media (max-width: 576px) {
		margin-top: 0;
	}
`;

const Categories = styled.div`
	display: flex;
	font-size: 2rem;
	color: black;
`;

const Posts = styled.div`
	font-size: 1.5rem;
	align-items: center;
`;

/** 서버에서 카테고리와 작성글 목록을 받아와 열거해주는 컴포넌트 */
export default function List(): React.ReactElement{
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
		<>
		{
			SidebarDummy.map( (el,index) => (
					<Lists key={index}>
						<Link href={`/${el.title}`}>
							<Categories onClick={ () => spreadHandler(el.title)}>
								{ el.title }
							</Categories>
								{ el.spread ? 
									el.post.map( (val,index) => (
										<Posts key={index}>
											<Link href={`/${el.title}/${val}`}>
												{val}
											</Link>
										</Posts>
									)) : <></>
								}
						</Link>
					</Lists>
				)
			)
		}
		</>
	)
}