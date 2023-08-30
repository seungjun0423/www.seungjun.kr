'use client';

import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import Image from 'next/image';
import metaMask from '../../../public/assets/MetaMask_Fox.svg.png';
import { MetaMaskSDK } from '@metamask/sdk';

/** 메세지를 16진수 암호화 하는 라이브러리 */
import hexerTs from "util/browser-string-hexer";


const MMSDK = new MetaMaskSDK();
const ethereum = MMSDK.getProvider();

const MetaMasks = styled.div`
	display: flex;
	width: 60px;
	height: 58px;
	justify-content: center;
	align-items: center;
	border: none;
	box-shadow: 0px 1px 1px 0px gray;
	border-radius: 17px;
`;

export default function MetaMask () {
	const maskHandler = async () => {
		try{
			/** 지갑 연결 확인 */
			const isConnected = await ethereum.isConnected();
			if(isConnected){
				const accountsAddress = await ethereum.request({ method: "eth_requestAccounts",}) as string[];
				if(accountsAddress){
					const address = accountsAddress[0];
					const personalSign = await ethereum.request({ 
						method: "personal_sign",
						params: [
							hexerTs(`메시지`), // 암호화된 메세지
							address  // 서명 요청을 받을 사람 주소
						]
					});
					console.log(personalSign);
				}
			}
	
		} catch (error) {
	
		}
		// const walletSnap = await ethereum.request({ method: 'wallet_getSnaps' });
	
	}
	return (
		<MetaMasks>
			<Image
				onClick={maskHandler} 
				src={metaMask}
				alt="metaMask"
				width={50}
				height={50}
				style={{cursor:'pointer'}}
			/>
		</MetaMasks>
	)
}