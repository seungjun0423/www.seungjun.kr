'use client';

import React, { useState, useLayoutEffect } from "react";
import styled, { keyframes } from "styled-components";
import Link from "next/link";

import Lottie from 'react-lottie-player';
import lottieJson from '../../../public/lottiefiles/darkmode.json';
import { useStore, stateStore } from "../../data/store";

import { Route } from "next";
import { useRouter } from "next/navigation";

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
	display: flex;
	width: 100%;
	flex-direction: column;
	align-items: center;
	margin-top: 5px;
	background-color: beige;
	border: 1px solid #eaecef;
	border-radius: 10px;
	animation: ${draw} 0.5s ease forwards;
`;

// const MetaMaskBox = styled.div`
// 	margin-right: auto;
// 	margin-left: auto;
// 	width: 5rem;
// 	@media (max-width: 576px){
// 		display: none;
// 	}
// `;

const Div = styled.div`
	display: flex;
	align-items: center;
`;

export default function Nav(){
	const [ navState, setNavState ] = useState<boolean>(false);
	const store = useStore((state: any) => state);
	const localStorage : any = stateStore(state => state);
	const router = useRouter();

	useLayoutEffect(() => {
		const isLogin = async () => {
			const req: any = await fetch(
				`${process.env.NEXT_PUBLIC_CORS_URL}/auth/validate`,
				{
					method: 'GET',
					credentials: 'include',
				}
			)
			.then(res=>res.json());
			if(req.message === 'auth user'){
				const userId = localStorage.id;
				if(userId){
					store.setStore(userId);
				}
			}
		}
		isLogin();
	}, []);

	const logoutHandler = async () => {
		try{
			const req: any = await fetch(
				`${process.env.NEXT_PUBLIC_CORS_URL}/auth/logout`,
				{
					method: 'POST',
					body: JSON.stringify({id: localStorage.id }),
					headers: { 'Content-Type': 'application/json' },
					credentials: 'include',
					cache:'no-cache',
				}
			)
			.then(res=>res.json());

			if(req.message === 'logout success'){
				store.setStore(null);
				router.push('/');
			} else if(req.message !== 'logout success'){
				alert('log out failed!')
			}
		} catch(err){
			throw err;
		}
	}

	const darkModeHandler = () => {
		// setDarkMode(!isDarkMode);
	};
	
	return(
			<Div>
				{/* <Lottie 
					onClick={()=>{darkModeHandler()}}
					animationData={lottieJson}
					play={stateStore.getState().darkMode}
					loop={false}
					style={{ width: 50, height: 50 ,cursor:'pointer', marginRight:'20px'}}
				/> */}
				<NavContainers>
					<Link href={`${process.env.NEXT_PUBLIC_REDIRECT}/about` as Route} style={{fontSize:'1.5rem'}}>
						about
					</Link>
					{ store.id ?
						<>
							<Link href={`${process.env.NEXT_PUBLIC_REDIRECT}/post/write` as Route} style={{fontSize:'1.5rem'}}>
								posting
							</Link> 
							<div onClick={logoutHandler} style={{color: '#5e5e5e', cursor:'pointer', fontSize: '1.5rem' }} >
								logout
							</div>
						</>
						:
						<Link href={`${process.env.NEXT_PUBLIC_REDIRECT}/auth` as Route} style={{fontSize:'1.5rem'}}>
							login
						</Link>
					}
				</NavContainers>
				<NavBoxes onClick={()=>{setNavState(!navState)}}>
					<NavBtn>
						&#9776;
					</NavBtn>
					{ navState ? 
						<Borad>
							<Link 
								href={`${process.env.NEXT_PUBLIC_REDIRECT}/about` as Route} 
								style={{ color:'gray',fontSize:'1rem', marginTop:'1rem' }}
							>
								about
							</Link>
							{ store.id ?
								<>
									<Link 
										href={`${process.env.NEXT_PUBLIC_REDIRECT}/post/write` as Route} 
										style={{ color:'gray',fontSize:'1rem', marginTop:'1rem'}}
									>
										posting
									</Link>
									<div onClick={logoutHandler} style={{ color:'gray', cursor:'pointer',fontSize:'1.1rem', marginTop:'1rem', marginBottom: '6px' }}>
										logout
									</div>
								</>
								:
								<Link 
									href={`${process.env.NEXT_PUBLIC_REDIRECT}/auth` as Route} 
									style={{ color:'gray',fontSize:'1rem', marginTop:'1rem', marginBottom: '6px'}}
								>
									login
								</Link>
							}
						</Borad>
						: <></>
					}
				</NavBoxes>
			</Div>
	)
}