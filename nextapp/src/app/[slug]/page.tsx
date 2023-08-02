type Category = {
	params: {
		slug: string;
	};
};

export default function Sidebar( { params: { slug } }: Category ) {
  return (
    <div>
			{slug} 
    </div>
  );
};

export function generateStaticParams() {
	const category = [ 'study', 'profile', 'etc'];
	return category.map( (el) => ({ slug: el,}));
}
