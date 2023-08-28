'use client';

import React, { useRef, useState } from "react";
import styled from "styled-components";
import { stateStore } from "data/store";

import SubmitBtn from "components/ui/button/SubmitBtn";
import axios from "axios";
import { Submit } from "types/interface";

// import { MetaMaskSDK } from '@metamask/sdk';

/** 메세지를 16진수 암호화 하는 라이브러리 */
// import hexerTs from "util/browser-string-hexer";


// const MMSDK = new MetaMaskSDK();
// const ethereum = MMSDK.getProvider(); // You can also access via window.ethereum

const Auths = styled.div`
	width: 100%;
	height: 50%;
	min-height: 500px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const H = styled.h1`
	font-size: 2rem;
`;

const InputBox = styled.div`
	width: fit-content;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 2rem 0 2rem 0;
	gap: 1.5rem;
`;

const Div = styled.div`
	display: flex;
	flex-direction: column;
`;

const Label = styled.label`
	font-weight:bold;
	font-size: 1.5rem;
`;

const Input = styled.input`
	width: 18rem;
	height: 4rem;
	max-height: 50px;
	background-color: transparent;
	padding-left: 1rem;
	border-radius: 5px;
`;


export default function Auth () {
	const [ id, setId ] = useState<string>('');
	const [ password, setPassword ] = useState<string>('');
	const focusId = useRef<HTMLInputElement>(null);
	const focusPw = useRef<HTMLInputElement>(null);

	function onChangeId(val: string) {
		setId(val);
	}

	const onChangePw = (val: string) => {
		setPassword(val);
	}

	// console.log("되나?",hexerTs(`메시지`));

	// const maskHandler = async () => {
		/** 메타마스크 사인 */
		// const test = await ethereum.request({  method: "personal_sign",
		// 	params: [
		// 	'0xeba994ec8b9ceca780',
		// 	'0xb135b3e1433d77aac92977f30a4e6db43dc89c66'
		// ]});

		/** 지갑 연결 확인 */
		// const test = await ethereum.isConnected();
		/** 지갑 주소 가져오기 */
		// const test = await ethereum.request({  method: "eth_requestAccounts",});
		// const test = await ethereum.request({ method: 'wallet_getSnaps' });
		// console.log(test);
		// return test
		// try{

		// } catch (error) {

		// }
	// }
	/**
	private-key: 13d745c6ff62d0b5ca142e3065310d63c26e68a2d2dd55bde1e1be57997768ea
	*/

	const submitHandler = async ({type, email, password}: Partial<Submit>): Promise<void | unknown> => {
		
		try{
			if(type === 'login'){
				if(!email && !password){
					return alert('아이디와 비밀번호를 입력해주세요');
				} else if(!email){
					return alert('아이디를 입력해주세요');
				} else if(!password){
					return alert('비밀번호를 입력해주세요');
				} else if(email && password) {
					const req = await axios.post(
						`${process.env.NEXT_PUBLIC_CORS_URL}/auth/login`
						,{ email:email, password: password}
						,{withCredentials: true});

					if(req.data.message === 'login success'){
						stateStore.setState({isLogin: true},true);
						window.location.replace(`${process.env.NEXT_PUBLIC_REDIRECT}`);
					}
				}
			}
		} catch(err) {
			throw err;
		}
	};

	const enterHandler = ( type: string, e: React.KeyboardEvent ): void | Promise<any> => {
		if(e.key !== 'Enter'){
			return;
		} else if(e.key === 'Enter'){
			if(type === 'email'){
				focusPw.current?.focus();
				return;
			} else if(type === 'password') {
				return submitHandler({type:'login', 'email': id,'password': password});
			}
		}
	}
	
	return(
		<Auths>
			<H>
				LOGIN
			</H>
			<InputBox>
				<Div>
					<Label>ID</Label>
					<Input 
						id='id' 
						type="email" 
						placeholder="email" 
						ref={focusId}
						onChange={(e)=>onChangeId(e.target.value)} 
						onKeyPress={(e)=>{enterHandler('email',e)}} 
						required
					/>
				</Div>
				<Div>
					<Label>PW</Label>
					<Input 
						id='password' 
						type="password"
						ref={focusPw} 
						onChange={(e)=>onChangePw(e.target.value)} 
						onKeyPress={(e)=>{enterHandler('password',e)}} 
						required
					/>
				</Div>
			</InputBox>
			<SubmitBtn 
				handler={()=>{submitHandler({type:'login', email: id, password: password})}}
			/>
		</Auths>
	)
}