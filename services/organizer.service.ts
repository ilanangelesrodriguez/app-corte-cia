import api from './api';
import { Organizer } from '@/models/organizer.model';

export const getOrganizers = async (): Promise<Organizer[]> => {
  const response = await api.get('/organizers');
  return response.data;
};

export const getOrganizerById = async (id: string): Promise<Organizer> => {
  const response = await api.get(`/organizers/${id}`);
  return response.data;
};

export const createOrganizer = async (organizer: Organizer): Promise<Organizer> => {
  const response = await api.post('/organizers', organizer);
  return response.data;
};

export const updateOrganizer = async (id: string, organizer: Organizer): Promise<Organizer> => {
  const response = await api.put(`/organizers/${id}`, organizer);
  return response.data;
};

export const deleteOrganizer = async (id: string): Promise<void> => {
  await api.delete(`/organizers/${id}`);
};
