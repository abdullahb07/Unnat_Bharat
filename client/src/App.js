import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
// import ReactDOM from 'react-dom';

import Home from "./pages/user/Home";
import Map from "./pages/user/Map";
import Complaint from "./pages/user/complaint";
// import StatusPage from "./pages/StatusPage";
import ProfilePage from "./pages/user/ProfilePage";
import AboutPage from "./pages/user/AboutPage";
//import ChatBot from "./chatbot";
import "./App.css";
import ComplaintForm from "./pages/user/ComplaintForm";
// import complaint from "./pages/user/complaint";

import Layout from "./pages/componenents/Layout/Layout";
import AskQuestion from "./pages/user/AskQuestion";
import CallHelpline from "./pages/user/CallHelpline";
//import FundsNotification from "./pages/user/FundsNotification";
//import FundsUse from "./pages/user/FundsUse";
//import Yojana from "./pages/user/UserYojanaPage";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminYojanaPage from "./pages/admin/AdminYojanaPage";
import UserYojanaPage from "./pages/user/UserYojanaPage";
import ComplaintStatusPage from "./pages/user/ComplaintStatusPage";
import ContactPage from "./pages/user/ContactPage";
import NotFoundPage from "./pages/user/NotFoundPage";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import ForgotPasssword from "./pages/Auth/ForgotPassword";
import AdminFundsPage from "./pages/admin/AdminFundsPage";
import UserFundsPage from "./pages/user/UserFundsPage";
import AdminRoute from "./pages/componenents/Routes/AdminRoute";
import UserRoute from "./pages/componenents/Routes/UserRoute";

import { Chatbot } from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import config from "./chatbot/config";
import MessageParser from "./chatbot/MessageParser";
import ActionProvider from "./chatbot/ActionProvider";
import "./App.css"; // Import the CSS file
import UserDashboard from "./pages/user/UserDashboard";



function App() {

  const [showChatbot, setShowChatbot] = useState(false);

  const toggleChatbot = () => {
    setShowChatbot(!showChatbot);
  };


  return (
  
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/map" element={<Map />} />
          <Route path="/complaint-form" element={<ComplaintForm />} />
          <Route path="/complaint" element={<Complaint />} />
          <Route path="/dashboard" element={<UserRoute />}>
            <Route path="user" element={<UserDashboard />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="complaint-status" element={<ComplaintStatusPage />} />
            <Route path="ask-question" element={<AskQuestion />} />
            <Route path="call-helpline" element={<CallHelpline />} />
            <Route path="user-yojana-page" element={<UserYojanaPage />} />
            <Route path="user-funds-page" element={<UserFundsPage />} />
          </Route>
          
          <Route path="/dashboard" element={<AdminRoute />}>
            <Route path="admin" element={<AdminDashboard />} />
            <Route path="admin-yojana-page" element={<AdminYojanaPage />} />
            <Route path="admin-funds-page" element={<AdminFundsPage />} />
            <Route path="about" element={<AboutPage />} />
          </Route>

          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPasssword />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      
      <div className="App">
      {showChatbot && (
        <div className="chatbot-container">
          <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
          />
        </div>
      )}
      <button className="chatbot-toggle-btn" onClick={toggleChatbot}>
        {showChatbot ? "✖" : "💬"}
      </button>
    </div>
    </Layout>
    
  );
}

export default App;
