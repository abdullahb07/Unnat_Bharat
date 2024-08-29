import React, { useState, useEffect } from 'react';
import "../../Styles/FundsUse.css"


// Mock function to simulate fetching documents from a server
const fetchFundsDocuments = () => {
    return [
        { name: "Funds_Usage_Report_A.pdf", url: "/documents/Funds_Usage_Report_A.pdf" },
        { name: "Funds_Usage_Report_B.pdf", url: "/documents/Funds_Usage_Report_B.pdf" },
    ];
};

// Mock function to simulate checking if the user is an admin
const isAdmin = () => {
    // Replace this with actual logic to check if the user is an admin
    return true; // Change this to false to simulate a regular user
};

const FundsUse = () => {
    const [fundsDocuments, setFundsDocuments] = useState([]);
    const [uploadedFile, setUploadedFile] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const [admin, setAdmin] = useState(false);

    useEffect(() => {
        // Fetch initial fund documents (simulating fetching from a server)
        const documents = fetchFundsDocuments();
        setFundsDocuments(documents);

        // Check if the current user is an admin
        const adminStatus = isAdmin();
        setAdmin(adminStatus);
    }, []);

    // Handle file upload for admin
    const handleFileUpload = (e) => {
        setUploadedFile(e.target.files[0]);
        setSubmitted(false);
    };

    // Handle form submission for admin
    const handleSubmit = (e) => {
        e.preventDefault();
        if (uploadedFile) {
            // Here you would handle the file upload to the server
            setFundsDocuments([...fundsDocuments, { name: uploadedFile.name, url: URL.createObjectURL(uploadedFile) }]);
            setSubmitted(true);
            setUploadedFile(null);
        }
    };

    return (
        <>
            <div className="funds-use-page">
                <h1>Funds Usage Documentation</h1>

                {admin && (
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="fileUpload">Upload Document</label>
                            <input
                                type="file"
                                id="fileUpload"
                                onChange={handleFileUpload}
                                required
                            />
                        </div>
                        <button type="submit">Submit</button>
                        {submitted && (
                            <div className="confirmation">
                                <p>Document has been uploaded successfully!</p>
                            </div>
                        )}
                    </form>
                )}

                <div className="documents-list">
                    <h2>Uploaded Documents</h2>
                    <ul>
                        {fundsDocuments.map((doc, index) => (
                            <li key={index}>
                                <a href={doc.url} target="_blank" rel="noopener noreferrer">
                                    {doc.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default FundsUse;
