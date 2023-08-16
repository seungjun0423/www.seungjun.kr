'use client'

import React from "react";
import styled from 'styled-components';

const Footers = styled.footer`
	bottom: 0;
	display: flex;
	width: 100%;
	font-size: 1rem;
	border-top: 1px solid;
	flex-direction: row-reverse;
	align-items: center;
	z-index:99;

	@media(max-width: 576px){
		display: none;
	}
`;

const Contact = styled.div`
	display: flex;
`;

const CopyRight = styled.p`
	margin: 1.5rem;
`;

/** width 값이 576px 미만인 디바이스에선 가려진다 */
export default function Footer(): React.ReactElement {
	return (
		<Footers>
			<CopyRight>
				Copyright 2023. LEE SEUNGJUN. All Rights Reserved 
			</CopyRight>

			<Contact>
				Contact: 000-0000-00000
				{/** Todo: 이메일 아이콘 이미지로 보내기 만들기 */}
			</Contact>
		</Footers>
	);
};