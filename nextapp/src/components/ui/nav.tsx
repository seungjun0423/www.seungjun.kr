'use client';
import React, { useLayoutEffect, useState } from "react";
import Link from "next/link";
import { Route } from "next";
import { useRouter } from "next/navigation";
import { toast } from 'react-toastify';

import Lottie from 'react-lottie-player';
import lottieJson from '../../../public/lottiefiles/darkmode.json';
import { useStore, stateStore } from "../../data/store";
import { NavContainers, NavBoxes, NavBtn, draw, Borad, Div } from '../../styles/NavStyled';

export default  function Nav(){
	const [ navState, setNavState ] = useState<boolean>(false);
	const store = useStore((state: any) => state);
	const localStorage : any = stateStore(state => state);
	const router = useRouter();

	// useLayoutEffect(() => {
	// 	const authCheck = async () => {
	// 		const req: any = await fetch(
	// 			`${process.env.NEXT_PUBLIC_CORS_URL}/auth/validate`,
	// 			{
	// 				method: 'GET',
	// 				credentials: 'include',
	// 			}
	// 		)
	// 		.then(res=>res.json());
	// 		if(req.message === 'auth user'){
	// 			const userId = localStorage.id;
	// 			if(userId){
	// 				store.setStore(userId);
	// 			}
	// 		} else if(req.message === 'Unauthorized'){
	// 			return;
	// 		}
	// 	}
	// 	authCheck();
	// }, []);

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
				router.push('/');
			} else if(req.message !== 'logout success'){
				console.log(req.message);
				const notify = () => toast('비밀번호를 확인해주세요');
				return notify()
			}
		} catch(err){
			throw err;
		}
	}

	const darkModeHandler = () => {
		// setDarkMode(!isDarkMode);
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
					<Link href={`${process.env.NEXT_PUBLIC_REDIRECT}/about` as Route} style={{fontSize:'1.5rem'}}>
						about
					</Link>
					{ store.id ?
						<>
							<Link href={`${process.env.NEXT_PUBLIC_REDIRECT}/post/write` as Route} style={{fontSize:'1.5rem'}}>
								posting
							</Link> 
							<div onClick={logoutHandler} style={{color: '#5e5e5e', cursor:'pointer', fontSize: '1.5rem' }} >
								logout
							</div>
						</>
						:
						<Link href={`${process.env.NEXT_PUBLIC_REDIRECT}/auth` as Route} style={{fontSize:'1.5rem'}}>
							login
						</Link>
					}
				</NavContainers>
				<NavBoxes onClick={()=>{setNavState(!navState)}}>
					<NavBtn>
						&#9776;
					</NavBtn>
					{ navState ? 
						<Borad>
							<Link 
								href={`${process.env.NEXT_PUBLIC_REDIRECT}/about` as Route} 
								style={{ color:'gray',fontSize:'1rem', marginTop:'1rem' }}
							>
								about
							</Link>
							{ store.id ?
								<>
									<Link 
										href={`${process.env.NEXT_PUBLIC_REDIRECT}/post/write` as Route} 
										style={{ color:'gray',fontSize:'1rem', marginTop:'1rem'}}
									>
										posting
									</Link>
									<div onClick={logoutHandler} style={{ color:'gray', cursor:'pointer',fontSize:'1.1rem', marginTop:'1rem', marginBottom: '6px' }}>
										logout
									</div>
								</>
								:
								<Link 
									href={`${process.env.NEXT_PUBLIC_REDIRECT}/auth` as Route} 
									style={{ color:'gray',fontSize:'1rem', marginTop:'1rem', marginBottom: '6px'}}
								>
									login
								</Link>
							}
						</Borad>
						: <></>
					}
				</NavBoxes>
			</Div>
	)
}