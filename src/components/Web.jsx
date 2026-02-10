import React from "react";
import "./Web.css";
import { Link } from "react-router-dom";

// id 중복을 제거한 최종본
function Web({ id, title, organizer, members, status }) {
  return (
    <Link to={`/gdg/${id}`} className="card-link">
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
    </Link>
  );
}

export default Web;
