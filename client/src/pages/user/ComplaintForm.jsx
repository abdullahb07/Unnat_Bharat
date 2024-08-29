import React, { useState } from 'react';
import "../../Styles/complaintform.css";

function ComplaintForm() {
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [complaint, setComplaint] = useState('');
    const [pincode, setPincode] = useState('');
    const [file, setFile] = useState(null);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('name', name);
        formData.append('mobile', mobile);
        formData.append('complaint', complaint);
        formData.append('pincode', pincode);
        formData.append('file', file);

        console.log('Form submitted:', {
            name, mobile, complaint, pincode, file: file ? file.name : null
        });

        setIsSubmitted(true);

        setName('');
        setMobile('');
        setComplaint('');
        setPincode('');
        setFile(null);
    };

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        setFile(selectedFile);
    };

    const openFilePicker = () => {
        document.getElementById('upload').click();
    };

    return (
        <>
            <div className="complaintsend">
                <h1>Complaint Registration</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        required
                    />

                    <label htmlFor="mobile">Mobile Number:<span className="required">*</span></label>
                    <input
                        type="number"
                        id="mobile"
                        name="mobile"
                        value={mobile}
                        onChange={(event) => setMobile(event.target.value)}
                        required
                    />

                    <label htmlFor="complaint">Complaint Details:</label>
                    <textarea
                        id="complaint"
                        name="complaint"
                        value={complaint}
                        onChange={(event) => setComplaint(event.target.value)}
                        required
                    />

                    <label htmlFor="pincode">Enter Your Pincode:</label>
                    <input
                        type="text"
                        id="pincode"
                        name="pincode"
                        value={pincode}
                        onChange={(event) => setPincode(event.target.value)}
                        required
                    />

                    <label htmlFor="upload">Attach Evidence (Video / Audio / Images):</label>
                    <input
                        type="file"
                        id="upload"
                        name="upload"
                        onChange={handleFileChange}
                        style={{ display: 'none' }}
                    />
                    <button type="button" onClick={openFilePicker}>
                        {file ? file.name : "Choose File"}
                    </button>

                    <br />

                    <button type="submit" className="submit-button">SUBMIT</button>
                </form>

                {isSubmitted && <p className="success-message">Your complaint has been submitted successfully!</p>}
            </div>
        </>
    );
}

export default ComplaintForm;
