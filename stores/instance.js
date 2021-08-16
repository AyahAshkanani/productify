import axios from "axios";
// CHECKME: Revert to localhost
const instance = axios.create({ baseURL: "http://192.168.8.106:8010" });

export default instance;
