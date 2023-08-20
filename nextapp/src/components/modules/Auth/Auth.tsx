'use client';

import React from "react";
import styled from "styled-components";
import { authState } from "model/store";
import { MetaMaskSDK } from '@metamask/sdk';

/** 메세지를 16진수 암호화 하는 라이브러리 */
import hexerTs from "util/browser-string-hexer";


const MMSDK = new MetaMaskSDK();
const ethereum = MMSDK.getProvider(); // You can also access via window.ethereum

const Auths = styled.div`
	display: flex;
	font-size: 3rem;
`;

export default function Auth () {
	const { isAdmin, setIsAdmin } = authState();

	// console.log("되나?",hexerTs(`메시지`));

	const maskHandler = async () => {
		/** 메타마스크 사인 */
		// const test = await ethereum.request({  method: "personal_sign",
		// 	params: [
		// 	'0xeba994ec8b9ceca780',
		// 	'0xb135b3e1433d77aac92977f30a4e6db43dc89c66'
		// ]});

		/** 지갑 연결 확인 */
		// const test = await ethereum.isConnected();
		/** 지갑 주소 가져오기 */
		const test = await ethereum.request({  method: "eth_requestAccounts",});
		// const test = await ethereum.request({ method: 'wallet_getSnaps' });
		console.log(test);
		return test
		try{

		} catch (error) {

		}
	}
	/**
	private-key: 13d745c6ff62d0b5ca142e3065310d63c26e68a2d2dd55bde1e1be57997768ea
	 */

	return(
		<Auths>
			오쓰!
			<div onClick={()=>maskHandler()} style={{backgroundColor:'green', fontSize: '2rem'}}>
				메타 마스크 테스트  
			</div>
			<button style={{backgroundColor:'skyblue', fontSize: '2rem'}} onClick={()=>setIsAdmin(true)}>
				허락
			</button>
			<button style={{backgroundColor: 'orange', fontSize: '2rem'}} onClick={()=>setIsAdmin(false)}>
				반려
			</button>
		</Auths>
	)
}