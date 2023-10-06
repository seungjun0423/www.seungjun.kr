'use client';
import React,{ useLayoutEffect, useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { Route } from "next";
import lottie from '../../../public/lottiefiles/kitty.gif';
import {  useStore, stateStore } from "data/store";

import Nav from "../ui/Nav";

export default function Header () {
	const store = useStore((state: any) => state);
	const localStorage : any = stateStore(state => state);
	const [nav, setNav] = useState(<></>);
	useLayoutEffect(() => {
		if(localStorage.id){
			store.setStore(localStorage.id);
		} 
		setNav(<Nav />)
	}, [])

	return (
			<Headers>
				<Title>
					<Image 
						alt='lottie' 
						src={lottie} 
						style={{marginRight:'1.5vw',marginTop:'3px'}} 
						width={50} 
						height={50}
					/>
					<Link 
						href={`${process.env.NEXT_PUBLIC_REDIRECT}` as Route} 
						style={{fontSize: '2rem'}} 
					>
						<LongText>
							Seungjun&apos;s blog
						</LongText>
						<ShortText>
							blog
						</ShortText>
					</Link>
				</Title>
				{nav}
			</Headers>
	);
};

const Headers = styled.header`
	display: flex;
	justify-content: space-between;
	position: sticky;
	top: 0;
	left: 0;
	width: 100%;
	padding: 5px 0 5px 0;
	border: none;
	box-shadow: 0 0 5px darkgray;
	background-color: ${ props => props.theme.headerColor};
	z-index: 99;
`;

const Title = styled.span`
	display: flex;
	margin-left: 3vw;
	font-weight: bold;
	align-items: center;
	z-index:999;
`;

const LongText = styled.div`
	color: ${ props => props.theme.text};
	@media (max-width: 980px){
		display:none;
	}
`;

const ShortText = styled.div`
	color: ${ props => props.theme.text};
	@media (min-width: 980px) {
		display:none;
	}
`;
