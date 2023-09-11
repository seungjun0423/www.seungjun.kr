import React from "react";
import { PostType } from "types/interface";
import PostTitle from "components/modules/Post/PostTitle";
import 'styles/category.module.css';

interface Post  {
	params: {
		slug: number;
	};
};

export default async function Post({ params: { slug } }: Post) {
	const data: PostType[] = await fetch(`${process.env.NEXT_PUBLIC_CORS_URL}/post/categoryPosts/${slug}`,
	{
		method: 'GET',
	})
	.then(res=>res.json());

	const postList = data.filter(el=> Number(el.categoryId) === Number(slug) );

  return (
		<section style={{marginTop:'100px'}}>
			{/* 글목록 */}
			{	postList.map((el, index) => <PostTitle key={index} data={el}/> ) }
		</section>
  )
}