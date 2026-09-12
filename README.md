Here’s a **complete README.md file** you can drop directly into your project root. It covers everything in one place — frontend, backend, AI pipeline, setup, and usage.

---

```markdown
# Pharma Complaint Intake System

An AI‑powered web application for **customer complaint intake** in pharmaceutical quality assurance.  
The system allows users to **type complaints** or **upload PDF/DOC files**, and the **Copilot assistant** automatically extracts structured details into a complaint form.

---

## 🚀 Features
- **Two‑panel layout**:
  - Left: Structured **Complaint Form** (auto‑filled by AI).
  - Right: **Copilot Assistant** (chat + file upload).
- **AI Extraction**:
  - Reads typed complaint text.
  - Processes uploaded PDF/DOC/DOCX files.
  - Extracts product, batch, site, NPM, and defect summary.
- **Clarification**:
  - If data is incomplete, Copilot asks follow‑up questions.
- **Responsive UI**:
  - Works seamlessly across Chrome, Edge, Firefox.
  - Flexible layout with full‑page fit.

---

## 🧱 Tech Stack
- **Frontend**: React (Vite or CRA), CSS Grid/Flexbox
- **Backend**: FastAPI
- **AI Pipeline**: LangChain + Groq LLM
- **File Handling**: FastAPI UploadFile

---

## 📂 Project Structure
```
frontend/
  src/
    components/
      ComplaintForm.jsx
      ComplaintForm.css
      CopilotChat.jsx
      CopilotChat.css
    App.jsx
    App.css
    index.jsx
backend/
  main.py
README.md
```

---

## ⚙️ Installation

### 1. Clone Repository
```bash
git clone https://github.com/your-org/pharma-complaint-system.git
cd pharma-complaint-system
```

### 2. Frontend Setup
```bash
cd frontend
npm install
npm start
```

### 3. Backend Setup
```bash
cd backend
pip install fastapi uvicorn langchain langchain-groq
uvicorn main:app --reload
```

---

## 🧩 Backend API Endpoints

### `POST /extract`
Extracts complaint details from raw text.
```json
{
  "text": "Complaint: Paracetamol batch B12345 from Block A shows discoloration."
}
```

Response:
```json
{
  "productName": "Paracetamol API",
  "batchNumber": "B12345",
  "siteBlock": "Block A",
  "npm": "",
  "defectSummary": "Discoloration observed in capsules."
}
```

---

### `POST /extract-file`
Extracts complaint details from uploaded file.
```bash
curl -X POST "http://localhost:8000/extract-file" \
  -F "file=@complaint.pdf"
```

Response:
```json
{
  "productName": "Ibuprofen API",
  "batchNumber": "B98765",
  "siteBlock": "Block C",
  "npm": "Secondary packaging",
  "defectSummary": "AI synthesized defect description from uploaded file."
}
```

---

## 🧠 AI Workflow
1. User types or uploads complaint.  
2. Frontend sends data to FastAPI.  
3. FastAPI uses **LangChain + Groq LLM** with structured prompt.  
4. LLM returns JSON with extracted fields.  
5. React updates **ComplaintForm** automatically.  
6. Copilot asks clarifying questions if data is missing.

---

## 🎨 UI Highlights
- **ComplaintForm**:
  - Labels + placeholders for clarity.
  - Auto‑filled fields (read‑only).
  - Clean grid layout.
- **CopilotChat**:
  - Upload icon 📎 for file input.
  - Purple send button ➤ for messages.
  - Scrollable chat history.
  - Bottom input bar for typing.

---

## 🔧 Configuration
- Set your Groq API key in `main.py`:
```python
llm = ChatGroq(
    
    api_key="YOUR_GROQ_API_KEY"
)
```

---

## 📌 Future Enhancements
- Add **progress bar** for file extraction.  
- Save complaints to database (PostgreSQL/MySQL).  
- Role‑based access (QA, Manager).  
- Export complaint reports as PDF.

---

