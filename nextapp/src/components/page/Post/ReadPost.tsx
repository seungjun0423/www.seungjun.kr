import React from "react";
import styles from 'styles/readPost.module.css';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import HTMLReactParser from "html-react-parser";
import 'styles/prism.css';
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import EditBtn from "components/ui/button/EditBtn";
import DeleteBtn from "components/ui/button/DeleteBtn";

export default function ReadPost({ children }: {children: any}) {

	return (
		<div id="viewer" className={styles.postViewer}>
			<div className={styles.title}>
				{children?.title}
				<div className={styles.btnBox}>
					<EditBtn>
						{children}
					</EditBtn>
					<DeleteBtn>
						{children}
					</DeleteBtn>
				</div>
			</div> 
			<div className="toastui-editor-contents">
				<span className={styles.post} style={{fontSize: '16px', fontFamily:'initial'}}>
					{ HTMLReactParser(children?.contents)}
				</span>
			</div>
		</div>
	)
}