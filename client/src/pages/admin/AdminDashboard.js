import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import axios from "axios";
import "../../Styles/Dashboard.css"; // Include CSS for styling

const Dashboard = () => {
  const [stats, setStats] = useState({});
  const [recentComplaints, setRecentComplaints] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    // Fetch dashboard statsnpm 
    const fetchStats = async () => {
      try {
        const response = await axios.get("/api/admin/stats");
        setStats(response.data);
      } catch (error) {
        console.error("Error fetching stats", error);
      }
    };

    // Fetch recent complaints
    const fetchRecentComplaints = async () => {
      try {
        const response = await axios.get("/api/admin/recent-complaints");
        setRecentComplaints(response.data);
      } catch (error) {
        console.error("Error fetching recent complaints", error);
      }
    };
    
    fetchStats();
    fetchRecentComplaints();
  }, []);

  // Handlers for navigation buttons
  const handleYojanaClick = () => {
    navigate("/dashboard/admin-yojana-page"); // Navigate to Admin Yojana page
  };

  const handleFundsClick = () => {
    navigate("/dashboard/admin-funds-page"); // Navigate to Admin Funds page
  };

  return (
    <div className="dashboard">
      <h1>Admin Dashboard</h1>
      <div className="stats">
        <div className="stat-item">
          <h2>Total Users</h2>
          <p>{stats.totalUsers}</p>
        </div>
        <div className="stat-item">
          <h2>Total Complaints</h2>
          <p>{stats.totalComplaints}</p>
        </div>
      </div>
      
      <div className="actions">
        <button onClick={handleYojanaClick} className="action-button">
          Admin Yojana Page
        </button>
        <button onClick={handleFundsClick} className="action-button">
          Admin Funds Page
        </button>
      </div>

      <div className="recent-complaints">
        <h2>Recent Complaints</h2>
        <ul>
          {recentComplaints.map((complaint) => (
            <li key={complaint._id}>
              <strong>{complaint.title}</strong> - {complaint.status}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;