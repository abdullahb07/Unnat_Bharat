import React, { useState, useEffect } from 'react';
import "../../Styles/FundsNotification.css"

// Mock function to simulate fetching notifications from a server
const fetchFundsUpdates = () => {
    return [
        "Fund A - Allocated $1,000,000",
        "Fund B - Allocated $500,000",
        "Fund C - Allocated $750,000",
    ];
};

// Mock function to simulate checking if the user is an admin
const isAdmin = () => {
    // Replace this with actual logic to check if the user is an admin
    return true; // Change this to false to simulate a regular user
};

const FundsNotification = () => {
    const [fundsUpdates, setFundsUpdates] = useState([]);
    const [notification, setNotification] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [admin, setAdmin] = useState(false);

    useEffect(() => {
        // Fetch initial funds updates (simulating fetching from a server)
        const updates = fetchFundsUpdates();
        setFundsUpdates(updates);

        // Check if the current user is an admin
        const adminStatus = isAdmin();
        setAdmin(adminStatus);
    }, []);

    // Handle form submission for admin
    const handleSubmit = (e) => {
        e.preventDefault();
        if (notification.trim()) {
            setFundsUpdates([...fundsUpdates, notification]);
            setSubmitted(true);
            setNotification('');
        }
    };

    // Handle input change for admin
    const handleInputChange = (e) => {
        setNotification(e.target.value);
        setSubmitted(false);
    };

    return (
        <>
            <div className="funds-notification-page">
                <h1>Funds Notification</h1>

                {admin && (
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="notification">Enter Fund Update</label>
                            <textarea
                                id="notification"
                                value={notification}
                                onChange={handleInputChange}
                                placeholder="Enter fund update..."
                                rows="5"
                                required
                            ></textarea>
                        </div>
                        <button type="submit">Submit</button>
                        {submitted && (
                            <div className="confirmation">
                                <p>Fund update has been submitted successfully!</p>
                            </div>
                        )}
                    </form>
                )}

                <div className="updates-list">
                    <h2>Recent Fund Updates</h2>
                    <ul>
                        {fundsUpdates.map((update, index) => (
                            <li key={index}>{update}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default FundsNotification;
