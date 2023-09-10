'use client';

import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import Link from "next/link";
import lottie from '../../../public/lottiefiles/animation_lmbr8j96_transparent.gif';

import Image from "next/image";

import { _axios } from "hooks/axios";
import { stateStore } from "data/store";
import MetaMask from "components/lib/MetaMask";

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
	background-color: #ffffff;
	z-index: 99;
`;

const Title = styled.span`
	display: flex;
	margin-left: 3vw;
	font-weight: bold;
	align-items: center;
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
	width: 3.8rem;
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
	font-size: 1.5rem;
	border: 1px solid #eaecef;
	border-radius: 5px;
	color: gray;
	justify-content: center;
	cursor: pointer;
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

const Borad = styled.nav`
	display:	flex;
	width: 100%;
	flex-direction: column;
	align-items: center;
	margin-top: 5px;
	padding: 10px 0 13px 0;
	background-color: beige;
	border: 1px solid #eaecef;
	border-radius: 10px;
	gap: 1rem;
	animation: ${draw} 0.5s ease forwards;
`;

const MetaMaskBox = styled.div`
	margin-right: auto;
	margin-left: auto;
	width: 5rem;
	@media (max-width: 576px){
		display: none;
	}
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
					<Link href={`${process.env.NEXT_PUBLIC_REDIRECT}/about`} style={{fontSize:'1.5rem'}}>
						about
					</Link>
					{ sessionState?.isLogin ?
						<>
							<Link href={`${process.env.NEXT_PUBLIC_REDIRECT}/createPost`} style={{fontSize:'1.5rem'}}>
								posting
							</Link> 
							<div onClick={logoutHandler} style={{color: '#5e5e5e', cursor:'pointer', fontSize: '1.5rem' }} >
								logout
							</div>
						</>
						:
						<Link href={`${process.env.NEXT_PUBLIC_REDIRECT}/auth`} style={{fontSize:'1.5rem'}}>
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
							<Link href={`${process.env.NEXT_PUBLIC_REDIRECT}/about`} style={{ color:'gray' }}>
								about
							</Link>
							{ sessionState?.isLogin ?
								<>
									<Link href={`${process.env.NEXT_PUBLIC_REDIRECT}/createPost`} style={{ color:'gray'}}>
										posting
									</Link>
									<div onClick={logoutHandler} style={{ color:'gray', cursor:'pointer' }}>
										logout
									</div>
								</>
								:
								<Link href={`${process.env.NEXT_PUBLIC_REDIRECT}/auth`} style={{ color:'gray' }}>
									login
								</Link>
							}
							<MetaMask />
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
				<Image alt='이미지 에러' src={lottie} style={{marginRight:'1.5vw',marginTop:'3px'}} width={50} height={50}/>
				<Link href={`${process.env.NEXT_PUBLIC_REDIRECT}`} style={{fontSize: '2rem'}} >
					<LongText>
						Seungjun's blog
					</LongText>
					<ShortText>
						blog
					</ShortText>
				</Link>
			</Title>
			{navConatiner}
		</Headers>
	);
};