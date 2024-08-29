import React, { useState } from "react";
import axios from "axios";

const ComplaintTracker = () => {
  const [complaintId, setComplaintId] = useState("");
  const [status, setStatus] = useState(null);

  const handleTrackComplaint = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/complaints/${complaintId}`
      );
      setStatus(response.data.status);
    } catch (error) {
      setStatus("Error fetching complaint status. Please try again.");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={complaintId}
        onChange={(e) => setComplaintId(e.target.value)}
        placeholder="Enter Complaint ID"
      />
      <button onClick={handleTrackComplaint}>Track</button>
      {status && <p>Status: {status}</p>}
    </div>
  );
};

export default ComplaintTracker;
