'use client'

import React from "react";
import styled from "styled-components";
import Sidebar from "./Sidebar";

const Mains = styled.div`
	display: flex;
	width: 100%;
	height: 100vh;
`;

const Contents = styled.div`
	width: 100%;
	padding: 2rem;
	font-size: 1.5rem;
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