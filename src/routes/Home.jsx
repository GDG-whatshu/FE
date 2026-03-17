import React from "react";
import { Link } from "react-router-dom";
import Web from "../components/Web.jsx";
import "./Home.css";

function Home({ cohorts, removeCohort }) {
  return (
    <main className="home-container">
      <header className="hero">
        <h1>
          안녕하세요, <span className="blue">GDG Campus</span>입니다.
        </h1>
        <p className="hero-subtitle">
          참여하고 계신 기수를 선택하여 출석 현황을 확인하세요.
        </p>
      </header>

      <div className="action-bar">
        {/* 🚀 주소를 /create-cohort로 변경하여 CreatePage가 뜨게 합니다 */}
        <Link to="/create-cohort">
          <button className="create-btn"> + 새로운 기수 생성</button>
        </Link>
      </div>

      <div className="card-grid">
        {cohorts && cohorts.length > 0 ? (
          cohorts.map((item, index) => (
            <Web
              key={index}
              id={item.cohortNo}
              organizer={item.organizer}
              members={item.members || 0}
              status={item.status || "진행중"}
              onDelete={removeCohort}
            />
          ))
        ) : (
          <p className="no-data">등록된 기수가 없습니다.</p>
        )}
      </div>
    </main>
  );
}

export default Home;
