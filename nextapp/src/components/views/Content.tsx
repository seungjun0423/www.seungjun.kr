'use client';

import React, { ReactNode } from "react";
import styled from "styled-components";

const Contents = styled.main`
	width: 100%;
	height: 100%;
	overflow-x: auto;
	overflow-y: auto;
`;

export default function Content( { Children }: { Children: ReactNode }): React.ReactElement {

	return (
		<Contents>
			{Children}
		</Contents>
	);
};