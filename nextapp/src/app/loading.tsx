'use client';
import styled from "styled-components";

export default function WelcomeLoading () {
	return (
		<Loadings>
			로딩중입니다....
		</Loadings>
	);
}

const Loadings =styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 3rem;
`;
