'use client';

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Props } from "app/layout";

const Contents = styled.section`
	width: 100%;
	max-width: 1200px;
	overflow-x: auto;
	overflow-y: auto;
	padding: 0 20px 0 20px;
	margin-left: auto;
	margin-right: auto;

	@media (max-width: 576px) {
		padding: 0px 10px 0 10px;
	}
`;

export default function Content ({ children }: Props) {
	return (	
		<Contents>
			{children}
		</Contents>
	);
};