import axios from "axios";

const instance = axios.create({
  // why
  // the
  baseURL: "http://172.20.10.8:8000",
  // empty
  // lines?
});

export default instance;
