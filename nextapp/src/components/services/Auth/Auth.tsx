'use client';

import React from "react";
import styled from "styled-components";
import { authState } from "data/store";

const Auths = styled.div`
	display: flex;
	font-size: 3rem;
`;

export default function Auth () {
	const { isAdmin, setIsAdmin } = authState();

	return(
		<Auths>
			오쓰!
			<button style={{backgroundColor:'skyblue', fontSize: '2rem'}} onClick={()=>setIsAdmin(true)}>
				허락
			</button>
			<button style={{backgroundColor: 'orange', fontSize: '2rem'}} onClick={()=>setIsAdmin(false)}>
				반려
			</button>
		</Auths>
	)
}