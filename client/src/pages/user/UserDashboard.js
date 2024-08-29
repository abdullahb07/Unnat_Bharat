import React, { useState } from "react";
import "../../Styles/UserDashboard.css"; // Import the CSS file for styling
import ProfilePage from "./ProfilePage";
import ComplaintStatusPage from "./ComplaintStatusPage";
import UserYojanaPage from "./UserYojanaPage";
import UserFundsPage from "./UserFundsPage";
import AskQuestion from "./AskQuestion";
import CallHelpline from "./CallHelpline";

const UserDashboard = () => {
  const [activeSection, setActiveSection] = useState("profile");

  const renderSection = () => {
    switch (activeSection) {
      case "profile":
        return <ProfilePage />;
      case "complaints":
        return <ComplaintStatusPage />;
      case "ask-questions":
        return <AskQuestion />;
      case "call-helpline":
        return <CallHelpline />;
      case "yojanas":
        return <UserYojanaPage />;
      case "funds":
        return <UserFundsPage />;
      default:
        return <ProfilePage />;
    }
  };

  return (
    <div className="user-dashboard">
      <nav className="user-nav-ol">
        <ul>
          <div className="rain">
          <li>
            <button onClick={() => setActiveSection("profile")}>
              My Profile
            </button>
          </li>
          </div>
          <li>
            <button onClick={() => setActiveSection("complaints")}>
              Complaint Status
            </button>
          </li>
          <li>
            <button onClick={() => setActiveSection("ask-questions")}>
              Ask Questions
            </button>
          </li>
          <li>
            <button onClick={() => setActiveSection("call-helpline")}>
              Call Helpline
            </button>
          </li>
          <li>
            <button onClick={() => setActiveSection("yojanas")}>Yojanas</button>
          </li>
          <li>
            <button onClick={() => setActiveSection("funds")}>Funds</button>
          </li>
        </ul>
      </nav>
      <div className="user-content">{renderSection()}</div>
    </div>
  );
};

export default UserDashboard;
