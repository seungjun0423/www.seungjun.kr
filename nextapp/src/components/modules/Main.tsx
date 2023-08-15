'use client'

import React, { ReactNode, useEffect, useState } from "react";
import styled from "styled-components";
import Sidebar from "../views/Sidebar";
import Content from "components/views/Content";
const Mains = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
`;

export default function Main( { Children }: { Children: ReactNode }): React.ReactElement {
	return (
		<Mains>
			<Sidebar />
			<Content Children={Children}/>
		</Mains>
	);
};