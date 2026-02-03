import React from "react";
import "./Navigation.css";

function Navigation() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">
          <span className="dots">
            <span style={{ color: "#4285f4" }}>●</span>
            <span style={{ color: "#ea4335" }}>●</span>
            <span style={{ color: "#fbbc05" }}>●</span>
            <span style={{ color: "#34a853" }}>●</span>
          </span>
          GDG Attendance
        </div>
        <div className="login-btn">로그인하기</div>
      </div>
    </nav>
  );
}

export default Navigation;
