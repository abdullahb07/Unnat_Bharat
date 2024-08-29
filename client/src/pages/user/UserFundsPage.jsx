import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../Styles/UserFundsPage.css"

const UserFundsPage = () => {
  const [projects, setProjects] = useState([]); // Initialize as an empty array
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/v1/send/get-fund-entry");
        console.log("API Response Data:", response.data); // Log the response data

        if (response.data.success && Array.isArray(response.data.data)) {
          setProjects(response.data.data); // Access the array from `data` property
        } else {
          console.error("Expected an array but got:", response.data.data);
          setError("Unexpected API response format.");
        }
      } catch (error) {
        console.error("Failed to fetch projects:", error);
        setError("Failed to fetch projects. Please try again later.");
      }
    };

    fetchProjects();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="fund">
      <h2>Funded Projects</h2>
      {projects.length > 0 ? (
        <ul>
          {projects.map((project) => (
            <li key={project._id} style={{ marginBottom: "20px" }}>
              <h3>{project.projectName}</h3>
              <p>Allocated Funds: ₹{project.allocatedFund}</p> {/* Updated to use `allocatedFund` */}
              {project.document && (
                <div>
                  <a
                    href={`http://localhost:8080/uploads/${project.document}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Document
                  </a>
                  <a
                    href={`http://localhost:8080/uploads/${project.document}`}
                    download
                  >
                    Download Document
                  </a>
                </div>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p>No projects found.</p>
      )}
    </div>
  );
};

export default UserFundsPage;
