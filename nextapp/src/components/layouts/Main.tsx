'use client'

import React from "react";
import styled from "styled-components";
import Sidebar from "./Sidebar";
import Content from "components/layouts/Content";
import { Props } from "app/layout";

const Mains = styled.main`
	width: 100%;
	height: 100%;
	display: flex;
`;

export default function Main ({ children }: Props) {
	return (
		<Mains>
			<Sidebar />
			<Content>
				{children}
			</Content>
		</Mains>
	);
};