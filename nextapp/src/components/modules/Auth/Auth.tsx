'use client';

import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { stateStore } from "data/store";

import SubmitBtn from "components/ui/button/SubmitBtn";
import { _axios } from "hooks/axios";
import { Submit } from "types/interface";

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
	opacity:0.5;
`;

const Wrapper = styled.div`
`;

const SignUp = styled.button`
	font-size: 0.8rem;
	opacity: 0.5;
	border: none;
	background-color: transparent;
	cursor: pointer;
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

	const signUpHandler = () => {
		alert('현재는 운영자만 사용 가능합니다.')
	}

	const submitHandler = async ({type, email, password}: Partial<Submit>): Promise<void | unknown> => {
		
		try{
			if(type === 'login'){
				if(!email && !password){
					return alert('아이디와 비밀번호를 입력해주세요');
				} else if(!email){
					return alert('아이디를 입력해주세요');
				} else if(!password){
					return alert('비밀번호를 입력해주세요');
				}
				
				const req: {id: number, message: string, accessToken: string, refreshToken: string} = await _axios.post(
					`/auth/login`
					,{ email:email, password: password}
				);

				if(req.message === 'login success'){
					stateStore.setState({ id: req.id,accessToken: req.accessToken, refreshToken: req.refreshToken},true);
					window.location.replace(`${process.env.NEXT_PUBLIC_REDIRECT}`);
				}
			}
		} catch(err) {
			alert('비밀번호를 확인해주세요');
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
						placeholder="password" 
						ref={focusPw} 
						onChange={(e)=>onChangePw(e.target.value)} 
						onKeyPress={(e)=>{enterHandler('password',e)}} 
						required
					/>
				</Div>
			</InputBox>
			<Wrapper>
				<SignUp onClick={signUpHandler}>
					sign up
				</SignUp>
			</Wrapper>
			<SubmitBtn 
				handler={()=>{submitHandler({type:'login', email: id, password: password})}}
			/>
		</Auths>
	)
}