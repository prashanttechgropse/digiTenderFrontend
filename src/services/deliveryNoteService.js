import { apiendpoint } from "../config.json";
import httpService from "./httpService";
import { toast } from "react-toastify";

export async function createDeliveryNote(formData, tenderId) {
  try {
    const { data } = await httpService.post(
      `${apiendpoint}/customer/createDeliveryNote/${tenderId}`,
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
