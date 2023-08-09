'use client'

import React, { useEffect, useState } from "react";
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

const NavContainer = styled.span`
	padding-right: 3%;
	display: flex;
	gap: 2rem;
`;

const NavBox = styled.span`
	margin-right: 3%;
	width: 70px;
	height: 60px;
	background-color: red;
`;

/** Header 컴포넌트 */
export default function Header(): React.ReactElement {
	const [innerWidth, setInnerWidth] = useState<number>(window.innerWidth);

	/** 변화하는 innerWidth에 맞춰 상태에 적용하는 함수*/
	const innerWidthListener = () : void => {
    setInnerWidth(window.innerWidth);
  };

	useEffect(() => {
    // 크기에 따라 화면 넓이 자동 조절   
    window.addEventListener("resize", innerWidthListener);
    
    return () => {
      window.removeEventListener("resize", innerWidthListener);
    }
  }, []);

	return (
		<Headers>
			
			<Title>
				<Link href={'/'} style={{fontSize: '3rem', textDecoration: 'none', color: 'black'}} >
					Blog
				</Link>
			</Title>
			{innerWidth > 520 ? navContainer() : navBox()}
		</Headers>
	);
};

/** innerWidth 가 520 이상일 경우 */
export const navContainer = (): React.ReactElement => {
	return (
	<NavContainer>
		<Link href={'/'} style={{ fontSize: '1.5rem', textDecoration: 'none', color: 'black'}}>
			home
		</Link>
		<Link href={'/introducing'} style={{ fontSize: '1.5rem', textDecoration: 'none', color: 'black'}}>
			about me
		</Link>
		<Link href={'/admin'} style={{ fontSize: '1.5rem', textDecoration: 'none', color: 'black'}}>
			admin
		</Link>
	</NavContainer>
	);
};

/** innerWidth 가 520 이하일 경우 */
export const navBox = (): React.ReactElement => {
	return (
		<NavBox>
		</NavBox>
	);
};
	