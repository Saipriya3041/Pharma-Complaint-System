import React, { useState, useRef } from "react";
import "./CopilotChat.css";

export default function CopilotChat({ onExtract }) {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([
    {
      sender: "copilot",
      text: "Ready to process new complaints. You can paste the raw email from the customer, or upload a PDF of the complaint report. I will extract the data and run the initial risk assessment.",
    },
  ]);
  const fileInputRef = useRef(null);

  // Send text to backend for extraction
  const handleSend = async () => {
    if (!message.trim()) return;

    setChat([...chat, { sender: "user", text: message }]);
    setMessage("");

    try {
      const response = await fetch("http://localhost:8000/extract", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: message }),
      });
      const data = await response.json();

      setChat((prev) => [
        ...prev,
        { sender: "copilot", text: "Extraction complete! Form updated." },
      ]);
      onExtract(data);
    } catch (error) {
      setChat((prev) => [
        ...prev,
        { sender: "copilot", text: "Error extracting data. Please try again." },
      ]);
    }
  };

  // Upload file to backend
  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setChat((prev) => [
      ...prev,
      { sender: "copilot", text: `Uploading ${file.name}...` },
    ]);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("http://localhost:8000/extract-file", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      setChat((prev) => [
        ...prev,
        { sender: "copilot", text: "File processed successfully! Form updated." },
      ]);
      onExtract(data);
    } catch (error) {
      setChat((prev) => [
        ...prev,
        { sender: "copilot", text: "Error processing file. Please retry." },
      ]);
    }
  };

  return (
    <div className="copilot-card">
      <div className="copilot-header">
        <h2>🧪 AIVOA Copilot</h2>
        <p className="subtext">Drop complaint files or paste text below.</p>
      </div>

      <div className="chat-box">
        {chat.map((msg, i) => (
          <p key={i} className={msg.sender}>
            {msg.text}
          </p>
        ))}
      </div>

      <div className="chat-input-bar">
        <label className="upload-icon">
          📎
          <input
            type="file"
            ref={fileInputRef}
            accept=".pdf,.doc,.docx"
            style={{ display: "none" }}
            onChange={handleFileUpload}
          />
        </label>

        <input
          type="text"
          placeholder="Type a message or paste a complaint..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />

        <button className="send-btn" onClick={handleSend}>
          ➤
        </button>
      </div>
    </div>
  );
}
