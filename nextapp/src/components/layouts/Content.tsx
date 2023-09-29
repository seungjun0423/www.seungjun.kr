'use client';

import React from "react";
import styled from "styled-components";
import { Props } from "app/layout";

export default function Content ({ children }: Props) {

	return (	
		<Contents>
			{children}
		</Contents>
	);
};

const Contents = styled.section`
	width: 100%;
	max-width: 1000px;
	overflow-x: auto;
	overflow-y: auto;
	padding: 0 20px 0 20px;
	margin-left: auto;
	margin-right: auto;

	@media (max-width: 576px) {
		padding: 0px 10px 0 10px;
	}
`;