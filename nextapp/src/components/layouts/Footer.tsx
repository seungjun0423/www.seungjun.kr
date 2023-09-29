'use client';
import React from "react";
import styled from 'styled-components';
import { FaGithubSquare, FaInstagram } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

export default function Footer(): React.ReactElement {
	return (
		<Footers>
			<Wrapper>
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
			</Wrapper>
		</Footers>
	);
};

const Footers = styled.footer`
	position: relative;
	bottom: 0;
	display: flex;
	width: 100%;
	border-top: 1px solid #eaecef;
	flex-direction: row-reverse;
	align-items: center;
	font-size: 13px;
	opacity: 0.7;
	
	@media(max-width: 576px){
		display: none;
	}
`;

const Wrapper = styled.div`
	padding: 10px;
	display: flex;
	flex-direction: row-reverse;
`;

const Contact = styled.div`
	display: flex;
	align-items:center;
	font-weight: bold;
	color: gray;
	margin-right: 30px;

	@media (max-width: 768px) {
		margin-right: 15px;
	}
`;

const CopyRight = styled.p`
	font-weight: bold;
	color: gray;
	margin-right: 30px;

	@media (max-width: 768px) {
		margin-right: 10px;
	}
`;
