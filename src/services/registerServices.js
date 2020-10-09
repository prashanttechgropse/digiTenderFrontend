import { apiendpoint } from "../config.json";
import httpService from "./httpService";
import { toast } from "react-toastify";
import ForgotPassword from "../macroComponents/forgotPasswordForm";
import ResetPassword from "../macroComponents/resetPassword";

export async function createAccount(formData) {
  try {
    await httpService.post(`${apiendpoint}/register`, formData);
    const { data } = await httpService.post(`${apiendpoint}/otpGeneration`, {
      email: formData.email,
    });
    toast.success(data.message);
    if (!data.message) toast.success(data);
    return { data };
  } catch (error) {
    if (error.response) toast.error(error.response.data);
    return { error };
  }
}

export async function createAccountSecondaryUser(formData) {
  try {
    await httpService.post(`${apiendpoint}/registerSecondaryUser`, formData);
    const { data } = await httpService.post(`${apiendpoint}/otpGeneration`, {
      email: formData.email,
    });
    toast.success(data.message);
    if (!data.message) toast.success(data);
    return { data };
  } catch (error) {
    if (error.response) toast.error(error.response.data);
    return { error };
  }
}

export async function setUpProfileService(formData) {
  try {
    const { data } = await httpService.post(
      `${apiendpoint}/setUpProfile`,
      formData
    );
    toast.success(data.message);
    if (!data.message) toast.success(data);
    return { data };
  } catch (error) {
    if (error.response) toast.error(error.response.data);
    return { error };
  }
}

export async function setUpSecondarUserProfileService(formData) {
  try {
    const { data } = await httpService.post(
      `${apiendpoint}/setUpSecondaryUserProfile`,
      formData
    );
    toast.success(data.message);
    if (!data.message) toast.success(data);
    return { data };
  } catch (error) {
    if (error.response) toast.error(error.response.data);
    return { error };
  }
}

export async function uploadBankDetails(formData) {
  try {
    const { data } = await httpService.post(
      `${apiendpoint}/addBankDetails`,
      formData
    );
    toast.success(data.message);
    if (!data.message) toast.success(data);
    return { data };
  } catch (error) {
    if (error.response) toast.error(error.response.data);
    return { error };
  }
}

export async function authentication(formData) {
  try {
    const { data, headers } = await httpService.post(`${apiendpoint}/login`, {
      email: formData.email,
      password: formData.password,
    });
    await localStorage.removeItem("token");
    await localStorage.setItem("token", headers["x-auth-token"]);

    if (!data.message) toast.success(data);
    return { data };
  } catch (error) {
    if (error.response) toast.error(error.response.data);
    return { error };
  }
}

export async function otpVerification(formData, email) {
  try {
    const { data, headers } = await httpService.post(
      `${apiendpoint}/otpVerification`,
      {
        email: email,
        otp: formData.otp,
      }
    );
    if (data) {
      await window.localStorage.removeItem("token");
      await window.localStorage.setItem("token", headers["x-auth-token"]);
      toast.success(data.message);
      if (!data.message) toast.success(data);
      return { data };
    }
  } catch (error) {
    if (error.response) toast.error(error.response.data);
    return { error };
  }
}

export async function otpGeneration(email) {
  try {
    const { data } = await httpService.post(`${apiendpoint}/otpGeneration`, {
      email: email,
    });
    toast.success(data.message);
    if (!data.message) toast.success(data);
    return { data };
  } catch (error) {
    if (error.response) toast.error(error.response.data);
    return { error };
  }
}

export async function resetPassword(formData) {
  try {
    const { data } = await httpService.post(
      `${apiendpoint}/resetPassword`,
      formData
    );
    toast.success(data.message);
    if (!data.message) toast.success(data);
    return { data };
  } catch (error) {
    if (error.response) toast.error(error.response.data);
    return { error };
  }
}

export async function changePassword(formData) {
  try {
    const { data } = await httpService.post(
      `${apiendpoint}/changePassword`,
      formData
    );
    toast.success(data.message);
    if (!data.message) toast.success(data);
    return { data };
  } catch (error) {
    if (error.response) toast.error(error.response.data);
    return { error };
  }
}

export async function adminAuthentication(formData) {
  try {
    const { data, headers } = await httpService.post(
      `${apiendpoint}/admin/login`,
      {
        email: formData.email,
        password: formData.password,
      }
    );
    await localStorage.removeItem("token");
    await localStorage.setItem("token", headers["x-auth-token"]);

    if (!data.message) toast.success(data);
    return { data };
  } catch (error) {
    if (error.response) toast.error(error.response.data);
    return { error };
  }
}
