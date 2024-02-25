'use client';
import { Props } from "app/layout";
import React from "react";
import { styled } from "styled-components";

export default function Meal ({children}: Props) {
	return (
		<Meals>
			<JoinSurvey>
				<h3>식사 참석 여부</h3>
				<BtnBox>
					<Btn onClick={()=>console.log("ㅖ")}>네</Btn>
					<Btn onClick={()=>console.log("ㄴ")}>아니요</Btn>
				</BtnBox>
			</JoinSurvey>
		</Meals>
	);
};

const Meals = styled.main`
	width: 100%;
	/* height: calc(100vh - 110px); */
	height: 100vh;
	display: flex;
	background-color: ${ props => props.theme.background };
`;

const JoinSurvey = styled.div`
	width: 100%;
	height: 100vh;
	display:flex;
	flex-direction: column;
	align-items: center;
	margin-top: 100px;
`;

const BtnBox = styled.div`
	display:flex;
	gap:10px;
`;

const Btn = styled.button`
	width: fit-content;
	height: 35px;
	border-radius: 5px;
	border: none;
	text-align: center;
	cursor: pointer;
`;



var dummy = [
	{ id: 0, name: "Justine",},
	{ id: 1, name: "Jamese",},
	{ id: 2, name: "Riam",},
	{ id: 3, name: "Yusub",},
	{ id: 4, name: "Grace",},
	{ id: 5, name: "Haiely",},
	{ id: 6, name: "Jenny",},
	{ id: 7, name: "Phillip",},
	{ id: 8, name: "Zinna",},
	{ id: 9, name: "Yumi",},
	{ id: 10, name: "Stella",},
	{ id: 11, name: "Steven",},
	{ id: 12, name: "Chris",},
	{ id: 13, name: "Logan",},
	{ id: 14, name: "Jay",},
	{ id: 15, name: "Aron",},
	{ id: 16, name: "Doy",},
	{ id: 17, name: "Jitender",},
	{ id: 18, name: "Manoj",},
	{ id: 19, name: "Michel",},
];

