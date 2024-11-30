import axios from 'axios';
import { LoginCredentials, RegisterData, AuthResponse } from '../types/auth';

const API_URL = '/api';

export const login = async (credentials: LoginCredentials): Promise<AuthResponse> => {
  const response = await axios.post(`${API_URL}/auth/login`, credentials);
  return response.data;
};

export const register = async (data: RegisterData): Promise<AuthResponse> => {
  const response = await axios.post(`${API_URL}/auth/register`, data);
  return response.data;
};

export const logout = async (): Promise<void> => {
  await axios.post(`${API_URL}/auth/logout`);
};

export const getCurrentUser = async (): Promise<AuthResponse> => {
  const response = await axios.get(`${API_URL}/auth/me`);
  return response.data;
};