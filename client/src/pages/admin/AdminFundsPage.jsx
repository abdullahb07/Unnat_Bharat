import React, { useState } from "react";
import axios from "axios";

const AdminFundsPage = () => {
  const [projectName, setProjectName] = useState("");
  const [allocatedFund, setAllocatedFund] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const fundData = {
      projectName,
      allocatedFund: parseFloat(allocatedFund),
    };

    try {
      const response = await axios.post("http://localhost:8080/api/v1/send/fund-entry", fundData);
      setMessage("Project fund added successfully!");
      setProjectName("");
      setAllocatedFund("");
    } catch (error) {
      setMessage("Failed to add project fund. Please try again.");
    }
  };

  return (
    <div>
      <h2>Add New Project Fund</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Project Name:</label>
          <input
            type="text"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Allocated Fund:</label>
          <input
            type="number"
            value={allocatedFund}
            onChange={(e) => setAllocatedFund(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Project</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default AdminFundsPage;
