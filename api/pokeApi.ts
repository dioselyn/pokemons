import axios, { CreateAxiosDefaults } from "axios";

const pokeApi = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
} as CreateAxiosDefaults);

export default pokeApi;
