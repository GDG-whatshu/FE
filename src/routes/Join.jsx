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

    // 🚀 1. 버튼 클릭 즉시 콘솔에 입력값 출력 (아이디, 비밀번호)
    console.log("--- [회원가입 시도 데이터] ---");
    console.log("아이디(이메일):", form.email);
    console.log("비밀번호:", form.password);
    console.log("---------------------------");

    // 2. 비밀번호 일치 확인
    if (form.password !== form.passwordCheck) {
      alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
      return;
    }

    try {
      // 3. 서버에 회원가입 요청 (api/auth.js의 postSignup 실행)
      const data = await postSignup({
        email: form.email,
        password: form.password,
        role: "MEMBER",
      });

      console.log("✅ 서버 통신 성공:", data);
      alert("회원가입이 완료되었습니다!");
    } catch (error) {
      // 4. 서버가 꺼져있거나 에러가 나면 이리로 들어옴
      console.error("❌ 서버 통신 에러 발생:", error);
      // 에러가 나더라도 테스트를 위해 알림을 띄우고 넘어가게 설정
      alert("서버 연결에 실패했지만, 로그인 페이지로 강제 이동합니다.");
    } finally {
      // 🚀 5. [핵심] 성공하든 실패하든 무조건 로그인 페이지로 이동!
      navigate("/login");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box join-box">
        <h1 className="auth-title navy-text">관리자 회원가입</h1>
        <form className="auth-form" onSubmit={handleSubmit}>
          {/* 이메일 입력 섹션 */}
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

          {/* 비밀번호 입력 섹션 */}
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

          {/* 비밀번호 확인 입력 섹션 */}
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

          {/* 가입하기 버튼 */}
          <button type="submit" className="auth-btn navy-btn">
            가입하기
          </button>
        </form>

        {/* 하단 링크 */}
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
