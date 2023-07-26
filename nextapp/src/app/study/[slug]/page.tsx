'use client';

type Props = {
	params: {
		slug: string;
	};
};

export default function Post( { params }: Props ) {
  return (
    <div>
			<h1>
				{params.slug}this is study
			</h1>
    </div>
  )
}

export function generateStaticParams() {
	const category = ['html', 'css', 'javaScript', 'react', 'next.js', 'nest.js', 'algorithm'];
	return category.map( (el) => ({ slug: el,}));
}
