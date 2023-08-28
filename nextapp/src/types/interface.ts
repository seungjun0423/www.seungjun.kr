// object type 은 interface를 통해 관리한다.

export interface Submit {
	type: string;
	email: string;
	password: string;
	path: string;
}