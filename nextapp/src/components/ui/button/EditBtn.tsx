'use client';

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Route } from "next";
import { PostType } from "types/interface";

export default function EditBtn ({ children }: {children: PostType}) {
	const [btn, setBtn] = useState<React.ReactElement>(<></>);

	useEffect(()=>{
		const loginSession = window?.sessionStorage.getItem('state-storage');
		const isLogin: boolean = JSON?.parse(loginSession as string).state.isLogin;

		if(isLogin){
			const goEdit = (
				<Link 
					href={`${process.env.NEXT_PUBLIC_REDIRECT}/post/${children.id}/edit` as Route}
					style={{fontSize:'1.2rem'}}
				>
					Edit
				</Link>
			);
			setBtn(goEdit);
		}
	}, [])

	return(
		<>
		{btn}
		</>
	)
}