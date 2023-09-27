'use client';

import React from "react";
import { ToastContainer } from "react-toastify";
import { styled } from "styled-components";
import 'react-toastify/dist/ReactToastify.css';

const CustomAlerts = styled.div`
	font-family: inherit !important;
`;
export default function CustomAlert () {
	return (
		<CustomAlerts>
			<ToastContainer 
				position='top-center'
				hideProgressBar={true}
				rtl={false}
				theme='light'
				limit={1}
				pauseOnHover={false}
			/>
		</CustomAlerts>
	)
}