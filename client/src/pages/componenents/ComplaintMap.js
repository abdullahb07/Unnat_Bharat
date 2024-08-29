// src/components/ComplaintMap.js
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Default icon fix for leaflet not displaying markers correctly
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

const complaints = [
  // Example complaints data with location (latitude, longitude)
  { id: 1, lat: 28.6139, lon: 77.209, description: "Pothole on the road", status: "In Progress", date: "2024-08-20" },
  { id: 2, lat: 19.076, lon: 72.8777, description: "Garbage not collected", status: "Resolved", date: "2024-08-18" },
  { id: 3, lat: 20.9042, lon: 74.7749, description: "River Bridge Overflowed", status: "In Progress", date: "2024-08-12" },
  { id: 4, lat: 17.6264, lon: 79.956, description: "Railway Track Damaged", status: "Resolved", date: "2024-08-19" },
  { id: 5, lat: 12.9716, lon: 77.5946, description: "Water Pipeline Leaked", status: "In Progress", date: "2024-08-17" },
  { id: 6, lat: 25.31, lon: 85.95, description: "Road Blocked due to Fallen Trunk", status: "Resolved", date: "2024-08-09" },

  // Add more complaints with lat, lon, description, status, and date
];

const ComplaintMap = () => {
  return (
    <MapContainer center={[20.5937, 78.9629]} zoom={5} style={{ height: "500px", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {complaints.map((complaint) => (
        <Marker key={complaint.id} position={[complaint.lat, complaint.lon]}>
          <Popup>
            <strong>Description:</strong> {complaint.description}<br />
            <strong>Status:</strong> {complaint.status}<br />
            <strong>Date:</strong> {complaint.date}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default ComplaintMap;