'use client';

import React from "react";
import styled from "styled-components";
import { Viewer } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';


const PostViewers = styled.div`

`;

export default function Postviewer() {
	return (
		<PostViewers id=''>
			<Viewer></Viewer>
		</PostViewers>
	)
}