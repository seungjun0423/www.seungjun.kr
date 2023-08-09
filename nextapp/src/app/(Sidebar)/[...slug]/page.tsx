import React from "react";

type Category = {
	params: {
		slug: string;
	};
};

export default function Category( { params: { slug } }: Category ): React.ReactElement {
  return (
    <div>
			{slug} 
    </div>
  );
};

// export function generateStaticParams() {
// 	const category = [ 'Edit', 'study', 'profile', 'etc'];
// 	return category.map( (el) => ({ slug: el,}));
// }
