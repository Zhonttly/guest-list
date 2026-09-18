import axios from "axios";
import { API } from "../constant";

/**
 *
 * @returns Fetch ALL guests from the API
 */
export async function getGuests() {
  try {
    const { data } = await axios.get(API);
    return data.data;
  } catch (err) {
    console.error(err);
    return [];
  }
}

/**
 * Fetch a single guest from the API
 */
export async function getGuest(id) {
  try {
    const { data } = await axios.get(API + "/" + id);
    return data.data;
  } catch (err) {
    console.error(err);
    return null;
  }
}
