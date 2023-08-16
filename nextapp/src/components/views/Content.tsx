'use client';

import React from "react";
import styled from "styled-components";

const Contents = styled.main`
	width: 100%;
	height: 100vh;
	overflow-x: auto;
	overflow-y: auto;
`;

export default function Content({ Children }: { Children: React.ReactNode } ): React.ReactElement {

	return (
		<Contents>
			{Children}
		</Contents>
	);
};