import React, { useState } from "react";
import axios from "axios";

const YojanaInfo = () => {
  const [yojanaName, setYojanaName] = useState("");
  const [info, setInfo] = useState(null);

  const handleGetYojanaInfo = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/yojanas?name=${yojanaName}`
      );
      setInfo(response.data);
    } catch (error) {
      setInfo("Error fetching yojana information. Please try again.");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={yojanaName}
        onChange={(e) => setYojanaName(e.target.value)}
        placeholder="Enter Yojana Name"
      />
      <button onClick={handleGetYojanaInfo}>Get Info</button>
      {info && <p>Info: {info}</p>}
    </div>
  );
};

export default YojanaInfo;
