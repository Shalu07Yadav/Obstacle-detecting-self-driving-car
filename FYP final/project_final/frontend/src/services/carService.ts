import api from './api';

export const fetchCars = async () => {
  try {
    const response = await api.get('/cars');
    return response.data;
  } catch (error) {
    console.error('Error fetching cars:', error);
    throw error;
  }
};