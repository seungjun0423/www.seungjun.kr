'use client';

import React from "react";
import styled from "styled-components";
import { authState } from "model/store";
import { MetaMaskSDK } from '@metamask/sdk';
import hexerTs from "util/browser-string-hexer";


const MMSDK = new MetaMaskSDK();
const ethereum = MMSDK.getProvider(); // You can also access via window.ethereum

const Auths = styled.div`
	display: flex;
	font-size: 3rem;
`;

export default function Auth () {
	const { isAdmin, setIsAdmin } = authState();

	/**
	const onClickLogIn = async () => {
    try {
      const accounts = await ethereum?.request({
        method: "eth_requestAccounts",
      });

      setAccount(accounts[0]);

      // 네트워크 스위칭 제안 기능
      if (parseInt(ethereum?.networkVersion) !== MUMBAI_CHAIN_ID) {
        await ethereum?.request({
          method: "wallet_addEthereumChain",
          params: [
            {
              chainName: "Mumbai",
              chainId: web3.utils.numberToHex(MUMBAI_CHAIN_ID),
              nativeCurrency: { name: "MATIC", decimals: 18, symbol: "MATIC" },
              rpcUrls: ["https://rpc-mumbai.maticvigil.com"],
            },
          ],
        });
      }
    } catch (error) {
      console.error(error);
    }
  };
	 */

	console.log("이더리움 연결 체크",ethereum.isConnected());
	const maskHandler = async () => {
		const test = await ethereum.request({  "method": "personal_sign",
		"params": [
			null,
			null
		]});
		console.log(test);
		return test
		try{

		} catch (error) {

		}
	}

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