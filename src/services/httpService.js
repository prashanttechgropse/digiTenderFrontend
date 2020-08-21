import axios from "axios";
import { toast } from "react-toastify";
const successCallBack = (success) => {
  console.log(success);
  toast.success(success.data.message);
};

const errorCallBack = (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;
  if (!expectedError) {
    console.log("logging the error", error);
    toast.error("an unexpected error occured");
  }
  return Promise.reject(error);
};

//intercept errors while communicating with backend server
axios.interceptors.response.use(successCallBack, errorCallBack);

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
