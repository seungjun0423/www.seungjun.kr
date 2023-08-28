import axios from "axios";

axios.defaults.withCredentials = true;
// const sessionState = JSON.parse(`${window.sessionStorage.getItem('state-storage')}`)?.state;
type Input = {
	[key: string]:(input:string, data?:object) => Promise<any>;
}

type Axios = {
	get: Input['get'];
	post: Input['post'];
	delete: Input['delete'];
	patch: Input['patch'];
	put: Input['put'];
}

export const _axios:Axios = {
	get: async (input) => {
		try {
			const req = await axios.get(`${process.env.NEXT_PUBLIC_CORS_URL}${input}`).then((res)=> {return res.data});
			if(req){
				return req
			}
		} catch(err) {
			throw err;
		}
	},
	post: async ( input, data) => {
		try {
			const req = await axios.post(`${process.env.NEXT_PUBLIC_CORS_URL}${input}`,data).then((res)=> {return res.data});
			if(req){
				return req
			}
		} catch(err) {

		}
		return
	},
	delete: async (input) => {
		try {
			const req = await axios.delete(`${process.env.NEXT_PUBLIC_CORS_URL}${input}`).then((res)=> {return res.data});

		} catch(err) {

		}
		return 
	},
	patch: async (input) => {
		try {
			const req = await axios.patch(`${process.env.NEXT_PUBLIC_CORS_URL}${input}`).then((res)=> {return res.data});

		} catch(err) {

		}
		return
	},
	put: async (input) => {
		try {
			const req = await axios.put(`${process.env.NEXT_PUBLIC_CORS_URL}${input}`).then((res)=> {return res.data});

		} catch(err) {

		}
		return 
	},
}