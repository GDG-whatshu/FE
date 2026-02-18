import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();
  return (
    <div className="auth-container">
      <div className="auth-box">
        <h1 className="auth-title blue-text">Log In</h1>
        <p className="auth-subtitle">관리자 계정으로 접속하세요</p>
        <form
          className="auth-form"
          onSubmit={(e) => {
            e.preventDefault();
            navigate("/");
          }}
        >
          <div className="input-group">
            <label>이메일</label>
            <input type="email" placeholder="admin@gdg.com" required />
          </div>
          <div className="input-group">
            <label>비밀번호</label>
            <input type="password" placeholder="********" required />
          </div>
          <button type="submit" className="auth-btn blue-btn">
            로그인하기
          </button>
        </form>
        <p className="auth-footer">
          계정이 없으신가요?{" "}
          <Link to="/join" className="link-no-underline">
            회원가입
          </Link>
        </p>
      </div>
    </div>
  );
}
export default Login;
