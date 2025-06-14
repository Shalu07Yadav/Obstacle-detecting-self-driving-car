import axios from 'axios';

export interface CarData {
  id: string;
  carNumber: string;
  isActive: boolean;
  hasObstacle: boolean;
  obstacleDistance?: number;
  obstacleImage?: string;
  location: {
    latitude: number;
    longitude: number;
    address: string;
  };
}

// Replace with your backend URL or set VITE_API_URL in your .env file
const BACKEND_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export const fetchCars = async (): Promise<CarData[]> => {
  try {
    const response = await axios.get(`${BACKEND_URL}/api/cars`);
    const cars = response.data;

    return cars.map((car: any) => ({
      id: car._id,
      carNumber: car.carNumber || 'Unknown',
      isActive: true, // Modify as needed based on your backend data
      hasObstacle: car.obstacleDetected || false,
      obstacleDistance: car.obstacleDistance,
      obstacleImage: car.imagePath ? BACKEND_URL + car.imagePath : undefined,
      location: {
        latitude: parseFloat(car.latitude) || 0,
        longitude: parseFloat(car.longitude) || 0,
        address: 'Unknown Address',
      },
    }));
  } catch (error) {
    console.error('Error fetching cars:', error);
    return [];
  }
};

export const fetchLatestImage = async (): Promise<string> => {
  const token = localStorage.getItem('token');

  const response = await fetch('http://localhost:5000/api/cars/latest-image', {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error(`Error fetching latest image: ${response.statusText}`);
  }

  const data = await response.json();
  return `http://localhost:5000${data.imageUrl}`;
};


