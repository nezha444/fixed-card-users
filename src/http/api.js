import axios from "axios";

axios.defaults.baseURL = "https://649f2312245f077f3e9d5c90.mockapi.io/";

export const usersApiGet = async (page) => {
  const data = await axios.get("users", {
    params: {
      page: page,
      limit: 4,
    },
  });
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

// usersApiPut()
//   .then((el) => console.log(el))
//   .catch((e) => console.log(e));
