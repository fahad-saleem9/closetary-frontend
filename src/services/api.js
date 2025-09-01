// src/services/api.js
import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000/api/", 
});


export const registerUser = async (userData) => {
  try {
    const response = await API.post("register/", userData);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};


export const loginUser = async (userData) => {
  try {
    const response = await API.post("login/", userData);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};


export const refreshToken = async () => {
  try {
    const refresh = localStorage.getItem("refresh");
    const response = await API.post("token/refresh/", { refresh });
    localStorage.setItem("access", response.data.access);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const logoutUser = async () => {
  try {
    const token = localStorage.getItem("access");
    const response = await API.post(
      "logout/",
      {},
      { headers: { Authorization: `Bearer ${token}` } }
    );
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};


export const getProfile = async () => {
  try {
    const token = localStorage.getItem("access");
    const response = await API.get("profile/", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};


export const googleLogin = async (tokenId) => {
  try {
    const response = await API.post("google/", { token: tokenId });
    localStorage.setItem("access", response.data.access);
    localStorage.setItem("refresh", response.data.refresh);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const facebookLogin = async (accessToken) => {
  try {
    const response = await API.post("facebook/", { token: accessToken });
    localStorage.setItem("access", response.data.access);
    localStorage.setItem("refresh", response.data.refresh);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};
