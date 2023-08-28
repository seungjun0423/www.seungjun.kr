'use client';

import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import styled from "styled-components";

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

export default function NavBox({navState, setNavState}: any) {
	const sessionState = JSON.parse(`${window.sessionStorage.getItem('state-storage')}`)?.state;

	return(
		<NavBoxes>
		{/* <NavBtn onClick={()=>{setNavState(!navState)}}> */}
		<NavBtn >
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
					<Link href={'/post/create'} style={{ color:'gray', fontSize: '1.5rem'}}>
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
	)
}