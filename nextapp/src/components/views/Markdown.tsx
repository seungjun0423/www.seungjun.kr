'use client';

import React, { ReactNode } from "react";
import styled from "styled-components";
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';

interface MarkdownParams {
	children: ReactNode;
	contents: string;
};

export default function Markdown ({contents}: MarkdownParams ): React.ReactElement {
	return (<Editor height="600px" initialEditType='markdown' previewStyle="tab"></Editor>);
};

