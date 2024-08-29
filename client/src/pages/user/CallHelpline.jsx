import React, { useState } from 'react';
import "../../Styles/CallHelpline.css"

const CallHelpline = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [submitted, setSubmitted] = useState(false);

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (phoneNumber.trim()) {
            setSubmitted(true);
            // Logic for handling the phone number submission can be added here
            console.log('Phone number submitted:', phoneNumber);
        }
    };

    // Handle input change
    const handleInputChange = (e) => {
        setPhoneNumber(e.target.value);
        setSubmitted(false);
    };

    return (
        <>
            <div className="call-helpline-page">
                <h1>Call Helpline</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="phoneNumber">Enter Your Phone Number</label>
                        <input
                            type="tel"
                            id="phoneNumber"
                            value={phoneNumber}
                            onChange={handleInputChange}
                            placeholder="Enter your phone number..."
                            required
                        />
                    </div>
                    <button type="submit">Submit</button>
                </form>
                {submitted && (
                    <div className="confirmation">
                        <p>Your phone number has been submitted successfully! We will contact you soon.</p>
                    </div>
                )}
            </div>
        </>
    );
};

export default CallHelpline;
