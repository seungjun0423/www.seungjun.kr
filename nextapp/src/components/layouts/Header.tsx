'use client';

import React from "react";
import styled, { keyframes } from "styled-components";
import Link from "next/link";
import Image from "next/image";

import lottie from '../../../public/lottiefiles/kitty.gif';
import { Route } from "next";

import Nav from "components/ui/Nav";

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
	background-color: var(--header-color);
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
	@media (max-width: 980px){
		display:none;
	}
`;

const ShortText = styled.div`
	@media (min-width: 980px) {
		display:none;
	}
`;

const draw = keyframes`
  from {
		transform: translateY(-10px);
		opacity: 0;
	}
	to {
		transform: translateY(0);
		opacity: 1;
	}
`;

/** Header 컴포넌트 */
export default function Header () {
	
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
				<Nav />
			</Headers>
	);
};