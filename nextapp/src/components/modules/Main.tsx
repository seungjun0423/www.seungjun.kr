'use client'

import React from "react";
import styled from "styled-components";
import Sidebar from "../views/Sidebar";
import Underbar from "components/views/Underbar";

import { InnerWidthStore } from "model/store";

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

export default function Main({ Children, Height }: any): React.ReactElement {
	const { innerWidth, setInnerWidth } =  InnerWidthStore( state => state);
	
	return (
		<Mains style={{height: innerWidth >= 520 ? '82vh':'92vh'}}>

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