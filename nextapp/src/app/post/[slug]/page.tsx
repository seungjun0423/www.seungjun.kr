import React from "react";
import ReadPost from "components/modules/Post/ReadPost";

interface Post  {
	params: {
		slug: number;
	};
};

export default function Post({ params: { slug } }: Post) {

  return (
		<section>
			<ReadPost>
				{slug}
			</ReadPost>
		</section>
  )
}