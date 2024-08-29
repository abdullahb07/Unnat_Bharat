import React, { useState } from "react";

const ChatBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { from: "bot", text: "Welcome! How can I assist you today?" },
    ]);
    const [input, setInput] = useState("");

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    const handleSend = () => {
        if (input.trim() !== "") {
            const userMessage = { from: "user", text: input };
            const botResponse = { from: "bot", text: "Thank you for your message!" }; // Simple response logic

            setMessages([...messages, userMessage, botResponse]);
            setInput("");
        }
    };

    return (
        <div style={styles.chatContainer}>
            {isOpen && (
                <div style={styles.chatBox}>
                    <div style={styles.header}>
                        <p>Unnati Bharat Assistant</p>
                        <button onClick={toggleChat} style={styles.closeButton}>x</button>
                    </div>
                    <div style={styles.chatContent}>
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                style={{
                                    ...styles.message,
                                    alignSelf: msg.from === "user" ? "flex-end" : "flex-start",
                                    backgroundColor: msg.from === "user" ? "#007bff" : "#ccc",
                                    color: msg.from === "user" ? "#fff" : "#000",
                                }}
                            >
                                {msg.text}
                            </div>
                        ))}
                    </div>
                    <div style={styles.inputContainer}>
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            style={styles.input}
                            placeholder="Type your message..."
                        />
                        <button onClick={handleSend} style={styles.sendButton}>Send</button>
                    </div>
                </div>
            )}
            {!isOpen && (
                <button onClick={toggleChat} style={styles.chatButton}>
                    Chat with us
                </button>
            )}
        </div>
    );
};

const styles = {
    chatContainer: {
        
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: 1000,
    },
    chatBox: {
        width: "300px",
        height: "400px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#fff",
    },
    header: {
        padding: "10px",
        backgroundColor: "#007bff",
        color: "#fff",
        borderTopLeftRadius: "8px",
        borderTopRightRadius: "8px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    closeButton: {
        backgroundColor: "transparent",
        border: "none",
        color: "#fff",
        cursor: "pointer",
        fontSize: "16px",
    },
    chatContent: {
        flex: 1,
        padding: "10px",
        overflowY: "auto",
        display: "flex",
        flexDirection: "column",
    },
    message: {
        maxWidth: "80%",
        padding: "8px",
        borderRadius: "8px",
        margin: "5px 0",
    },
    inputContainer: {
        display: "flex",
        borderTop: "1px solid #ccc",
    },
    input: {
        flex: 1,
        padding: "10px",
        border: "none",
        borderRadius: "0 0 0 8px",
    },
    sendButton: {
        padding: "10px",
        backgroundColor: "#007bff",
        color: "#fff",
        border: "none",
        borderRadius: "0 0 8px 0",
        cursor: "pointer",
    },
    chatButton: {
        padding: "10px 20px",
        backgroundColor: "#007bff",
        color: "#fff",
        borderRadius: "50px",
        border: "none",
        cursor: "pointer",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    },
};

export default ChatBot;