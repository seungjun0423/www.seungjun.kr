'use client'

import React from "react";
import styled from "styled-components";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import Header from './Header';
import Sidebar from "./Sidebar";
import Content from "components/layouts/Content";
import Footer from './Footer';


// Create a client
const queryClient = new QueryClient();

const Mains = styled.main`
	width: 100%;
	height: 100%;
	display: flex;
`;

export default function Main ({ Children }: { Children: React.ReactNode }): React.ReactElement {
	return (
		<>
		<QueryClientProvider client={queryClient}>
			<Header/>
			<Mains>
				<Sidebar />
				<Content Children={Children}/>
			</Mains>
			<Footer/>
    </QueryClientProvider>
		</>
	);
};