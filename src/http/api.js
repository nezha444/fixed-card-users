import axios from "axios";

axios.defaults.baseURL = "https://649f2312245f077f3e9d5c90.mockapi.io/";

export const usersApiGet = async (page) => {
  const data = await axios.get("users", {
    params: {
      page: page,
      limit: 3,
    },
  });
  return data;
};
export const userApiGet = async (id) => {
  const data = await axios.get(`users/${id}`);
  return data;
};
export const userTweetsApiGet = async (id) => {
  const data = await axios.get(`users/${id}/tweets`);
  return data;
};

export const usersApiPutPlus = async (id, followers) => {
  const response = await axios.put(`users/${id}`, {
    followers: followers + 1,
  });
};
export const usersApiPutMinus = async (id, followers) => {
  const response = await axios.put(`users/${id}`, {
    followers: followers - 1,
  });
};
