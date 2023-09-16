import React from "react";
import styles from 'styles/readPost.module.css';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import { PostType } from "types/interface";
import HTMLReactParser from "html-react-parser";
import 'styles/prism.css';
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import EditBtn from "components/ui/button/EditBtn";

export default function ReadPost({ children }: {children: PostType}) {

	return (
		<div id="viewer" className={styles.postViewer}>
			<div className={styles.title}>
				{children?.title}
				{/* { isLogin ?
					<Link 
						href={`${process.env.NEXT_PUBLIC_REDIRECT}/post/${postData.id}/edit` as Route}
						style={{fontSize:'1.2rem'}}
					>
						Edit
					</Link>
					: 
					<></>
				} */}
				<EditBtn>
					{children}
				</EditBtn>
			</div> 
			<div className="toastui-editor-contents">
				<span style={{fontSize: '16px', fontFamily:'initial'}}>
					{ HTMLReactParser(children?.contents)}
				</span>
			</div>
		</div>
	)
}