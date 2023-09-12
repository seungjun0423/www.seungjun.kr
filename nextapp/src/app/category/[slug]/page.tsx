import React from "react";
import { PostType } from "types/interface";
import PostTitle from "components/modules/Post/PostTitle";
import styles from 'styles/category.module.css';

interface Post  {
	params: {
		slug: number;
	};
};

export default async function Post({ params: { slug } }: Post) {
	const data: PostType[] = await fetch(`${process.env.NEXT_PUBLIC_CORS_URL}/post/categoryPosts/${slug}`,
	{
		method: 'GET',
		cache: 'no-store',
	})
	.then(res=>res.json());

	const postList = data.filter(el=> Number(el.categoryId) === Number(slug) );
	
	if(postList.length !== 0){
		return (
			<section className={styles.categoryPage}>
				<div className={styles.head}>글 목록</div>
				{	postList.map((el, index) => {
					return (
						// eslint-disable-next-line react/jsx-key
						<div className={styles.wrapper}>
							<PostTitle key={index} data={el}/>
						</div>
					)
				})}
			</section>
		)
	} else if (postList.length === 0){
		return (
			<section className={styles.categoryPage}>
				<div className={styles.head}>현재 등록된 게시물이 없습니다.</div>
			</section>
		);
	}
}