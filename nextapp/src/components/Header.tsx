"use client"

import Link from "next/link"
import styled from "styled-components";

const Headers = styled.header`
	width: 100%;
	top: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	position: sticky;
	z-index: 99;
	background-color: #ffffff;
	border-bottom: 1px solid;
`;

export default function Header() {
	return (
		<Headers>
			<Link href={'/'} style={{fontSize: '3rem', textDecoration: 'none', color: 'black'}} >
				Blog
			</Link>
			<Link href={'/admin'} style={{paddingLeft: '5rem', fontSize: '1.5rem', textDecoration: 'none', color: 'black'}}>
				Admin
			</Link>
		</Headers>
	)
}