'use client';

import React, { useState, useEffect } from "react";
import Link from "next/link";
import MetaMask from "components/lib/MetaMask";


import styled, { keyframes } from "styled-components";
import { _axios } from "hooks/axios";
import { stateStore } from "data/store";

import metaMaskHandler from "components/lib/MetaMask";

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
	margin-right: 2vw;
	display: flex;
	align-items: center;
	gap: 2.5rem;

	@media (max-width: 576px) {
		display: none;
	}
`;

const NavBoxes = styled.div`
	margin-right: 3vw;
	width: 4rem;
	height: 3rem;
	border-radius: 7px;
	box-shadow: 0px 1px 1px 0 gray;

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
	padding-left: 1rem;
	display: flex;
	align-items: center;
  animation: ${sildIn} 0.5s ease-out forwards;
`;

const MetaMaskBox = styled.div`
	margin-right: auto;
	margin-left: auto;
	width: 5rem;
	@media (max-width: 576px){
		display: none;
	}
`;
/** Header 컴포넌트 */
export default function Header () {
	const [ navState, setNavState ] = useState<boolean>(false);
	const [ navConatiner, setNavConatiner] = useState<React.ReactElement>(<></>);

	const logoutHandler = async () => {
		try{
			const req= await _axios.post('/auth/logout');
			if(req.message === 'logout success'){

				stateStore.setState({isLogin: false},true);
				window.location.replace(`${process.env.NEXT_PUBLIC_REDIRECT}`);
			} else if(req.message !== 'logout success'){
				alert('log out failed!')
			}
		} catch(err){
			throw err;
		}
	}

	useEffect(() => {
		const sessionState = JSON.parse(`${window.sessionStorage.getItem('state-storage')}`)?.state;

		const NavContainer = (
			<Div>
				<NavContainers>
					<Link href={'/introducing'} style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
						about
					</Link>
					{ sessionState?.isLogin ?
						<>
							<Link href={'/createPost'} style={{ fontWeight: 'bold', fontSize: '1.5rem'}}>
								posting
							</Link> 
							<div onClick={logoutHandler} style={{ fontWeight: 'bold',fontSize: '1.5rem', cursor:'pointer' }}>
								logout
							</div>
						</>
						:
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
							<Link href={'/introducing'} style={{ color:'gray', fontSize: '1.5rem'}}>
								about
							</Link>
							{ sessionState?.isLogin ?
								<>
									<Link href={'/createPost'} style={{ color:'gray', fontSize: '1.5rem'}}>
										posting
									</Link>
									<div onClick={logoutHandler} style={{ color:'gray',fontSize: '1.5rem', cursor:'pointer' }}>
										logout
									</div>
								</>
								:
								<Link href={'/auth'} style={{ color:'gray', fontSize: '1.5rem' }}>
									login
								</Link>
							}
							<Link href={'/'} style={{ color:'gray', fontSize: '1.5rem' }}>
								<MetaMask />
							</Link>
						</Borad>
						: <></>
					}
				</NavBoxes>
				<MetaMaskBox>
					<MetaMask />
				</MetaMaskBox>
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