import * as axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "3d3e8bbf-bcb1-41bc-bcde-012d273555ee"
  }
});

export const usersAPI = {
  getUsers(count, page) {
    return instance
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

export const profileAPI = {
  getUserProfile(userId) {
    return instance.get(`profile/${userId}`).then(response => response.data);
  }
};

export const headerAPI = {
  authenticate() {
    return instance.get("auth/me").then(response => response.data);
  }
};
