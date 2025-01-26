import api from './api';
import { Admin } from '@/models/admin.model';

export const getAdmins = async (): Promise<Admin[]> => {
  const response = await api.get('/admins');
  return response.data;
};

export const getAdminById = async (id: string): Promise<Admin> => {
  const response = await api.get(`/admins/${id}`);
  return response.data;
};

export const createAdmin = async (admin: Admin): Promise<Admin> => {
  const response = await api.post('/admins', admin);
  return response.data;
};

export const updateAdmin = async (id: string, admin: Admin): Promise<Admin> => {
  const response = await api.put(`/admins/${id}`, admin);
  return response.data;
};

export const deleteAdmin = async (id: string): Promise<void> => {
  await api.delete(`/admins/${id}`);
};
