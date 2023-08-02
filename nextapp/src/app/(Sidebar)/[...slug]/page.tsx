type Category = {
	params: {
		slug: string;
	};
};

export default function Category( { params: { slug } }: Category ) {
  return (
    <div>
			{slug} 
    </div>
  );
};

// export function generateStaticParams() {
// 	const category = [ 'Ediy', 'study', 'profile', 'etc'];
// 	return category.map( (el) => ({ slug: el,}));
// }
