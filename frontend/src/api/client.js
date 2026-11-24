import axios from "axios";

export const api = axios.create({ 
  baseURL: "https://cropchar-solvex-edqm.onrender.com/api"
});