import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../Styles/UserYojana.css";

const UserYojanaPage = () => {
  const [yojanas, setYojanas] = useState([]);

  useEffect(() => {
    const fetchYojanas = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/v1/send/get-yojana");
        setYojanas(response.data);
      } catch (error) {
        console.error("Failed to fetch Yojanas:", error);
      }
    };

    fetchYojanas();
  }, []);

  return (
    <div>
      <h2>Available Yojanas</h2>
      <ul className="user-yojana-list">
        {yojanas.map((yojana) => (
          <li key={yojana._id}>
            <a href={yojana.yojanaLink} target="_blank" rel="noopener noreferrer">
              {yojana.yojanaName}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserYojanaPage;
