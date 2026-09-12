import React from "react";
import "./ComplaintForm.css";

export default function ComplaintForm({ formData }) {
  return (
    <div className="complaint-form">
      {/* Header */}
      <div className="header">
        <h2>Log Customer Complaint</h2>
        <span className="status">Pending Triage</span>
      </div>
      <p className="subtitle">API & FDF Quality Assurance Module</p>

      {/* Section 1 */}
      <section>
        <h3>1. Product & Batch Identification</h3>
        <div className="form-row">
          <div className="form-group">
            <label>Product Name (API/FDF)</label>
            <input
              placeholder="Awaiting AI extraction..."
              value={formData.productName}
              readOnly
            />
          </div>
          <div className="form-group">
            <label>Batch / Lot Number</label>
            <input
              placeholder="Awaiting AI extraction..."
              value={formData.batchNumber}
              readOnly
            />
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section>
        <h3>2. Facility & Material Impact</h3>
        <div className="form-row">
          <div className="form-group">
            <label>Originating Site Block</label>
            <select value={formData.siteBlock || ""} disabled>
              <option>Awaiting AI classification...</option>
            </select>
          </div>
          <div className="form-group">
            <label>Impacted Non‑Product Materials (NPM)</label>
            <input
              placeholder="e.g., Primary packaging..."
              value={formData.npm}
              readOnly
            />
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section>
        <h3>3. Defect Analysis</h3>
        <div className="form-group">
          <label>Structured Defect Summary</label>
          <textarea
            placeholder="AI will synthesize the complaint into a formal QMS description..."
            value={formData.defectSummary}
            readOnly
          />
        </div>
      </section>
    </div>
  );
}
