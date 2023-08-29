'use client';

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Props } from "app/layout";

const Contents = styled.section`
	width: 100%;
	height: 100vh;
	overflow-x: auto;
	overflow-y: auto;
	
	padding: 4rem;
	margin-bottom: 5vh;

	@media (max-width: 576px) {
		margin-bottom: 10vh;
	}
`;

export default function Content ({ children }: Props) {
	return (	
		<Contents>
			{children}
		</Contents>
	);
};