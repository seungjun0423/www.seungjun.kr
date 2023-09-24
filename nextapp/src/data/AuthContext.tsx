'use client';

import React, { ReactNode, createContext } from "react";


const initialState = {};
export const Context = createContext(initialState);

export default function AuthContext ({children} : {children: ReactNode}) {
	return (
		<Context.Provider  value={initialState}>
			{children}
		</Context.Provider>
	)
}