'use client';

import React, { ReactNode, useEffect, useState } from "react";
import styled from "styled-components";
import PostEditor from "components/lib/PostEditor";

const CreatePosts = styled.section`
	width: 100%;
	height: 100%;
	overflow-y: hidden;
	overflow-x: auto;
`;

const H1 = styled.h1`
	display: flex;
	justify-content: center;
	margin-top: 30px;

	@media (min-width: 1200px) {
		margin: 30px 0 20px 0;
	}
`;

export default function CreatePost ({children}: {children: React.ReactNode}) {
	const [ editor, setEditor] = useState<React.ReactElement>(<></>);
	
	useEffect(() => {
		setEditor(
			<PostEditor>
				{children}
			</PostEditor>
		)
	}, [])
	

	return(
		<CreatePosts>
			<H1>
				글 작성하기
			</H1>
			{editor}
		</CreatePosts>
	)
}