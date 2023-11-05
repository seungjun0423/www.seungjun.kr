// object type 이외는 tpye alias를 통해 관리한다.

export type CategoryData = {
	id: number; 
	title: string; 
	createdAt: string;
	updatedAt: string;
}

export type Trepo = {
	name: string;
	private: boolean;
	githubUrl: string;
	description: string | null;
	createdAt: string | null | undefined;
	updatedAt: string | null | undefined;
	hompage: string | null | undefined;
	langauge: string | any;
};