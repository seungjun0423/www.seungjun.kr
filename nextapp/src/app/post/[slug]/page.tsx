import React from "react";
import dynamic from "next/dynamic";
import ReadPost from "components/modules/Post/ReadPost";

interface Post  {
	params: {
		slug: number;
	};
};

export default function Post({ params: { slug } }: Post) {
	const DynamicReadPost = dynamic(()=>import('components/modules/Post/ReadPost'),{ssr: false});

  return (
		<section>
			<DynamicReadPost>
				{slug}
			</DynamicReadPost>
		</section>
  )
}