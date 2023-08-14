'use client'

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Sidebar from "../views/Sidebar";

const Mains = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
`;

const Contents = styled.div`
	width: 100%;
	height: 100%;
	font-size: 1rem;
	overflow-x: auto;
	overflow-y: auto;
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