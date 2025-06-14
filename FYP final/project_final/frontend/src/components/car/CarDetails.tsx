// // // import { useEffect, useState } from 'react';
// // // import { useLocation } from 'react-router-dom';
// // // import { CarData } from './CarDashboard';
// // // import { fetchLatestImage } from '../car/carService';

// // // const CarDetails: React.FC = () => {
// // //   const location = useLocation();
// // //   const car: CarData = location.state?.car;
// // //   const [imageUrl, setImageUrl] = useState<string | null>(null);

// // //   useEffect(() => {
// // //       const loadImage = async () => {
// // //         try {
// // //           const url = await fetchLatestImage();
// // //           setImageUrl(url);
// // //           console.log('Fetched image URL:', url);
// // //         } catch (err) {
// // //           console.error('Failed to fetch image:', err);
// // //         }
// // //       };
  
// // //       loadImage();
// // //     }, []);

// // //   if (!car) {
// // //     return <p>No car data provided.</p>;
// // //   }

// // // //   return (
// // // //     <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg mt-6">
// // // //       <h2 className="text-2xl font-bold mb-4">Car Details - {car.carNumber}</h2>

// // // //       <p><strong>Obstacle Detected:</strong> {car.hasObstacle ? 'Yes' : 'No'}</p>
// // // //       {car.hasObstacle && car.obstacleDistance && (
// // // //         <p><strong>Distance:</strong> {car.obstacleDistance} meters</p>
// // // //       )}

// // // //       <p className="mt-2"><strong>Location:</strong> {car.location.address}</p>
// // // //       <p><strong>Coordinates:</strong> {car.location.latitude}, {car.location.longitude}</p>

// // // //       {car.obstacleImage && (
// // // //         <img
// // // //           src={car.obstacleImage}
// // // //           alt="Obstacle"
// // // //           className="mt-4 rounded shadow w-full"
// // // //         />
// // // //       )}
// // // //     </div>
// // // //   );
// // // return (
// // //   <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg mt-6">
// // //     <h2 className="text-2xl font-bold mb-4">Car Details - {car.carNumber}</h2>

// // //     <p><strong>Obstacle Detected:</strong> {car.hasObstacle ? 'Yes' : 'No'}</p>
// // //     {car.hasObstacle && car.obstacleDistance && (
// // //       <p><strong>Distance:</strong> {car.obstacleDistance} meters</p>
// // //     )}

// // //     <p className="mt-2"><strong>Location:</strong> {car.location.address}</p>
// // //     <p><strong>Coordinates:</strong> {car.location.latitude}, {car.location.longitude}</p>

// // //     {(imageUrl || car.obstacleImage) && (
// // //       <img
// // //         src={imageUrl || car.obstacleImage}
// // //         alt="Obstacle"
// // //         className="mt-4 rounded shadow w-full"
// // //       />
// // //     )}
// // //   </div>
// // // );

// // // };

// // // export default CarDetails;
// // import { useEffect, useState } from 'react';
// // import { useLocation, useNavigate } from 'react-router-dom';
// // import { CarData } from './CarDashboard';
// // import { fetchLatestImage } from '../car/carService';

// // const CarDetails: React.FC = () => {
// //   const location = useLocation();
// //   const navigate = useNavigate();
// //   const car: CarData | undefined = location.state?.car;
// //   const [imageUrl, setImageUrl] = useState<string | null>(null);

// //   useEffect(() => {
// //     const loadImage = async () => {
// //       try {
// //         const url = await fetchLatestImage();
// //         setImageUrl(url);
// //       } catch (err) {
// //         console.error('Failed to fetch image:', err);
// //       }
// //     };
// //     loadImage();
// //   }, []);

// //   if (!car) {
// //     return (
// //       <div className="min-h-screen flex flex-col items-center justify-center">
// //         <p className="text-xl">No car data provided.</p>
// //         <button
// //           onClick={() => navigate(-1)}
// //           className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
// //         >
// //           Go Back
// //         </button>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="min-h-screen bg-gray-100 p-8">
// //       <header className="mb-6 flex items-center space-x-4">
// //         <button
// //           onClick={() => navigate(-1)}
// //           className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
// //         >
// //           ← Back
// //         </button>
// //         <h1 className="text-3xl font-bold">Car Details</h1>
// //       </header>

// //       <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6">
// //         <h2 className="text-2xl font-semibold mb-4">Car Number: {car.carNumber || 'Unknown'}</h2>

// //         <p><strong>Obstacle Detected:</strong> {car.hasObstacle ? 'Yes' : 'No'}</p>
// //         {car.hasObstacle && car.obstacleDistance && (
// //           <p><strong>Distance:</strong> {car.obstacleDistance} meters</p>
// //         )}

// //         <p className="mt-4"><strong>Location:</strong> {car.location?.address || 'N/A'}</p>
// //         <p><strong>Coordinates:</strong> {car.location ? `${car.location.latitude}, ${car.location.longitude}` : 'N/A'}</p>

// //         {(imageUrl || car.obstacleImage) && (
// //           <img
// //             src={imageUrl || car.obstacleImage}
// //             alt="Obstacle"
// //             className="mt-6 rounded shadow-md w-full object-contain"
// //           />
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default CarDetails;

// import { useLocation, useNavigate } from 'react-router-dom';
// import React from 'react';
// import { CarData } from './CarDashboard';

// const CarDetails: React.FC = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const car: CarData | undefined = location.state?.car;

//   if (!car) {
//     return (
//       <div className="min-h-screen flex flex-col items-center justify-center p-6">
//         <p className="text-xl">No car data provided.</p>
//         <button
//           onClick={() => navigate(-1)}
//           className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
//         >
//           Go Back
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-100 p-8">
//       <header className="mb-6 flex items-center space-x-4">
//         <button
//           onClick={() => navigate(-1)}
//           className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
//         >
//           ← Back
//         </button>
//         <h1 className="text-3xl font-bold">Car Details</h1>
//       </header>

//       <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6">
//         <h2 className="text-2xl font-semibold mb-4">Car Number: {car.carNumber}</h2>

//         <p><strong>Obstacle Detected:</strong> {car.hasObstacle ? 'Yes' : 'No'}</p>
//         {car.hasObstacle && car.obstacleDistance && (
//           <p><strong>Distance:</strong> {car.obstacleDistance} meters</p>
//         )}

//         <p className="mt-4"><strong>Location:</strong> {car.location?.address || 'N/A'}</p>
//         <p><strong>Coordinates:</strong> {car.location ? `${car.location.latitude}, ${car.location.longitude}` : 'N/A'}</p>

//         {car.obstacleImage && (
//           <img
//             src={car.obstacleImage}
//             alt="Obstacle"
//             className="mt-6 rounded shadow-md w-full object-contain"
//           />
          
//         )}
        
//       </div>
//     </div>
//   );
// };

// export default CarDetails;
// import React, { useEffect, useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { CarData } from './CarDashboard';
// import { fetchLatestImage } from '../car/carService';

// const CarDetails: React.FC = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const car: CarData = location.state?.car;

//   const [imageUrl, setImageUrl] = useState<string | null>(null);

//   useEffect(() => {
//     if (!car) return;

//     const loadImage = async () => {
//       try {
//         const url = await fetchLatestImage(car.id);  // Pass car id
//         setImageUrl(url);
//         console.log('Fetched image URL:', url);
//       } catch (err) {
//         console.error('Failed to fetch image:', err);
//       }
//     };

//     loadImage();
//   }, [car]);

//   if (!car) {
//     return <p>No car data provided.</p>;
//   }

//   return (
//     <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg mt-6">
//       <h2 className="text-2xl font-bold mb-4">Car Details - {car.carNumber}</h2>

//       <p><strong>Obstacle Detected:</strong> {car.hasObstacle ? 'Yes' : 'No'}</p>
//       {car.hasObstacle && car.obstacleDistance && (
//         <p><strong>Distance:</strong> {car.obstacleDistance} meters</p>
//       )}

//       <p className="mt-2"><strong>Location:</strong> {car.location.address}</p>
//       <p><strong>Coordinates:</strong> {car.location.latitude}, {car.location.longitude}</p>

//       {imageUrl ? (
//         <img
//           src={imageUrl}
//           alt="Obstacle"
//           className="mt-4 rounded shadow w-full"
//         />
//       ) : (
//         <p className="mt-4">Loading image...</p>
//       )}
//     </div>
//   );
// };

// export default CarDetails;
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CarData } from './CarDashboard';
import { fetchLatestImage } from '../car/carService';

const STORAGE_KEY = 'cars';

const CarDetails: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const car: CarData = location.state?.car;

  const [imageUrl, setImageUrl] = useState<string | null>(null);

  useEffect(() => {
    if (!car) return;

    const loadImage = async () => {
      try {
        const url = await fetchLatestImage(); // pass car id
        setImageUrl(url);
      } catch (err) {
        console.error('Failed to fetch image:', err);
      }
    };

    loadImage();
  }, [car]);

  if (!car) {
    return <p>No car data provided.</p>;
  }

  const handleBack = () => {
    navigate(-1); // Go back to previous page (dashboard)
  };

  const handleDelete = () => {
    if (!window.confirm(`Delete car ${car.carNumber}? This action cannot be undone.`)) {
      return;
    }

    const storedCars = localStorage.getItem(STORAGE_KEY);
    if (!storedCars) return;

    const cars: CarData[] = JSON.parse(storedCars);
    const updatedCars = cars.filter((c) => c.id !== car.id);

    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedCars));
    navigate('/cars'); // or navigate(-1);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg mt-6">
      <h2 className="text-2xl font-bold mb-4">Car Details - {car.carNumber}</h2>

      <p><strong>Obstacle Detected:</strong> {car.hasObstacle ? 'Yes' : 'No'}</p>
      {car.hasObstacle && car.obstacleDistance && (
        <p><strong>Distance:</strong> {car.obstacleDistance} meters</p>
      )}

      <p className="mt-2"><strong>Location:</strong> {car.location.address}</p>
      <p><strong>Coordinates:</strong> {car.location.latitude}, {car.location.longitude}</p>

      {imageUrl ? (
        <img
          src={imageUrl}
          alt="Obstacle"
          className="mt-4 rounded shadow w-full"
        />
      ) : (
        <p className="mt-4">Loading image...</p>
      )}

      <div className="mt-6 flex justify-between">
        <button
          onClick={handleBack}
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
        >
          Back to Dashboard
        </button>

        <button
          onClick={handleDelete}
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
        >
          Delete Car
        </button>
      </div>
    </div>
  );
};

export default CarDetails;
