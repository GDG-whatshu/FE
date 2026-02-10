import React from "react";
import Web from "../components/Web.jsx";
import "./Home.css";

function Home() {
  return (
    <main className="home-container">
      <header className="hero">
        <h1>
          안녕하세요, <span className="blue">GDG Campus</span>입니다.
        </h1>
        <p>참여하고 계신 기수를 선택하여 출석 현황을 확인하세요.</p>
      </header>

      <div className="action-bar">
        <button className="create-btn"> + 새로운 기수 생성</button>
      </div>

      <div className="card-grid">
        <Web
          id={1}
          title="GDG 7기"
          organizer="강대현"
          members="42"
          status="진행중"
        />
        <Web
          id={2}
          title="GDG 6기"
          organizer="김경록"
          members="38"
          status="수료 완료"
        />
      </div>
    </main>
  );
}

export default Home;
