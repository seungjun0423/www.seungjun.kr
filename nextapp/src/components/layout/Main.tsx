'use client'

import React from "react";
import styled from "styled-components";
import Sidebar from "./Sidebar";
import Content from "components/layout/Content";

const Mains = styled.main`
	width: 100%;
	height: 100%;
	display: flex;
`;

export default function Main ({ children }: { children: React.ReactNode }): React.ReactElement {
	return (
		<Mains>
			<Sidebar />
			<Content>
				{children}
			</Content>
		</Mains>
	);
};