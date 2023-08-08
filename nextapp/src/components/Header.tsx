'use client'

import React from "react";
import Link from "next/link"
import styled from "styled-components";

const Headers = styled.header`
	width: 100%;
	top: 0;
	display: flex;
	/* justify-content: center; */
	justify-content: space-between;
	align-items: center;
	position: sticky;
	z-index: 99;
	background-color: #ffffff;
	border-bottom: 1px solid;
`;

const Title = styled.span`
	padding-left: 20%;
`;

const NavBox = styled.span`
	padding-right: 3%;
	display: flex;
	gap: 2rem;
	@media(max-width: 425px){
		display: none;
}
`;

export default function Header({}) {
	return (
		<Headers>
			
			<Title>
				<Link href={'/'} style={{fontSize: '3rem', textDecoration: 'none', color: 'black'}} >
					Blog
				</Link>
			</Title>

			<NavBox>
				<Link href={'/'} style={{ fontSize: '1.5rem', textDecoration: 'none', color: 'black'}}>
					home
				</Link>
				<Link href={'/introducing'} style={{ fontSize: '1.5rem', textDecoration: 'none', color: 'black'}}>
					about me
				</Link>
				<Link href={'/admin'} style={{ fontSize: '1.5rem', textDecoration: 'none', color: 'black'}}>
					admin
				</Link>
			</NavBox>

		</Headers>
	);
};