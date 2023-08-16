'use client';

import React from "react";
import styled from "styled-components";
import { Viewer } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';

const PostViewers = styled.div`
	width: 100%;
`;

//Todo: 데이터 입력 테스트 필요
export default function Postviewer() {
	return (
		<PostViewers id='viewer'>
			<Viewer initialValue={'<h3> html 헤더 <span style="color:blue;">파란색</span></h3>'}></Viewer>
		</PostViewers>
	)
}