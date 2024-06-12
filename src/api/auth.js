import axios from "axios";

const AUTH_API_URL = "https://moneyfulpublicpolicy.co.kr";

export const authApi = axios.create({
  baseURL: "https://moneyfulpublicpolicy.co.kr",
});

//인자 : 받아와야 할 요소들 넣기
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

  if (!accessToken) return;
  try {
    const response = await axios.get(`${AUTH_API_URL}/user`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return response.data;
  } catch (error) {
    alert(error?.response?.data?.message);
  }
};
