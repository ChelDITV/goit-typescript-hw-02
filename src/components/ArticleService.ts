import axios from "axios";
import { Article } from "./App/App.types";

const API_KEY = "48337516-7b7bbb1aa3939e40fc99ef59c";
export const fetchArticles = async (
  query: string,
  perPage: number,
): Promise<Article[]> => {
  const clientId = "AzXXys1p-adMJowSNYu7OgYt_1CfuvWp577FIQG0rh8";
  const url = `https://api.unsplash.com/search/photos?query=${query}&client_id=${clientId}&per_page=${perPage}`;
  const response = await axios.get(url);
  return response.data.results as Article[];
};
