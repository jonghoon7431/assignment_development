import axios from "axios";

export const AUTH_API_URL = "https://moneyfulpublicpolicy.co.kr";

export const authApi = axios.create({
  baseURL: "https://moneyfulpublicpolicy.co.kr",
});

export const register = async ({ id, password, nickname }) => {
  try {
    const response = await axios.post(`${AUTH_API_URL}/register`, {
      id,
      password,
      nickname,
    });

    return response.data;
  } catch (error) {
    alert(error?.response?.data?.message);
  }
};

export const login = async ({ id, password }) => {
  try {
    const response = await axios.post(`${AUTH_API_URL}/login?expiresIn=10m`, {
      id,
      password,
    });
    localStorage.setItem("accessToken", response.data.accessToken);
    return response.data;
  } catch (error) {
    alert(error?.response?.data?.message);
  }
};

export const getUser = async () => {
  const accessToken = localStorage.getItem("accessToken");

  if (accessToken) {
    try {
      const response = await axios.get(`${AUTH_API_URL}/user`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      return response.data;
    } catch (error) {
      alert("토근이 만료되었습니다 다시 로그인 해주세요");
      localStorage.clear;
    }
  }
};
