import * as axios from "axios";

//Отдельно загрузка списка людей для уменьшения обего кол-ва запросов
const instanceUsers = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/"
});

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "3d3e8bbf-bcb1-41bc-bcde-012d273555ee"
  }
});

export const usersAPI = {
  getUsers(count, page) {
    return instanceUsers
      .get(`users?count=${count}&page=${page}`)
      .then(response => response.data)
      .catch(err => console.log(err));
  },

  follow(userId) {
    return instance.post(`follow/${userId}`).then(response => response.data);
  },

  unfollow(userId) {
    return instance.delete(`follow/${userId}`).then(response => response.data);
  }
};
