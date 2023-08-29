'use client';

import React from "react";
import styled, { keyframes } from "styled-components";
import Link from "next/link";

const sildIn = keyframes`
  from {
		transform: translateY(-90%);
		opacity: 0;
	}
	to {
		transform: translateY(0);
		opacity: 1;
	}
`;

const Posts = styled.button`
	width: 100%;
	margin-top: 1rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	border: none;
	background-color: transparent;
	cursor: pointer;

	@media (min-width:577px){
		animation: ${sildIn} 0.5s ease forwards;
	}
`;


export default function Post ({ title, contents }: { title: string, contents: unknown}) {
	return (
		<Posts onClick={()=>{console.log('Cliked!')}}>
			{title}
		</Posts>
	)
}