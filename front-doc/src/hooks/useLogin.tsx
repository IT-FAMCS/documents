import { LOGIN_URL, LOGOUT_URL, CHECK_TOKEN_URL } from "../constants/apiUrls";

import { fetchPost } from "../api/FetchPost";

export default function useAuth() {
  const login = async (email: string, password: string) => {
    try {
      const response = await fetchPost(LOGIN_URL, {
        email,
        password,
      });
      if (response.token) {
        localStorage.setItem("token", response?.token);
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const logout = async () => {
    try {
      await fetchPost(LOGOUT_URL, {});
      localStorage.removeItem("token");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const checkToken = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      return;
    }

    try {
      await fetchPost(CHECK_TOKEN_URL, { token });
    } catch (error) {
      console.error("Token check failed:", error);
    }
  };

  return { login, logout, checkToken };
}
