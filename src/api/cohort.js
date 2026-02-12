import { instance } from "./instance";

export const getCohorts = async () => {
  const response = await instance.get("/cohorts");

  const data = response.data;

  console.log(data);
  return data.data;
};
