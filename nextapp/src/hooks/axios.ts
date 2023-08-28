import axios from "axios";

axios.defaults.withCredentials = true;

const sessionState = JSON.parse(`${window.sessionStorage.getItem('state-storage')}`)?.state;

export const _axios = {
	get: async (input: string) => {
		return await axios.get(`${process.env.NEXT_PUBLIC_CORS_URL}${input}`).then((res)=>{return res.data});
	}
}