import axios from "axios";

export const fetchWeatherData = async (url: string) => {
  try {
    const response = await axios.get(url);
    const data = response.data;
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
