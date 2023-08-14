import React from "react";
import CreatePost from "components/services/Post/CreatePost";
import ReadPost from "components/services/Post/ReadPost";
import UpdatePost from "components/services/Post/UpdatePost";
import DeletePost from "components/services/Post/DeletePost";

type Post = {
	params: {
		slug: string;
	};
};

export default function Post( { params: { slug } }: Post ): React.ReactElement {
  return (
    <div>
				Post page {slug}
    </div>
  )
}