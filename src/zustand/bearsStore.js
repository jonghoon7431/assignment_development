import { create } from "zustand";

const token = localStorage.getItem("accessToken");

const useBearsStore = create((set) => ({
  isAuthenticated: !!token,

  login: (token) =>
    set(
      (state) => ({
        isAuthenticated: (state.isAuthenticated = true),
      }),
      () => localStorage.setItem("accessToken", token)
    ),

  logout: () =>
    set(
      (state) => ({
        isAuthenticated: (state.isAuthenticated = false),
      }),
      () => localStorage.removeItem("accessToken")
    ),
}));

export default useBearsStore;
