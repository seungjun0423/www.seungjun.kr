'use client';

import React from "react";
import styled from "styled-components";
import dynamic from 'next/dynamic';


const DynamicComponent = dynamic(() =>
  import('../../lib/PostEditor'), {
		ssr: false,
	}
);

const CreatePosts = styled.section`
	width: 100%;
	height: 100%;
	overflow-y: hidden;
	overflow-x: auto;
`;

const P = styled.p`
	display: flex;
	justify-content: center;
	font-size: 2rem;
	font-weight: bold;
`;

export default function CreatePost({ contents }: { contents: string }): React.ReactElement {

	return(
		<CreatePosts>
			<P>
				글 작성하기
			</P>
			<DynamicComponent contents={contents}>
			</DynamicComponent>
		</CreatePosts>
	)
}