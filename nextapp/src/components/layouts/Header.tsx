'use client';

import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import dynamic from 'next/dynamic';

import styled, { keyframes } from "styled-components";

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

const NavContainers = styled.nav`
	margin-right: 5vw;
	display: flex;
	align-items: center;
	gap: 2.5rem;

	@media (max-width: 576px) {
		display: none;
	}
`;

const NavBoxes = styled.div`
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
	cursor: pointer;
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

const sildIn = keyframes`
  from {
		transform: translateX(100%);
	}
	to {
		transform: translateX(0);
	}
`;

const Div = styled.div`
	display: flex;
	align-items: center;
	transition: all 2s;
  /* opacity: 0; */
	transform: translateX(-100%);
  animation: ${sildIn} 0.3s ease-out forwards;
`;
/** Header 컴포넌트 */
export default function Header () {
	const [ navState, setNavState ] = useState<boolean>(false);
	const [ navConatiner, setNavConatiner] = useState<React.ReactElement>(<></>);
	useEffect(() => {
		const sessionState = JSON.parse(`${window.sessionStorage.getItem('state-storage')}`)?.state;

		const NavContainer = (
			<Div>
			<NavContainers>
				<Link href={'/'} style={{ fontWeight: 'bold',fontSize: '1.5rem' }}>
					home
				</Link>
				<Link href={'/introducing'} style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
					about me
				</Link>
				{ sessionState?.isLogin ?
					<Link href={'/createPost'} style={{ fontWeight: 'bold', fontSize: '1.5rem'}}>
						posting
					</Link> :
					<Link href={'/auth'} style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
						login
					</Link>
				}
			</NavContainers>
			<NavBoxes onClick={()=>{setNavState(!navState)}}>
					<NavBtn>
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
							{ sessionState?.isLogin ?
								<Link href={'/createPost'} style={{ color:'gray', fontSize: '1.5rem'}}>
									posting
								</Link>:
								<Link href={'/auth'} style={{ color:'gray', fontSize: '1.5rem' }}>
									login
								</Link>
							}
						</Borad>
						: <></>
					}
				</NavBoxes>
			</Div>
		);

		setNavConatiner(NavContainer);
	}, [navState])
	
	return (
		<Headers>
			<Title>
				<Link href={'/'} style={{fontSize: '3rem'}} >
					Blog
				</Link>
			</Title>
			{navConatiner}
		</Headers>
	);
};