'use client'

import React, { createContext, useEffect } from "react";
import { stateStore } from "data/store";

const initialState = {};
export const MyContext = createContext(initialState);

export default function Context({children}: any) {
	return (
		// <MyContext.Provider value={initialState}>
		<>
			{children}
		</>
		// </MyContext.Provider>
	)
}