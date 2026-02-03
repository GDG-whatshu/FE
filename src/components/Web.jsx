import React from "react";
import "./Web.css";

function Web({ title, organizer, members, status }) {
  return (
    <div className="web-card">
      <div className="card-top">
        <span
          className={`status-badge ${status === "진행중" ? "ongoing" : "completed"}`}
        >
          {status}
        </span>
        <div className="arrow-circle">→</div>
      </div>
      <h2 className="card-title">{title}</h2>
      <hr className="divider" />
      <div className="card-info">
        <span className="info-label">오거나이저</span>
        <span className="info-value">{organizer}</span>
        <span className="info-label margin-left">멤버</span>
        <span className="info-value">{members}명</span>
      </div>
    </div>
  );
}

export default Web;
