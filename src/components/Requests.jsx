import axios from "axios";

export default async function RequestCofee() {
  const API_URL = "https://6926e66426e7e41498fc0afa.mockapi.io/coffees";

  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Помилка при отриманні даних:", error.message);
    return [];
  }
}
