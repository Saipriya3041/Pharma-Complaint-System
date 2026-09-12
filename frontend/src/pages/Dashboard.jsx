import ComplaintForm from "../components/ComplaintForm";
import CopilotChat from "../components/CopilotChat";
import "./Dashboard.css";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <div className="left-panel">
        <ComplaintForm />
      </div>
      <div className="right-panel">
        <CopilotChat />
      </div>
    </div>
  );
}
