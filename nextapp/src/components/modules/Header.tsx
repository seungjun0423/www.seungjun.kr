'use client'

import React, { useState, useEffect } from "react";
import Link from "next/link"
import styled from "styled-components";

const Headers = styled.header`
	display: flex;
	justify-content: space-between;
	position: sticky;
	top: 0;
	left: 0;
	width: 100%;
	padding: 5px 0 5px 0;
	background-color: #ffffff;
	border: none;
	box-shadow: 0 0 5px darkgray;
	z-index: 99;
`;

const Title = styled.span`
	margin-left: 10vw;
	font-weight: bold;
`;

const NavContainer = styled.nav`
	margin-right: 5vw;
	display: flex;
	align-items: center;
	gap: 2.5rem;

	@media (max-width: 576px) {
		display: none;
	}
`;

const NavBox = styled.div`
	margin-right: 3vw;
	width: 6rem;
	height: 4rem;

	@media (min-width: 576px) {
		display: none;
	}
`;

const NavBtn = styled.button`
	width: 100%;
	height: 100%;
	font-size: 2rem;
	border: 1px solid #eaecef;
	border-radius: 5px;
	color: gray;
`;

const Borad = styled.nav`
	display:	flex;
	width: 100%;
	flex-direction: column;
	align-items: center;
	margin-top: 10px;
	padding: 10px 0 5px 0;
	background-color: beige;
	border: 1px solid #eaecef;
	border-radius: 5px;
	gap: 2rem;
	font-weight: bold;
`;

/** Header 컴포넌트 */
export default function Header(): React.ReactElement {
	const [ navState, setNavState ] = useState<boolean>(false);

	/** innerWidth 가 576 이상일 경우 */
	const navContainer = (): React.ReactElement => {
		return (
			<NavContainer>
				<Link href={'/'} style={{ fontWeight: 'bold',fontSize: '1.5rem' }}>
					home
				</Link>
				<Link href={'/introducing'} style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
					about me
				</Link>
				<Link href={'/admin'} style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
					admin
				</Link>
			</NavContainer>
		);
	};	

/** innerWidth 가 576 이하일 경우 */
	const navBox = (): React.ReactElement => {
		return (
			<NavBox>
				<NavBtn onClick={()=>{setNavState(!navState)}}>
					{/** 아래 표현은 HTML entity로 기호를 표현한다 */}
					&#9776;
				</NavBtn>
				{ navState ? 
					<Borad>
						<Link href={'/'} style={{ color:'gray', fontSize: '1.5rem'}}>
							home
						</Link>
						<Link href={'/introducing'} style={{ color:'gray', fontSize: '1.5rem'}}>
							about
						</Link>
						<Link href={'/admin'} style={{ color:'gray', fontSize: '1.5rem'}}>
							admin
						</Link>
					</Borad>
					: <></>
				}
			</NavBox>
		);
	};
	
	return (
		<Headers>
			<Title>
				<Link href={'/'} style={{fontSize: '3rem'}} >
					Blog
				</Link>
			</Title>
			{navContainer()}
			{navBox()}
		</Headers>
	);
};