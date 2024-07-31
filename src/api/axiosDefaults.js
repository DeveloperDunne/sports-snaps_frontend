import axios from "axios";

axios.defaults.baseURL = "https://sportssnaps-api-4f584f2a4ad4.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;


export const axiosReq = axios.create();
export const axiosRes = axios.create();