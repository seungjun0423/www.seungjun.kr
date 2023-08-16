import React from "react";

interface Post  {
	params: {
		slug: string;
	};
};

export default function Post( { params: { slug } }: Post ): React.ReactElement {
  return (
		<section>
			base post
		</section>
  )
}