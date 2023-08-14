import React from "react";

type Post = {
	params: {
		slug: string;
	};
};

export default function Post( { params: { slug } }: Post ): React.ReactElement {
  return (
    <div>
			before slug
    </div>
  )
}