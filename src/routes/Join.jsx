import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Join.css";

function Join() {
  const navigate = useNavigate();
  return (
    <div className="auth-container">
      <div className="auth-box join-box">
        <h1 className="auth-title navy-text">관리자 회원가입</h1>
        <form
          className="auth-form"
          onSubmit={(e) => {
            e.preventDefault();
            navigate("/login");
          }}
        >
          <div className="input-group">
            <label>이메일</label>
            <input type="email" placeholder="이메일을 입력하세요" required />
          </div>
          <div className="input-group">
            <label>비밀번호</label>
            <input
              type="password"
              placeholder="비밀번호를 입력하세요"
              required
            />
          </div>
          <div className="input-group">
            <label>비밀번호 확인</label>
            <input
              type="password"
              placeholder="비밀번호를 다시 입력하세요"
              required
            />
          </div>
          <button type="submit" className="auth-btn navy-btn">
            가입하기
          </button>
        </form>
        <div className="auth-footer">
          <Link to="/login" className="link-no-underline gray-text">
            로그인으로 돌아가기
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Join;
