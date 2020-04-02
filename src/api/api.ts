import axios from "axios";

import { UserType } from "../redux/usersReducer";
import { ProfileType, InfoType } from "../redux/profileReducer";
import { PhotosType } from "../redux/commonTypes";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "a12bc084-f676-4a1e-bd69-8d4f17b429fd"
    // "API-KEY": "428af039-e917-4355-b2da-f161fa0dab90" //Key Для аккаунта Sanya
  }
});

// Res = response
type GetUsersRes = {
  items: Array<UserType>;
  totalCount: number;
  error: string | null;
};
type CommonRes = {
  data: any;
  messages: Array<string>;
  resultCode: number;
};

export const usersAPI = {
  getUsers(count: number, page: number) {
    return instance
      .get<GetUsersRes>(`users?count=${count}&page=${page}`)
      .then(response => response.data)
      .catch(err => console.log(err));
  },

  follow(userId: number) {
    return instance
      .post<CommonRes>(`follow/${userId}`)
      .then(response => response.data);
  },

  unfollow(userId: number) {
    return instance
      .delete<CommonRes>(`follow/${userId}`)
      .then(response => response.data);
  }
};

type GetUserProfileRes = ProfileType;

type GetUserStatusRes = string;

type UploadPhotoRes = {
  data: PhotosType;
  messages: Array<string>;
  resultCode: number;
};

export const profileAPI = {
  getUserProfile(userId: number | null) {
    return instance
      .get<GetUserProfileRes>(`profile/${userId}`)
      .then(response => response.data);
  },
  getUserStatus(userId: number) {
    return instance
      .get<GetUserStatusRes>(`profile/status/${userId}`)
      .then(response => response.data);
  },
  updateUserStatus(status: string) {
    return instance
      .put<CommonRes>("profile/status", { status: status })
      .then(response => response.data);
  },
  updateProfileInfo(info: InfoType) {
    return instance.put<CommonRes>("profile", info);
  },
  uploadPhoto(photo: any) {
    const formData = new FormData();
    formData.append("image", photo);
    return instance
      .put<UploadPhotoRes>("profile/photo", formData)
      .then((response: any) => response.data);
  }
};

type MeRes = {
  data: {
    id: number;
    email: string;
    login: string;
  };
  messages: Array<string>;
  resultCode: number;
};
type LoginRes = {
  data: {
    userId: number;
  };
  messages: Array<string>;
  resultCode: number;
};

export const authAPI = {
  me() {
    return instance.get<MeRes>("auth/me").then(response => response.data);
  },
  login(email: string, password: string, rememberMe: boolean = false) {
    return instance
      .post<LoginRes>("auth/login", {
        email,
        password,
        rememberMe
      })
      .then(response => response.data);
  },
  logout() {
    return instance
      .delete<CommonRes>("auth/login")
      .then(response => response.data);
  }
};
