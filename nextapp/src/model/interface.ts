// object type 은 interface를 통해 관리한다.

export interface Category {
	id: number;
	title: string;
	priority: number;
	post: string[];
	spread: boolean;
}