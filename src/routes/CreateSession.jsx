import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./CreateSession.css";

function CreateSession({ addSession }) {
  const { cohortId } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [type, setType] = useState("GTL Weekly");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newSession = {
      cohortId: cohortId,
      title,
      date,
      type,
      description,
    };

    addSession(newSession);
    alert("새로운 세션이 생성되었습니다!");
    navigate(`/gdg/${cohortId}`);
  };

  return (
    <div className="create-session-container">
      <div className="create-session-card">
        <h2>새로운 세션 생성</h2>
        <form onSubmit={handleSubmit}>
          {/* 세션 제목 */}
          <div className="input-group">
            <label>세션 제목</label>
            <input
              type="text"
              placeholder="예: 2주차 - React 심화"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="row">
            <div className="input-group">
              <label>날짜</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label>세션 종류</label>
              <select value={type} onChange={(e) => setType(e.target.value)}>
                <option value="GTL Weekly">GTL Weekly</option>
                <option value="Quarterly">Quarterly</option>
              </select>
            </div>
          </div>
          <p className="help-text">
            * Weekly는 4회 중 3회, Monthly는 3회 중 2회 필참 로직이 적용됩니다.
          </p>

          {/* 세션 설명 */}
          <div className="input-group">
            <label>세션 설명</label>
            <textarea
              placeholder="세션에 대한 간단한 설명을 적어주세요."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          {/* 하단 버튼 */}
          <div className="form-actions">
            <button
              type="button"
              className="cancel-btn"
              onClick={() => navigate(-1)}
            >
              취소
            </button>
            <button type="submit" className="submit-btn">
              생성하기
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateSession;
