import React from "react";
import CreatePost from "components/services/Post/CreatePost";
import ReadPost from "components/services/Post/ReadPost";
import UpdatePost from "components/services/Post/UpdatePost";
import DeletePost from "components/services/Post/DeletePost";
import Postviewer from "components/lib/PostViewer";

type Post = {
	params: {
		slug: string;
	};
};

export default function Post( { params: { slug } }: Post ): React.ReactElement {
	if (slug === 'create') {
		return <CreatePost contents={slug}></CreatePost>;
	} else if ( slug === 'read'){
		return <ReadPost></ReadPost>;
	} else if ( slug === 'update') {
		return <UpdatePost></UpdatePost>;
	} else if ( slug === 'delete') {
		return <DeletePost></DeletePost>;
	}

  return (
    <div>
			Post page {slug}
    </div>
  )
}