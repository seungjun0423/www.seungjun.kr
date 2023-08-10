'use client'

import React from "react";
import styled from 'styled-components';

const Footers = styled.footer`
	box-sizing: border-box;
	display: flex;
	width: 100vw;
	font-size: 1rem;
	border-top: 1px solid;
	flex-direction: row-reverse;
	align-content: center;

	@media(max-width: 520px){
		display: none;
	}
`;

const CopyRight = styled.p`
	margin: 1.5rem;
`;

/** width 값이 520px 미만인 디바이스에선 가려진다 */
export default function Footer(): React.ReactElement {
	return (
		<Footers>
			<CopyRight>
				Copyright 2023. LEE SEUNGJUN. All Rights Reserved 
			</CopyRight>
		</Footers>
	);
};