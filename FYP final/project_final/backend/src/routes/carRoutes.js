// // import express from 'express';
// // import Car from '../models/Car.js'; // adjust path if needed
// // import fs from 'fs';
// // import path from 'path';

// // const router = express.Router();

// // // Ensure uploads directory exists
// // const uploadsDir = path.join('uploads');
// // if (!fs.existsSync(uploadsDir)) {
// //   fs.mkdirSync(uploadsDir, { recursive: true });
// // }

// // // POST route to upload image and car data
// // router.post('/update-from-device', async (req, res) => {
// //   try {
// //     const { image, carId = 'unknown', latitude, longitude } = req.body;

// //     if (!image || !carId || isNaN(latitude) || isNaN(longitude)) {
// //       return res.status(400).send({ error: 'Missing or invalid fields' });
// //     }

// //     const lat = parseFloat(latitude);
// //     const lng = parseFloat(longitude);

// //     const base64Data = image.replace(/^data:image\/\w+;base64,/, '');
// //     const buffer = Buffer.from(base64Data, 'base64');

// //     // Sanitize carId for filename safety
// //     const safeCarId = carId.replace(/[^a-z0-9]/gi, '_').toLowerCase();
// //     const filename = `obstacle_${safeCarId}_${Date.now()}.jpg`;
// //     const imagePath = path.join(uploadsDir, filename);

// //     fs.writeFileSync(imagePath, buffer);

// //     const imageUrl = `/uploads/${filename}`; // served statically

// //     const newCar = new Car({
// //       carId,
// //       latitude: lat,
// //       longitude: lng,
// //       imagePath: imageUrl,
// //       obstacleDetected: true,
// //       timestamp: new Date(),
// //     });

// //     await newCar.save();

// //     res.status(200).send({ message: 'Image and data saved', imageUrl });
// //   } catch (err) {
// //     console.error(err);
// //     res.status(500).send({ error: 'Server error' });
// //   }
// // });

// // // GET all car data
// // router.get('/', async (req, res) => {
// //   try {
// //     const cars = await Car.find().sort({ timestamp: -1 });
// //     res.json(cars);
// //   } catch (err) {
// //     res.status(500).json({ error: 'Failed to fetch cars' });
// //   }
// // });

// // // GET latest data for a specific car (optional route)
// // router.get('/:carId/latest', async (req, res) => {
// //   const { carId } = req.params;
// //   try {
// //     const car = await Car.findOne({ carId }).sort({ timestamp: -1 });
// //     if (!car) return res.status(404).send({ error: 'Car not found' });
// //     res.json(car);
// //   } catch (err) {
// //     res.status(500).json({ error: 'Failed to fetch car' });
// //   }
// // });

// // export default router;

// //------------------------------------------------------------------------------------------------------------------------------------>
// // import express from 'express';
// // import Car from '../models/Car.js'; // adjust path if needed
// // import fs from 'fs';
// // import path from 'path';

// // const router = express.Router();

// // // Ensure uploads directory exists
// // const uploadsDir = path.join('uploads');
// // if (!fs.existsSync(uploadsDir)) {
// //   fs.mkdirSync(uploadsDir, { recursive: true });
// // }

// // // POST route to upload image and car data
// // router.post('/update-from-device', async (req, res) => {
// //   try {
// //     let {
// //       image,
// //       carId = 'unknown',
// //       carNumber,
// //       timestamp,
// //       latitude,
// //       longitude,
// //       obstacleDistance,
// //       obstacleDetected = true,
// //       location, // optional object { latitude, longitude, address }
// //     } = req.body;

// //     if (!image || !carId) {
// //       return res.status(400).send({ error: 'Missing required fields: image or carId' });
// //     }

// //     // Fix carNumber to avoid duplicates:
// //     if (!carNumber || carNumber === 'unknown') {
// //       carNumber = `unknown_${Date.now()}`;
// //     }

// //     // Save image from base64 string
// //     const base64Data = image.replace(/^data:image\/\w+;base64,/, '');
// //     const buffer = Buffer.from(base64Data, 'base64');

// //     // Sanitize carId for filename safety
// //     const safeCarId = carId.replace(/[^a-z0-9]/gi, '_').toLowerCase();
// //     const filename = `obstacle_${safeCarId}_${Date.now()}.jpg`;
// //     const imagePath = path.join(uploadsDir, filename);

// //     fs.writeFileSync(imagePath, buffer);
// //     const imageUrl = `/uploads/${filename}`;

// //     // Parse timestamp or fallback to now
// //     let parsedTimestamp = new Date(timestamp);
// //     if (isNaN(parsedTimestamp.getTime())) {
// //       parsedTimestamp = new Date();
// //     }

// //     // Prepare location data: prefer nested location object if provided
// //     const loc = location
// //       ? location
// //       : {
// //           latitude: latitude || "00",
// //           longitude: longitude || "00",
// //           address: location?.address || "Unknown",
// //         };

// //     // Save car data with all info
// //     const carData = new Car({
// //       carId,
// //       carNumber,
// //       latitude: String(loc.latitude),
// //       longitude: String(loc.longitude),
// //       imagePath: imageUrl,
// //       obstacleDetected,
// //       obstacleDistance,
// //       timestamp: parsedTimestamp,
// //     });

// //     await carData.save();

// //     console.log(`Saved new image and data with timestamp: ${parsedTimestamp.toISOString()}`);

// //     res.status(200).send({
// //       message: 'Image and data saved',
// //       imageUrl,
// //       timestamp: parsedTimestamp.toISOString(),
// //     });
// //   } catch (err) {
// //     console.error(err);
// //     res.status(500).send({ error: 'Server error' });
// //   }
// // });

// // // GET all car data
// // router.get('/', async (req, res) => {
// //   try {
// //     const cars = await Car.find().sort({ timestamp: -1 });
// //     res.json(cars);
// //   } catch (err) {
// //     res.status(500).json({ error: 'Failed to fetch cars' });
// //   }
// // });

// // // GET latest data for a specific car
// // router.get('/:carId/latest', async (req, res) => {
// //   const { carId } = req.params;
// //   try {
// //     const car = await Car.findOne({ carId }).sort({ timestamp: -1 });
// //     if (!car) return res.status(404).send({ error: 'Car not found' });
// //     res.json(car);
// //   } catch (err) {
// //     res.status(500).json({ error: 'Failed to fetch car' });
// //   }
// // });

// // export default router;

// //--------------------------------------------md

// import express from 'express';
// import Car from '../models/Car.js';
// import fs from 'fs';
// import path from 'path';

// import { fileURLToPath } from 'url';
// import { dirname } from 'path';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// console.log(__dirname);

// const router = express.Router();

// const uploadsDir = path.join(__dirname, '..', 'uploads');
// if (!fs.existsSync(uploadsDir)) {
//   fs.mkdirSync(uploadsDir, { recursive: true });
// }

// // ✅ GET all cars
// router.get('/', async (req, res) => {
//   try {
//     const cars = await Car.find().sort({ timestamp: -1 });
//     res.json(cars);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Failed to fetch cars' });
//   }
// });


// // ✅ POST: update from ESP32
// router.post('/update-from-device', async (req, res) => {
//   console.log(req, res)
//   try {
//     let {
//       image,
//       carId,
//       carNumber,
//       timestamp,
//       latitude,
//       longitude,
//       obstacleDetected = true,
//       location,
//     } = req.body;

//     if (!image || !carId) {
//       return res.status(400).send({ error: 'Missing required fields: image or carId' });
//     }

//     const base64Data = image.replace(/^data:image\/\w+;base64,/, '');
//     const buffer = Buffer.from(base64Data, 'base64');

//     const safeCarId = carId.replace(/[^a-z0-9]/gi, '_').toLowerCase();
//     const filename = `obstacle_${safeCarId}_${Date.now()}.jpg`;
//     const imagePath = path.join(uploadsDir, filename);

//     console.log(imagePath)

//     fs.writeFileSync(imagePath, buffer);
//     const imageUrl = `/uploads/${filename}`;

//     let parsedTimestamp = new Date(timestamp);
//     if (isNaN(parsedTimestamp.getTime())) parsedTimestamp = new Date();

//     let loc = location && typeof location === 'object' ? location : {};
//     loc.latitude = loc.latitude !== undefined ? Number(loc.latitude) : Number(latitude);
//     loc.longitude = loc.longitude !== undefined ? Number(loc.longitude) : Number(longitude);
//     loc.address = loc.address || '';

//     if (isNaN(loc.latitude) || isNaN(loc.longitude)) {
//       return res.status(400).send({ error: 'Invalid latitude or longitude' });
//     }

//     let car = await Car.findOne({ carId });
//     if (!car) {
//       car = new Car({ carId });
//     }

//     car.carNumber = carNumber || car.carNumber || `unknown_${Date.now()}`;
//     car.obstacleDetected = obstacleDetected;
//     car.obstacleImage = imageUrl;
//     car.location = {
//       latitude: loc.latitude,
//       longitude: loc.longitude,
//       address: loc.address,
//     };
//     car.timestamp = parsedTimestamp;
//     car.isActive = true;

//     await car.save();

//     res.status(200).json({
//       message: 'Car data and image saved successfully',
//       imageUrl,
//       timestamp: parsedTimestamp.toISOString(),
//     });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Server error' });
//   }
// });

// const UPLOADS_DIR = uploadsDir;

// // router.get('/latest-image', (req, res) => {
// //   fs.readdir(UPLOADS_DIR, (err, files) => {
// //     if (err) return res.status(500).json({ error: 'Unable to read uploads directory' });

// //     // Filter for image files
// //     const imageFiles = files
// //       .filter(file => file.match(/\.(jpg|jpeg|png|gif)$/i))
// //       .map(file => ({
// //         name: file,
// //         time: fs.statSync(path.join(UPLOADS_DIR, file)).mtime.getTime()
// //       }))
// //       .sort((a, b) => b.time - a.time); // Sort by modified time desc

// //     if (imageFiles.length === 0) {
// //       return res.status(404).json({ error: 'No image found' });
// //     }

// //     const latestImage = imageFiles[0].name;
// //     const imageUrl = `/uploads/${latestImage}`;

// //     res.json({ imageUrl });
// //   });
// // });
// router.get('/latest-image', (req, res) => {
//   fs.readdir(UPLOADS_DIR, (err, files) => {
//     if (err) {
//       return res
//         .status(500)
//         .json({ error: 'Unable to read uploads directory' });
//     }

//     // Filter and sort for image files
//     const imageFiles = files
//       .filter(file => file.match(/\.(jpg|jpeg|png|gif)$/i))
//       .map(file => ({
//         name: file,
//         time: fs.statSync(path.join(UPLOADS_DIR, file)).mtime.getTime()
//       }))
//       .sort((a, b) => b.time - a.time);

//     if (imageFiles.length === 0) {
//       return res.status(404).json({ error: 'No image found' });
//     }

//     const latestImage = imageFiles[0].name;
//     // The front-end should use this URL (prefix with your host) to display the image.
//     const imageUrl = `/uploads/${latestImage}`;
//     res.json({ imageUrl });
//   });
// });


// export default router;

import express from 'express';
import Car from '../models/Car.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const router = express.Router();

// ✅ Use uploads directory inside routes folder
const uploadsDir = path.join(__dirname, 'uploads'); // Now: src/routes/uploads
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// ✅ GET all cars
router.get('/', async (req, res) => {
  try {
    const cars = await Car.find().sort({ timestamp: -1 });
    res.json(cars);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch cars' });
  }
});

// ✅ POST: update from ESP32
router.post('/update-from-device', async (req, res) => {
  try {
    let {
      image,
      carId,
      carNumber,
      timestamp,
      latitude,
      longitude,
      obstacleDetected = true,
      location,
    } = req.body;

    if (!image || !carId) {
      return res.status(400).send({ error: 'Missing required fields: image or carId' });
    }

    const base64Data = image.replace(/^data:image\/\w+;base64,/, '');
    const buffer = Buffer.from(base64Data, 'base64');

    const safeCarId = carId.replace(/[^a-z0-9]/gi, '_').toLowerCase();
    const filename = `obstacle_${safeCarId}_${Date.now()}.jpg`;
    const imagePath = path.join(uploadsDir, filename);

    fs.writeFileSync(imagePath, buffer);
    const imageUrl = `/uploads/${filename}`; // Static path for frontend

    let parsedTimestamp = new Date(timestamp);
    if (isNaN(parsedTimestamp.getTime())) parsedTimestamp = new Date();

    let loc = location && typeof location === 'object' ? location : {};
    loc.latitude = loc.latitude !== undefined ? Number(loc.latitude) : Number(latitude);
    loc.longitude = loc.longitude !== undefined ? Number(loc.longitude) : Number(longitude);
    loc.address = loc.address || '';

    if (isNaN(loc.latitude) || isNaN(loc.longitude)) {
      return res.status(400).send({ error: 'Invalid latitude or longitude' });
    }

    let car = await Car.findOne({ carId });
    if (!car) {
      car = new Car({ carId });
    }

    car.carNumber = carNumber || car.carNumber || `unknown_${Date.now()}`;
    car.obstacleDetected = obstacleDetected;
    car.obstacleImage = imageUrl;
    car.location = {
      latitude: loc.latitude,
      longitude: loc.longitude,
      address: loc.address,
    };
    car.timestamp = parsedTimestamp;
    car.isActive = true;

    await car.save();

    res.status(200).json({
      message: 'Car data and image saved successfully',
      imageUrl,
      timestamp: parsedTimestamp.toISOString(),
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// ✅ GET latest image
router.get('/latest-image', (req, res) => {
  fs.readdir(uploadsDir, (err, files) => {
    if (err) {
      return res.status(500).json({ error: 'Unable to read uploads directory' });
    }

    const imageFiles = files
      .filter(file => file.match(/\.(jpg|jpeg|png|gif)$/i))
      .map(file => ({
        name: file,
        time: fs.statSync(path.join(uploadsDir, file)).mtime.getTime()
      }))
      .sort((a, b) => b.time - a.time);

    if (imageFiles.length === 0) {
      return res.status(404).json({ error: 'No image found' });
    }

    const latestImage = imageFiles[0].name;
    const imageUrl = `/uploads/${latestImage}`;
    res.json({ imageUrl });
  });
});

export default router;
