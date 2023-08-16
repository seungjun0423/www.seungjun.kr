'use client';

import React, { ReactNode } from "react";
import styled from "styled-components";
import dynamic from 'next/dynamic';

/** 마크다운 에디터 사용을 위해 ssr 끄기. */
const DynamicComponent: React.ComponentType<{
	children: React.ReactNode;
}> = dynamic(() => import('../../lib/PostEditor'), { ssr: false }
);

const CreatePosts = styled.section`
	width: 100%;
	height: 100%;
	overflow-y: hidden;
	overflow-x: auto;
`;

const H1 = styled.h1`
	display: flex;
	justify-content: center;
`;

export default function CreatePost(): React.ReactElement {

	return(
		<CreatePosts>
			<H1>
				글 작성하기
			</H1>
			<div style={{paddingLeft:'5%',paddingRight:'5%'}}>

			<DynamicComponent>
			</DynamicComponent>
			</div>
		</CreatePosts>
	)
}