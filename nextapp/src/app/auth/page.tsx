'use client';

import React, { useRef, useState } from "react";
import styled from "styled-components";
import { useStore, stateStore } from "data/store";


import { toast } from 'react-toastify';
import SubmitBtn from "components/ui/button/SubmitBtn";
import { Submit } from "types/interface";
import { useRouter } from "next/navigation";

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
	&::placeholder{
		color: #b8b8b8;
	}
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
	const store : any = useStore(state=>state);
	const localStorage : any = stateStore(state=>state);
	const router = useRouter();

	function onChangeId(val: string) {
		setId(val);
	}

	const onChangePw = (val: string) => {
		setPassword(val);
	}

	const signUpHandler = () => {
		const notify = () => toast("현재는 운영자만 사용 가능합니다.");
		return notify();
	}

	const submitHandler = async ({type, email, password}: Partial<Submit>): Promise<void | unknown> => {
		try{
			if(type === 'login'){
				if(!email && !password){
					const notify = () => toast('아이디와 비밀번호를 입력해주세요');
					return notify()
				} else if(!email){
					const notify = () => toast('아이디를 입력해주세요');
					return notify()
				} else if(!password){
					const notify = () => toast('비밀번호를 입력해주세요');
					return notify()
				};
				
				const req: any = await fetch(
					`${process.env.NEXT_PUBLIC_CORS_URL}/auth/login`,
					{
						method: 'POST',
						body: JSON.stringify({ email:email, password: password}),
						headers: { 'Content-Type': 'application/json' },
						credentials: 'include',
						cache:'no-cache',
					}
				)
				.then(res=>res.json());

				if(req.message === 'login success'){
					store.setStore(req.id);
					localStorage.setStore(req.id);
					router.push('/');
					const notify = () => toast('로그인 성공');
					return notify();
				} else if(req.message === 'user not founded'){
					const notify = () => toast('아이디를 확인해주세요');
					return notify();
				} else if(req.message === 'wrong password'){
					const notify = () => toast('비밀번호를 확인해주세요');
					return notify();
				}
			}
		} catch(err) {
			const notify = () => toast('로그인 과정에서 에러가 발생했습니다.');
			return notify();
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