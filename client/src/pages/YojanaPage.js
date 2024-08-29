import React from "react";

const YojanaPage = () => {
  // Sample list of schemes
  const schemes = [
    { name: "Scheme 1", description: "Description of Scheme 1" },
    { name: "Scheme 2", description: "Description of Scheme 2" },
  ];

  return (
    <div>
      <h1>Government Schemes</h1>
      <ul>
        {schemes.map((scheme, index) => (
          <li key={index}>
            <h2>{scheme.name}</h2>
            <p>{scheme.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default YojanaPage;
