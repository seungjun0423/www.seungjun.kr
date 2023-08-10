'use client'

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Sidebar from "../views/Sidebar";
import Underbar from "components/views/Underbar";

const Mains = styled.div`
	display: flex;
	width: 100%;
	height: 82vh;
	flex-wrap: wrap-reverse;
	align-content: space-between;
	@media(max-width: 519px){
		height: 92vh;
	}
`;

const Contents = styled.div`
	padding: 2rem;
	font-size: 1.5rem;
`;

export default function Main({ Children }: any): React.ReactElement {

	return (
		<Mains>
			<Sidebar />
			<Underbar />
			<Contents>
				{Children}
			</Contents>
		</Mains>
	);
};