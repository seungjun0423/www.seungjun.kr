'use client';

import { stateStore } from "data/store";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { PostType } from "types/interface";

const DeleteBtns = styled.button`
	font-size: 1.2rem;
	background-color: transparent;
	border: none;
	cursor: pointer;
`;
export default function DeleteBtn ({ children }: {children: PostType}) {
	const [btn, setBtn] = useState<React.ReactElement>(<></>);

	const deleteHandler = async () => {
		const req: any = await fetch(
			`${process.env.NEXT_PUBLIC_CORS_URL}/post/delete/${children.id}`,
			{
				method: 'DELETE',
				headers: { 'Content-Type': 'application/json' },
				credentials: 'include',
				cache:'no-cache',
			}
		)
		.then(res=>res.json());

		if(req.id === children.id){
			alert('게시물이 삭제되었습니다')
			window.location.replace(`${process.env.NEXT_PUBLIC_REDIRECT}/`)
		}
	};
	useEffect(()=>{
		const localStorage = stateStore.getState();


		if(localStorage.id){
			const goDelete = (
				<DeleteBtns onClick={()=>deleteHandler()}>
					Delete
				</DeleteBtns>
			);
			setBtn(goDelete);
		}
	}, [])

	return(
		<>
		{btn}
		</>
	)
}