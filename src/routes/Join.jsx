import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { postSignup } from "../api/auth.js";
import "./Join.css";

function Join() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
    passwordCheck: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.password !== form.passwordCheck) {
      console.error("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
      return;
    }

    try {
      const data = await postSignup({
        email: form.email,
        password: form.password,
        role: "MEMBER",
      });
      console.log(data);
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box join-box">
        <h1 className="auth-title navy-text">관리자 회원가입</h1>
        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label>이메일</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="이메일을 입력하세요"
              required
            />
          </div>
          <div className="input-group">
            <label>비밀번호</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="비밀번호를 입력하세요"
              required
            />
          </div>
          <div className="input-group">
            <label>비밀번호 확인</label>
            <input
              type="password"
              name="passwordCheck"
              value={form.passwordCheck}
              onChange={handleChange}
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
