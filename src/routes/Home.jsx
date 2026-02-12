import { useState } from "react";
import Web from "../components/Web.jsx";
import "./Home.css";
import { getCohorts } from "../api/cohort.js";

function Home() {
  const [cohorts, setCohorts] = useState();

  const handleCohorts = async () => {
    const list = await getCohorts();
    setCohorts(list);
  };

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
        {cohorts?.map((item) => (
          <Web id={item.cohortNo} organizer={item.organizer} />
        ))}
      </div>
    </main>
  );
}

export default Home;
