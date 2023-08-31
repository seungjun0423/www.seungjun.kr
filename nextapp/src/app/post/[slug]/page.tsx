import React from "react";
import dynamic from "next/dynamic";

interface Post  {
	params: {
		slug: number;
	};
};

export default function Post({ params: { slug } }: Post) {
	const DynamicReadPost = dynamic(()=>import('components/modules/Post/ReadPost'));

  return (
		<section>
			<DynamicReadPost>
				{slug}
			</DynamicReadPost>
		</section>
  )
}