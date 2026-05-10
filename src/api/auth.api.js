import api from "./api";

export const registerUserApi = async (data) => {
  const response = await api.post("/users/register", data);
  return response.data;
};

export const loginUserApi = async (data) => {
  const response = await api.post("/users/login", data);
  return response.data;
};