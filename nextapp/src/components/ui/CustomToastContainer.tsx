'use client';

import React from "react";
import { ToastContainer } from "react-toastify";

export default function CustomToastContainer () {
	return (
		<ToastContainer 
		position='top-center'
		hideProgressBar={false}
		rtl={false}
		theme='dark'
		limit={1}
		pauseOnHover={false}
	/>
	)
}