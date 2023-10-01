'use client';

import { stateStore } from "data/store";
import React, { useLayoutEffect, useState } from "react";
import styled from "styled-components";
import { PostType } from "types/interface";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function DeleteBtn ({ children }: {children: PostType}) {
	const [btn, setBtn] = useState<React.ReactElement>(<></>);
	const router = useRouter();
	const localStorage: any = stateStore(state=>state);

	const deleteHandler = async () => {
		const req: any = await fetch(
			`${process.env.NEXT_PUBLIC_CORS_URL}/post/delete/${children.id}`,
			{
				method: 'DELETE',
				headers: { 'Content-Type': 'application/json' },
				credentials: 'include',
				cache:'no-store',
			}
		)
		.then(res=>res.json());

		if(req.id === children.id){
			router.push('/');
			return toast.success('게시물이 삭제되었습니다. 👌');
		}
	};

	useLayoutEffect(()=>{
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
};

const DeleteBtns = styled.button`
	font-size: 1.2rem;
	background-color: transparent;
	border: none;
	cursor: pointer;
`;