'use client'

import React from "react";
import styled from 'styled-components';

const Footers = styled.footer`
	display: flex;
	width: 100%;
	height: 100px;
	font-size: 1rem;
	bottom: 0px;
	border-top: 1px solid;
	flex-direction: row-reverse;
	@media(max-width: 520px){
		display: none;
	}
`;

const CopyRight = styled.p`
	margin: 1.5rem;
`;

export default function Footer(): React.ReactElement {
	return (
		<Footers>
			<CopyRight>
				Copyright 2023. LEE SEUNGJUN. All Rights Reserved 
			</CopyRight>
		</Footers>
	);
};