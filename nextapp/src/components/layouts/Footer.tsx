'use client'

import React from "react";
import styled from 'styled-components';
import { FaGithubSquare, FaInstagram } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

const Footers = styled.footer`
	position: relative;
	bottom: 0;
	display: flex;
	width: 100%;
	/* height: 8vh; */
	border-top: 1px solid #eaecef;
	flex-direction: row-reverse;
	align-items: center;

	@media(max-width: 576px){
		display: none;
	}
`;

const Contact = styled.div`
	display: flex;
	align-items:center;
	font-weight: bold;
	color: gray;
	margin-right: 10px;
`;

const CopyRight = styled.p`
	margin: 1.5rem;
	font-weight: bold;
	color: gray;
`;

/** width 값이 576px 미만인 디바이스에선 가려진다 */
export default function Footer(): React.ReactElement {
	return (
		<Footers>
			<CopyRight>
				Copyright 2023. LEE SEUNGJUN. All Rights Reserved 
			</CopyRight>

			<Contact>
				<span style={{marginRight: '10px'}}>
					Contact:
				</span>
				<FaGithubSquare style={{width: '35px',height:'35px', cursor:'pointer'}} onClick={()=>window.open('https://github.com/seungjun0423')}/>
				<FaInstagram style={{width: '35px',height:'35px', cursor:'pointer'}} onClick={()=>window.open('https://www.instagram.com/azzacha00/')}/>
				<FiMail style={{width: '35px',height:'35px', cursor:'pointer'}} onClick={()=>window.location.href='mailto: tmdwns0423@nate.com'}/>
			</Contact>
		</Footers>
	);
};