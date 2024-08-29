import React from "react";

const ProfilePage = () => {
  // Placeholder user information
  const user = {
    name: "Dadu Patil",
    phoneNumber: "7972400691",
    aadharNumber: "6328-8845-9012",
  };

  return (
    
    <div>
      <h1>Profile</h1>
      <p>Name: {user.name}</p>
      <p>Phone Number: {user.phoneNumber}</p>
      <p>Aadhar Number: {user.aadharNumber}</p>
      {/* Display user's complaint history here */}
    </div>
  );
};

export default ProfilePage;
