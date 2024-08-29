import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Admin Dashboard</h1>
      <div style={{ marginBottom: '20px' }}>
        <Link to="/admin/complaints" style={linkStyle}>
          <button style={buttonStyle}>Manage Complaints</button>
        </Link>
      </div>
      <div style={{ marginBottom: '20px' }}>
        <Link to="/admin/add-yojana" style={linkStyle}>
          <button style={buttonStyle}>Add Yojana</button>
        </Link>
      </div>
      <div style={{ marginBottom: '20px' }}>
        <Link to="/admin/add-funds" style={linkStyle}>
          <button style={buttonStyle}>Add Funds Notification</button>
        </Link>
      </div>
    </div>
  );
};

const linkStyle = {
  textDecoration: 'none',
};

const buttonStyle = {
  padding: '15px 30px',
  fontSize: '18px',
  backgroundColor: '#004080',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

export default AdminDashboard;
