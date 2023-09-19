import React from "react";
import { PostType } from "types/interface";
import PostTitle from "components/modules/Post/PostTitle";
import styles from 'styles/category.module.css';

interface Props  {
	params: {
		slug: number;
	};
};

const getPostData = async (slug: number ) => {
	const categoryPostData: PostType[] = await fetch(`${process.env.NEXT_PUBLIC_CORS_URL}/post/categoryPosts/${slug}`,
		{
			method: 'GET',
			// cache: 'no-store'
			next: { revalidate: 3600 }
		})
	.then(res=>res.json());
	return categoryPostData;
}

export default async function Category({ params: { slug } }: Props) {
	const categoryPostData: PostType[] = await getPostData(slug);

	const postList = categoryPostData.filter(el=> Number(el.categoryId) === Number(slug) );
	
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
};

export const generateStaticParams = async (): Promise<{ id: string }[]> => {
	const categoryData = await fetch(`${process.env.NEXT_PUBLIC_CORS_URL}/category/all`,
		{
			method: 'GET',
			// cache: 'no-store'
		})
	.then(res=>res.json());

	return categoryData.map((post: any) =>({
		slug: `${post.id}`
	}));
};