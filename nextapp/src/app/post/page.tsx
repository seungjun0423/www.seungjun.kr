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
				this is post
			</h1>
    </div>
  )
}

