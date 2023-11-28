import axios from 'axios';
import { BACKEND_ENDPOINT } from './environment';

const axiosInstance = axios.create({
	withCredentials: true, // required to send cookie in UI request header to CSS request
	baseURL: BACKEND_ENDPOINT
});

axiosInstance.interceptors.request.use(
	async (config) => config,
	(error) => Promise.reject(error)
);

export default axiosInstance;
