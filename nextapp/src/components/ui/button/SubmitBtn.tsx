"use client";
import React from "react";
import styled from "styled-components";

export default function SubmitBtn({ handler }: { handler:() => any }){
	return (
		<BtnBox>
			<Submit type="submit" value={'확인'} onClick={()=>handler()}/>
		</BtnBox>
	);
};

const BtnBox = styled.div`
	width: 100%;
	height: 100px;
	display: flex;
	justify-content: center;
	@media (max-width: 576px) {
		height: 50px;
	}
`;

const Submit = styled.input`
	width: 10rem;
	height: 40px;
	border-radius: 30px;
	border: none;
	margin-top: 20px;
	font-size: 1rem;
	font-weight: bold;
	background-color: lightgray;
	cursor: pointer;
	
	@media (max-width: 576px) {
		width: 8rem;
	}
`;