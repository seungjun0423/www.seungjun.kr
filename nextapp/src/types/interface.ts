// object type 은 interface를 통해 관리한다.

export interface Submit {
	type: string;
	email: string;
	password: string;
	path: string;
}

export interface PostType {
	map(arg0: (post: any) => { slug: any; }): unknown;
	id: number;
	title: string;
	desc: string;
	contents: string;
	categoryId:number;
	createdAt: string;
	updatedAt: string;
};