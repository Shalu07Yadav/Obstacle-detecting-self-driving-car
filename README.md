# 🚗 Obstacle Detecting Self-Driving Car with Email Alert & GPS Tracking

This project is a prototype self-driving car system capable of detecting obstacles in real time, capturing images, sending email alerts, and tracking its GPS location. A web dashboard allows users to monitor obstacle events remotely, including visual evidence and location data.

---

## 🔧 Features

- 🔍 Real-time obstacle detection using sensors
- 📸 Automatic image capture via ESP32-CAM
- 📧 Email alert with captured image and GPS location
- 📍 Live GPS tracking
- 🌐 Web interface to view:
  - Car activity status
  - Obstacle alerts
  - Latest captured image
  - Car's current location on map

---

## 🧱 Tech Stack

### 🚘 Hardware:
- Arduino Uno (Obstacle detection & control)
- ESP32-CAM (Camera & WiFi communication)
- GPS Module (Neo-6M or similar)
- Ultrasonic sensor (HC-SR04)

### 🖥️ Software:
- **Frontend**: React + TypeScript
- **Backend**: Node.js + Express + MongoDB
- **Email**: ESP Mail Client library (SMTP)
- **GPS Parsing**: TinyGPS++ library

---

## 🧪 System Workflow

1. **Obstacle Detection**: Arduino detects obstacle and signals the ESP32-CAM.
2. **Image Capture & Location**: ESP32-CAM captures image and reads GPS coordinates.
3. **Email Alert**: Image and coordinates are emailed to an authorized person.
4. **Data Upload**: ESP32 sends obstacle image and GPS data to the backend via HTTP POST.
5. **Web Dashboard**: Displays car activity, obstacle status, location, and image.

---

## 🖥️ Web Dashboard UI

- Displays car number and status (`Active/Inactive`)
- Shows "Obstacle Detected" if triggered
- View obstacle image button (shows latest image if within 10 seconds)
- Displays car location on map (with address)

---

## 🚀 Getting Started

### Backend Setup

```bash
cd backend
npm install
npm run dev
