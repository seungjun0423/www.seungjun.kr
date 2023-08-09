'use client'

import React, { useEffect, useState } from "react";
import Link from "next/link"
import styled from "styled-components";
import { InnerWidthStore } from "model/store";

const Headers = styled.header`
	width: 100%;
	height: 8%;
	top: 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: sticky;
	z-index: 99;
	background-color: #ffffff;
	border-bottom: 1px solid;
`;

const Title = styled.span`
	padding-left: 15%;
`;

const NavContainer = styled.span`
	padding-right: 3%;
	display: flex;
	gap: 2.5rem;
`;

const NavBox = styled.div`
	margin-right: 3%;
	width: 6rem;
	height: 4rem;
`;

const NavBtn = styled.button`
	width: 100%;
	height: 100%;
`;

const Borad = styled.span`
	display:	flex;
	width: 100%;
	flex-direction: column;
	align-items: center;
	margin-top: 10px;
	padding: 10px 0 5px 0;
	background-color: beige;
	border: 1px solid;
	gap: 2rem;
`;

/** Header 컴포넌트 */
export default function Header(): React.ReactElement {
	const { innerWidth, setInnerWidth } =  InnerWidthStore( state => state);
	const [navState, setNavState] = useState<boolean>(false);

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

	/** innerWidth 가 520 이상일 경우 */
	const navContainer = (): React.ReactElement => {
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
	const navBox = (): React.ReactElement => {
		return (
			<NavBox>
				<NavBtn onClick={()=>{setNavState(!navState)}}>
					Click!
				</NavBtn>
				{ navState ? 
					<Borad>
						<Link href={'/'} style={{ fontSize: '1.5rem', textDecoration: 'none', color: 'black'}}>
							home
						</Link>
						<Link href={'/introducing'} style={{ fontSize: '1.5rem', textDecoration: 'none', color: 'black'}}>
							about
						</Link>
						<Link href={'/admin'} style={{ fontSize: '1.5rem', textDecoration: 'none', color: 'black'}}>
							admin
						</Link>
					</Borad>
					: <></>
				}
			</NavBox>
		);
	};
	
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
