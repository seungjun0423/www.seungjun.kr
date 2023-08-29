import ReadPost from "components/modules/Post/ReadPost";
import React from "react";

interface Post  {
	params: {
		slug: number;
	};
};

export default function Post( { params: { slug } }: Post ): React.ReactElement {
  return (
		<section>
			<ReadPost>
				{slug}
			</ReadPost>
		</section>
  )
}