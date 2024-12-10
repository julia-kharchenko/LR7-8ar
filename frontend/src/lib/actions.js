import { client } from "./utils";

export const getUsers = async () => {
  const response = await client.get("/users");
  return response.data;
};

export const createUser = async (data) => {
  const response = await client.post("/users", data);
  return response.data;
};

export const deleteUser = async (id) => {
  const response = await client.delete(`/users/${id}`);
  return response.data;
};

export const updateUser = async ({ id, data }) => {
  const response = await client.patch(`/users/${id}`, data);
  return response.data;
};
