'use client';

import React from "react";
import styled from "styled-components";
import { Props } from "app/layout";


const Contents = styled.section`
	width: 100%;
	height: 100vh;
	overflow-x: auto;
	overflow-y: auto;
`;

export default function Content ({ children }: Props) {

	return (
		<Contents>
			{children}
		</Contents>
	);
};