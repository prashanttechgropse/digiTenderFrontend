import { apiendpoint } from "../config.json";
import httpService from "./httpService";
import { toast } from "react-toastify";

export async function setUpProfileService(formData) {
  await httpService.post(`${apiendpoint}/setUpProfile`, formData);
}

export async function authentication(formData) {
  try {
    const { data, headers } = await httpService.post(`${apiendpoint}/login`, {
      email: formData.email,
      password: formData.password,
    });
    localStorage.setItem("token", headers["x-auth-token"]);
    toast.success(data.message);
    if (!data.message) toast.success(data);
    return data.stake;
  } catch (ex) {
    if (ex.response) toast.error(ex.response.data);
  }
}

export async function createAccount(formData) {
  try {
    await httpService.post(`${apiendpoint}/register`, formData);
    await httpService.post(`${apiendpoint}/otpGeneration`, {
      email: formData.email,
    });
  } catch (ex) {
    if (ex.response) toast.error(ex.response.data);
  }
}

export async function otpVerification(formData, email) {
  try {
    const { headers } = await httpService.post(
      `${apiendpoint}/otpVerification`,
      {
        email: email,
        otp: formData.otp,
      }
    );
    console.log(headers);
    return localStorage.setItem("token", headers["x-auth-token"]);
  } catch (ex) {
    if (ex.response) toast.error(ex.response.data);
  }
}
