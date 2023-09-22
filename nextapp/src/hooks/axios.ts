import axios from "axios";

axios.defaults.withCredentials = true;
type Input = {
	[key: string]:(path:string, data?:object) => Promise<any>;
}

type Axios = {
	get: Input['get'];
	post: Input['post'];
	delete: Input['delete'];
	patch: Input['patch'];
	put: Input['put'];
}

/** _axios( path: string, data?: object): path 입력시 '/' 를 꼭 붙여야 한다 */
export const _axios:Axios = {
	get: async (path) => {
		try {	
			const req = await axios.get(`${process.env.NEXT_PUBLIC_CORS_URL}${path}`).then((res)=> {return res.data});
			if(req){
				return req
			}
		} catch(err) {
			throw err;
		}
	},
	post: async (path, data) => {
		try {
			const req = await axios.post(
				`${process.env.NEXT_PUBLIC_CORS_URL}${path}`,
				data,
				{withCredentials: true}, 
				).then((res)=> {return res.data});
			if(req){
				return req
			}
		} catch(err) {

		}
		return
	},
	delete: async (path, data) => {
		try {
			const req = await axios.delete(`${process.env.NEXT_PUBLIC_CORS_URL}${path}`).then((res)=> {return res.data});

		} catch(err) {

		}
		return 
	},
	patch: async (path) => {
		try {
			const req = await axios.patch(`${process.env.NEXT_PUBLIC_CORS_URL}${path}`).then((res)=> {return res.data});

		} catch(err) {

		}
		return
	},
	put: async (path, data) => {
		try {
			const req = await axios.put(`${process.env.NEXT_PUBLIC_CORS_URL}${path}`).then((res)=> {return res.data});

		} catch(err) {

		}
		return 
	},
}