'use client';

import axios from "axios";
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
		const deleteReq = await axios.delete(`${process.env.NEXT_PUBLIC_CORS_URL}/post/delete/${children.id}`).then(res=>res.data)
		if(deleteReq.id === children.id){
			alert('게시물이 삭제되었습니다')
			window.location.replace(`${process.env.NEXT_PUBLIC_REDIRECT}/`)
		}
	};
	useEffect(()=>{
		const loginSession = window?.sessionStorage.getItem('state-storage');
		const isLogin: boolean = JSON?.parse(loginSession as string).state.isLogin;

		if(isLogin){
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