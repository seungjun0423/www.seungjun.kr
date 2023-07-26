'use client';

type Params = {
	params: {
		slug: string;
	};
};

export default function Study( { params }: Params ) {
  return (
    <div>
			{params.slug} this is study
    </div>
  )
}

export function generateStaticParams() {
	const category = ['html', 'css', 'javaScript', 'react', 'next.js', 'nest.js', 'algorithm'];
	return category.map( (el) => ({ slug: el,}));
}
