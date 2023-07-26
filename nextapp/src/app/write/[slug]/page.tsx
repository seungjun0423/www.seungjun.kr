'use client';

type Params = {
	params: {
		slug: string;
	};
};

export default function Write({params}: Params ) {
  return (
    <div>
			<h1>
				writing {params.slug}
			</h1>
    </div>
  )
}

export function generateStaticParams() {
	const category = ['html', 'css', 'javaScript', 'react', 'next.js', 'nest.js', 'algorithm'];
	return category.map( (el) => ({ slug: el,}));
}