import api from './api';
import { Event } from '@/models/event.model';

export const getEvents = async (): Promise<Event[]> => {
  const response = await api.get('/events');
  return response.data;
};

export const getEventById = async (id: string): Promise<Event> => {
  const response = await api.get(`/events/${id}`);
  return response.data;
};

export const createEvent = async (event: Event): Promise<Event> => {
  const response = await api.post('/events', event);
  return response.data;
};

export const updateEvent = async (id: string, event: Event): Promise<Event> => {
  const response = await api.put(`/events/${id}`, event);
  return response.data;
};

export const deleteEvent = async (id: string): Promise<void> => {
  await api.delete(`/events/${id}`);
};
