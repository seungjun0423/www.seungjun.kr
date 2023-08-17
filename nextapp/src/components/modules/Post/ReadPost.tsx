'use client';

import React from "react";
import styled from "styled-components";
import Postviewer from "components/lib/PostViewer";

const ReadPosts = styled.section`
	width: 100%;
`;

export default function ReadPost(){
	return(
		<ReadPosts>
			<Postviewer></Postviewer>
		</ReadPosts>
	)
}