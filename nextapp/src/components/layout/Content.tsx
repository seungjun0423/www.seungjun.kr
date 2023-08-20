'use client';

import React from "react";
import styled from "styled-components";

const Contents = styled.section`
	width: 100%;
	height: 100vh;
	overflow-x: auto;
	overflow-y: auto;
`;

export default function Content({ children }: { children: React.ReactNode } ): React.ReactElement {

	return (
		<Contents>
			{children}
		</Contents>
	);
};