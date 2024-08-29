import React, { useState } from "react";

const ComplaintStatusPage = () => {
  const [complaintId, setComplaintId] = useState("");

  const handleSearch = () => {
    // Handle complaint status search
  };

  return (
    <div>
      <h1>Check Complaint Status</h1>
      <div className="form-group">
        <label>Enter Complaint ID</label>
        <input
          type="text"
          value={complaintId}
          onChange={(e) => setComplaintId(e.target.value)}
          className="form-control"
        />
        <button onClick={handleSearch} className="btn btn-primary mt-2">
          Check Status
        </button>
      </div>
      {/* Display the complaint status here */}
    </div>
  );
};

export default ComplaintStatusPage;
