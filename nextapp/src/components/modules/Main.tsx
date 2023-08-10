'use client'

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Sidebar from "../views/Sidebar";

const Mains = styled.div`
	box-sizing: border-box;
	display: flex;
	width: 100%;
	height: 85vh;
	flex-wrap: wrap-reverse;
	align-content: space-between;

	@media (max-width: 780px) {
		height: 87vh;
	}

	@media(max-width: 520px){
		height: 93vh;
	}
`;

const Contents = styled.div`
	box-sizing: border-box;
	height: inherit;
	padding: 2rem;
	font-size: 1.5rem;
	overflow-x: auto;
	overflow-y: auto;
	@media (min-width: 1440px) {
		width: 85vw;
	}

	@media (min-width: 1024px) and (max-width: 1439px) {
		width: 80vw;
	}
	
	@media (min-width: 769px) and (max-width: 1023px) {
		width: 75vw;
	}
	
	@media (min-width: 521px) and (max-width: 768px) {
		width: 70vw;
	}

	@media (max-width: 520px){
		width: 100vw;
		height: 85vh;
	}
	`;

export default function Main({ Children }: any): React.ReactElement {

	return (
		<Mains>
			<Sidebar />
			<Contents>
				{Children}
			</Contents>
		</Mains>
	);
};