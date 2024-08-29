import React, { useState } from "react";
import axios from "axios";

const AdminYojanaPage = () => {
  const [yojanaName, setYojanaName] = useState("");
  const [yojanaLink, setYojanaLink] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/api/v1/send/yojana", {
        yojanaName,   // Use the exact field name defined in the model
        yojanaLink,   // Use the exact field name defined in the model
      });
      setMessage("Yojana added successfully!");
      setYojanaName("");
      setYojanaLink("");
    } catch (error) {
      setMessage("Failed to add Yojana. Please try again.");
    }
  };

  return (
    <div>
      <h2>Add New Yojana</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Yojana Name:</label>
          <input
            type="text"
            value={yojanaName}
            onChange={(e) => setYojanaName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Yojana Link:</label>
          <input
            type="text"
            value={yojanaLink}
            onChange={(e) => setYojanaLink(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Yojana</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default AdminYojanaPage;
