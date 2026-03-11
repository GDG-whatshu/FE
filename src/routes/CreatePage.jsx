import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CreatePage.css";

function CreatePage({ addCohort }) {
  const [generation, setGeneration] = useState("");
  const [organizer, setOrganizer] = useState("");
  const [startDate, setStartDate] = useState("2026-03-11");
  const [endDate, setEndDate] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newCohortData = {
      cohortNo: Number(generation),
      organizer: organizer,
      startDate: startDate,
      endDate: endDate,
      members: 0,
      status: "진행중",
    };

    try {
      if (addCohort) {
        addCohort(newCohortData);
      }

      alert(`${generation}기 기수가 생성되었습니다!`);
      navigate("/");
    } catch (error) {
      console.error("데이터 추가 실패:", error);
      alert("기수 생성 중 오류가 발생했습니다.");
    }
  };

  return (
    <div className="create-page-container">
      <div className="create-card">
        <header className="create-header">
          <h2 className="create-title">새로운 기수 시작</h2>
          <p className="create-subtitle">
            정보를 입력하여 새로운 기수를 등록하세요.
          </p>
        </header>

        <form onSubmit={handleSubmit}>
          <div className="input-section">
            <label className="input-label">기수 (Generation)</label>
            <div className="generation-input-wrapper">
              <input
                type="number"
                className="full-input"
                placeholder="예: 7"
                value={generation}
                onChange={(e) => setGeneration(e.target.value)}
                required
              />
              <span className="unit-text">기</span>
            </div>
          </div>

          <div className="input-section">
            <label className="input-label">대표 오거나이저</label>
            <input
              type="text"
              className="full-input"
              placeholder="이름을 입력하세요"
              value={organizer}
              onChange={(e) => setOrganizer(e.target.value)}
              required
            />
          </div>

          <div className="date-row">
            <div className="input-section">
              <label className="input-label">시작일</label>
              <input
                type="date"
                className="date-input"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                required
              />
            </div>
            <div className="input-section">
              <label className="input-label">종료일</label>
              <input
                type="date"
                className="date-input"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="form-actions">
            <button
              type="button"
              className="cancel-btn"
              onClick={() => navigate("/")}
            >
              취소
            </button>
            <button type="submit" className="submit-btn">
              기수 생성하기
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreatePage;
