// object type 은 interface를 통해 관리한다.

export interface Submit {
	type: string;
	email: string;
	password: string;
	path: string;
}

export interface PostType {
	id: number;
	title: string;
	img: string;
	contents: string;
	fold: boolean;
};