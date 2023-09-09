'use client';
import React from "react";
import styled from "styled-components";

import { PostType } from '../../../types/interface'


const UpdateCategories = styled.div`
	width: 100%;
	padding: 1rem 0 1rem 0;

	@media (max-width: 576px) {
		margin-bottom: 0;
		border: none;
		/* display:flex; */
		
		& :last-child {
			margin-right: 1rem;
		}
	}
`;

const Posts = styled.input`
	width: 100%;
	font-size: 1.5rem;
	font-weight: bold;
	font-style: normal;
	color: #5e5e5e;
	border: none;
	text-align: center;
	cursor: pointer;
`;

export default function UpdatCategory ({ title, categoryId }: {title: string, categoryId: number}) {
	return (
		<UpdateCategories>
			<Posts type="text" defaultValue={title} required/>
		</UpdateCategories>
	)
}