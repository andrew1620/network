import * as axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "3d3e8bbf-bcb1-41bc-bcde-012d273555ee"
    // "API-KEY": "428af039-e917-4355-b2da-f161fa0dab90" //Key Для аккаунта Sanya
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
  },
  getUserStatus(userId) {
    return instance
      .get(`profile/status/${userId}`)
      .then(response => response.data);
  },
  updateUserStatus(status) {
    return instance
      .put("profile/status", { status: status })
      .then(response => response.data);
  },
  updateProfileInfo(info) {
    return instance.put("profile", info);
  },
  uploadPhoto(photo) {
    const formData = new FormData();
    formData.append("image", photo);
    return instance
      .put("profile/photo", formData, {
        "content-type": "multipart/form-data"
      })
      .then(response => response.data);
  }
};

export const authAPI = {
  me() {
    return instance.get("auth/me").then(response => response.data);
  },
  login(email, password, rememberMe = false) {
    return instance
      .post("auth/login", {
        email,
        password,
        rememberMe
      })
      .then(response => response.data);
  },
  logout() {
    return instance.delete("auth/login").then(response => response.data);
  }
};
