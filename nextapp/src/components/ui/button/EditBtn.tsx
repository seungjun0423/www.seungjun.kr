'use client';

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Route } from "next";
import { PostType } from "types/interface";
import { stateStore } from "data/store";

export default function EditBtn ({ children }: {children: PostType}) {
	const [btn, setBtn] = useState<React.ReactElement>(<></>);

	useEffect(()=>{
		const tokenState = stateStore.getState();


		if(tokenState.id){
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