import React, { useState } from 'react';
import "../../Styles/AskQuestion.css"

const AskQuestion = () => {
    const [question, setQuestion] = useState('');
    const [submitted, setSubmitted] = useState(false);

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (question.trim()) {
            setSubmitted(true);
            // Implement any logic for sending the question to a server or handling it.
            console.log('Question submitted:', question);
        }
    };

    // Handle input change
    const handleInputChange = (e) => {
        setQuestion(e.target.value);
        setSubmitted(false);
    };

    return (
        <>
            <div className="ask-question-page">
                <h1>Ask a Question</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="question">Your Question</label>
                        <textarea
                            id="question"
                            value={question}
                            onChange={handleInputChange}
                            placeholder="Enter your question here..."
                            rows="5"
                            required
                        ></textarea>
                    </div>
                    <button type="submit">Submit</button>
                </form>
                {submitted && (
                    <div className="confirmation">
                        <p>Your question has been submitted successfully!</p>
                    </div>
                )}
            </div>
        </>
    );
};

export default AskQuestion;
