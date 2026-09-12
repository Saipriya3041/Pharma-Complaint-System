import React, { useState } from "react";
import ComplaintForm from "./components/ComplaintForm";
import CopilotChat from "./components/CopilotChat";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    productName: "",
    batchNumber: "",
    siteBlock: "",
    npm: "",
    defectSummary: "",
  });

  const handleAIExtraction = (extractedData) => {
    setFormData((prev) => ({ ...prev, ...extractedData }));
  };

  return (
    <div className="app">
      <div className="main-layout">
        <div className="complaint-section">
          <ComplaintForm formData={formData} />
        </div>
        <div className="chat-section">
          <CopilotChat onExtract={handleAIExtraction} />
        </div>
      </div>
    </div>
  );
}

export default App;
