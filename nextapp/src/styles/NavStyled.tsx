'use client'

import styled, { keyframes } from "styled-components";
import Link from "next/link";

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

	@media (min-width: 577px) {
		display: none;
	}
`;

const NavBtn = styled.button`
	width: 100%;
	height: 100%;
	border: 1px solid #eaecef;
	border-radius: 5px;
	/* color: gray; */
	justify-content: center;
	cursor: pointer;
`;

const Borad = styled.nav`
	display: flex;
	width: 100%;
	height: 7.5rem;
	flex-direction: column;
	align-items: center;
	margin-top: 5px;
	background-color: ${ props => props.theme.bodyColor};
	border: 1px solid #eaecef;
	border-radius: 10px;
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

const StyledLink = styled(Link)`
font-size: 1.5rem;
color: ${ props => props.theme.text};

	@media (max-width: 576px ) {
		font-size: 1rem;
		margin-top: 1rem;
	}
`;

export { NavContainers, NavBoxes, NavBtn, Borad, Div, StyledLink };