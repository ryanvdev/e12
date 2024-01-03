import axios from "axios";


export const postsFetcher = axios.create({
  baseURL: '/posts',
});