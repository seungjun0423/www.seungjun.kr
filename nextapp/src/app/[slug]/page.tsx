import React from "react";
import CreatePost from "components/modules/Post/CreatePost";
import ReadPost from "components/modules/Post/ReadPost";
import UpdatePost from "components/modules/Post/UpdatePost";
import DeletePost from "components/modules/Post/DeletePost";

type Post = {
	params: {
		slug: string;
	};
};

export default function Post ({ params: { slug } }: Post ) {
	if (slug === 'createPost') {
		return (
			<CreatePost>
			</CreatePost>);
	} else if ( slug === 'update') {
		return <UpdatePost></UpdatePost>;
	} else if ( slug === 'delete') {
		return <DeletePost></DeletePost>;
	} else return <>{slug}</>
}