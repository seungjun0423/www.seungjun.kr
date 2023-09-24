'use client';

import React, { useState, useEffect, useContext } from "react";
import styled, { keyframes } from "styled-components";
import Link from "next/link";
import Image from "next/image";

import Lottie from 'react-lottie-player';
import lottie from '../../../public/lottiefiles/kitty.gif';
import lottieJson from '../../../public/lottiefiles/darkmode.json';
import { _axios } from "hooks/axios";
import { stateStore } from "data/store";
import { Route } from "next";

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
	display: flex;
	align-items: center;
  animation: ${sildIn} 0.5s ease-out forwards;
`;

export default function Nav(){
	return(
			<Div>
				<Lottie 
					onClick={()=>{darkModeHandler()}}
					animationData={lottieJson}
					// play={stateStore.getState().darkMode}
					// loop={false}
					style={{ width: 50, height: 50 ,cursor:'pointer', marginRight:'20px'}}
				/>
				<NavContainers>
					<Link href={`${process.env.NEXT_PUBLIC_REDIRECT}/about` as Route} style={{fontSize:'1.5rem'}}>
						about
					</Link>
					{ localStorage.id ?
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
							{ localStorage.id ?
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