'use client'

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Sidebar from "../views/Sidebar";
import Underbar from "components/views/Underbar";

const Mains = styled.div`
	display: flex;
	width: 100%;
	flex-wrap: wrap-reverse;
	align-content: space-between;
`;

const Contents = styled.div`
	padding: 2rem;
	font-size: 1.5rem;
`;

export default function Main({ Children }: any): React.ReactElement {
	const [ innerWidth, setInnerWidth ] =  useState<number>(window.innerWidth);

	/** 변화하는 innerWidth에 맞춰 상태에 적용하는 함수*/
	const innerWidthListener = () : void => {
    setInnerWidth(window.innerWidth);
  };
	
	// 렌더링 이전에 작동하는 훅
	useEffect(() => {
		// 크기에 따라 화면 넓이 자동 조절   
		window.addEventListener("resize", innerWidthListener);
    setInnerWidth(window.innerWidth);
    return () => {
      window.removeEventListener("resize", innerWidthListener);
    }
	}, [])

	return (
		<Mains style={{height: innerWidth >= 520 ? '84vh':'92vh'}}>

			{ innerWidth >= 520 ? 
				<Sidebar />
				: <Underbar />
			}

			<Contents>
				{Children}
			</Contents>

		</Mains>
	);
};