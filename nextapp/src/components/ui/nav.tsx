'use client';
import React, { useState } from "react";
import { Route } from "next";
import { toast } from 'react-toastify';
import { useRouter } from "next/navigation";

import Lottie from 'react-lottie-player';
import lottieJson from '../../../public/lottiefiles/darkmode.json';
import { useStore, stateStore } from "../../data/store";
import { NavContainers, NavBoxes, NavBtn, Borad, Div, StyledLink } from '../../styles/NavStyled';

export default  function Nav(){
	const [ navState, setNavState ] = useState<boolean>(false);
	const store = useStore((state: any) => state);
	const localStorage : any = stateStore(state => state);
	const router = useRouter();

	const logoutHandler = async () => {
		try{
			const req: any = await fetch(
				`${process.env.NEXT_PUBLIC_CORS_URL}/auth/logout`,
				{
					method: 'POST',
					body: JSON.stringify({id: localStorage.id }),
					headers: { 'Content-Type': 'application/json' },
					credentials: 'include',
					cache:'no-cache',
				}
			)
			.then(res=>res.json());

			if(req.message === 'logout success'){
				store.setStore(null);
				localStorage.setStore(null);
				return toast.success('로그아웃 되었습니다. 👌');
			} else if(req.message !== 'logout success'){
				return toast.error('비밀번호를 확인해주세요');
			}
		} catch(err){
			throw err;
		}
	};

	const darkModeHandler = () => {
		const theme = window.localStorage.getItem('color-mode');
		if(theme === 'dark'){
			window.localStorage.setItem('color-mode','light')
			window.location.reload();

		} else if(theme === 'light') {
			window.localStorage.setItem('color-mode','dark')
			window.location.reload();
		};
	};
	
	return(
			<Div>
				<Lottie 
					onClick={()=>{darkModeHandler()}}
					animationData={lottieJson}
					play={false}
					loop={false}
					style={{ width: 50, height: 50 ,cursor:'pointer', marginRight:'20px'}}
				/>
				<NavContainers>
					<StyledLink href={`${process.env.NEXT_PUBLIC_REDIRECT}about` as Route}>
						about
					</StyledLink>
					{ store.id ?
						<>
							<StyledLink href={`${process.env.NEXT_PUBLIC_REDIRECT}post/write` as Route}>
								posting
							</StyledLink> 
							<StyledLink  href={`${process.env.NEXT_PUBLIC_REDIRECT}` as Route} onClick={logoutHandler} >
								logout
							</StyledLink>
						</>
						:
						<StyledLink href={`${process.env.NEXT_PUBLIC_REDIRECT}auth` as Route}>
							login
						</StyledLink>
					}
				</NavContainers>
				<NavBoxes onClick={()=>{setNavState(!navState)}}>
					<NavBtn>
						&#9776;
					</NavBtn>
					{ navState ? 
						<Borad>
							<StyledLink 
								href={`${process.env.NEXT_PUBLIC_REDIRECT}about` as Route} 
							>
								about
							</StyledLink>
							{ store.id ?
								<>
									<StyledLink 
										href={`${process.env.NEXT_PUBLIC_REDIRECT}post/write` as Route} 
									>
										posting
									</StyledLink>
									<StyledLink href={`${process.env.NEXT_PUBLIC_REDIRECT}` as Route} onClick={logoutHandler}>
										logout
									</StyledLink>
								</>
								:
								<StyledLink 
									href={`${process.env.NEXT_PUBLIC_REDIRECT}auth` as Route} 
								>
									login
								</StyledLink>
							}
						</Borad>
						: <></>
					}
				</NavBoxes>
			</Div>
	)
};