import { apiendpoint } from "../config.json";
import httpService from "./httpService";
import { toast } from "react-toastify";

export async function createTender(formData) {
  for (var pair of formData.entries()) {
    console.log(pair[0] + ", " + pair[1]);
  }
  try {
    const { data } = await httpService.post(
      `${apiendpoint}/customer/createTender`,
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

export async function cancelTender(id) {
  try {
    const { data } = await httpService.post(
      `${apiendpoint}/customer/cancelTender`,
      {
        tenderId: id,
      }
    );
    toast.success(data.message);
    if (!data.message) toast.success(data);
    return { data };
  } catch (error) {
    if (error.response) toast.error(error.response.data);
    return { error };
  }
}