import axios from "axios";

const instance = axios.create({


  baseURL: "http://localhost:8015",

});

export default instance;
