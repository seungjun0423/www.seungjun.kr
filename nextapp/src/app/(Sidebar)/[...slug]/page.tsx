import React from "react";
import { SidebarDummy } from "data/dummy";

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

export async function generateStaticParams() {
  const categories = SidebarDummy;

  return categories.map((category) => ({ 
		params: { 
			slug: category.title 
		} 
	}))
};
