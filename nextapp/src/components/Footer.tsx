'use client'

import styled from 'styled-components';

const Footers = styled.footer`
	display: flex;
	width: 100%;
	height: 100px;
	font-size: 1rem;
	bottom: 0px;
	border-top: 1px solid;
`;

export default function Footer() {
	return (
		<Footers>
			<p style={{margin: '1.5rem'}}>
				저작권자: 이승준
			</p>
		</Footers>
	)
}