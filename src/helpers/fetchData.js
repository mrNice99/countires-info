import axios from "axios";

export const fetchData = async (countryCode = "") => {
  const endPoint = countryCode === "" ? "all" : `alpha/${countryCode}`;
  const apiUrl = `https://restcountries.com/v3.1/${endPoint}`;
  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
