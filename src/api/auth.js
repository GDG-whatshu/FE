import { instance } from "./instance";

// 회원가입
export const postSignup = async (body) => {
  const response = await instance.post("/auth/signup", body);
  return response.data; // body
};

// 로그인
export const postLogin = async (payload) => {
  const response = await instance.post("/auth/login", payload);
  return response.data;
};
