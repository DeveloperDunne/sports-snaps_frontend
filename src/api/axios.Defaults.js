import axios from "axios";

axios.defaults.baseURL = "https://sportssnaps-37b7ee6411c9.herokuapp.com";
axios.defaults.headers.post["Content-type"] = "multipart/form-data";
axios.defaults.withCredentials = true;
