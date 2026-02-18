import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="logo">
          <span className="dots">
            <span style={{ color: "#4285f4" }}>●</span>
            <span style={{ color: "#ea4335" }}>●</span>
            <span style={{ color: "#fbbc05" }}>●</span>
            <span style={{ color: "#34a853" }}>●</span>
          </span>
          GDG Attendance
        </Link>
        <Link to="/login" className="nav-login-btn">
          로그인하기
        </Link>
      </div>
    </nav>
  );
}
export default Navigation;
