import React from "react";
import dynamic from "next/dynamic";

export default function Demo(){
	const DynamicMeal = dynamic(()=>import("components/page/Meal"),{ssr: false});

  return (
		<section key='demo'>
			<DynamicMeal/>
		</section>
  )
}