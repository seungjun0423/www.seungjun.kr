'use client'

import styled, { keyframes } from "styled-components";


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
	width: 4.5rem;
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


export { NavContainers, NavBoxes, NavBtn, draw, Borad, Div };