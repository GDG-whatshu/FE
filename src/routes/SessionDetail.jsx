import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios"; // axios 라이브러리 추가
import "./SessionDetail.css";

function SessionDetail() {
  const { sessionId } = useParams();

  // 1. 상태 관리 (데이터를 담을 공간)
  const [sessionData, setSessionData] = useState(null);
  const [attendedMembers, setAttendedMembers] = useState([]);
  const [guests, setGuests] = useState([]);
  const [loading, setLoading] = useState(true);

  // 2. .env에서 API 주소 가져오기
  // Vite 사용 시: import.meta.env.VITE_API_URL
  // CRA 사용 시: process.env.REACT_APP_API_URL
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchSessionData = async () => {
      try {
        setLoading(true);
        // 3. API 호출 (sessionId를 경로에 포함)
        const response = await axios.get(`${API_URL}/sessions/${sessionId}`);

        // 서버에서 주는 데이터 구조에 맞게 설정하세요
        setSessionData(response.data);
        setAttendedMembers(response.data.attendedMembers || []);
        setGuests(response.data.guests || []);
      } catch (error) {
        console.error("데이터를 불러오는데 실패했습니다:", error);
      } finally {
        setLoading(false);
      }
    };

    if (sessionId) {
      fetchSessionData();
    }
  }, [sessionId, API_URL]);

  if (loading) return <div className="loading">데이터를 불러오는 중...</div>;

  return (
    <div className="detail-container">
      <div className="detail-header-card">
        <div className="header-info">
          <span className="tag-weekly">
            {sessionData?.type || "GTL Weekly"}
          </span>
          <h1 className="session-main-title">
            {sessionData?.title || "세션 정보를 불러올 수 없습니다."}
          </h1>
          <p className="session-date">
            📅 {sessionData?.date || "날짜 정보 없음"}
          </p>
        </div>
        <button className="qr-button">
          <span className="qr-icon">📷</span> QR 코드 띄우기
        </button>
      </div>

      <div className="attendance-section">
        <div className="list-box">
          <h3 className="list-title green-text">
            ✅ 출석 멤버{" "}
            <span className="count">{attendedMembers.length}명</span>
          </h3>
          <ul className="member-list">
            {attendedMembers.map((m, i) => (
              <li key={i} className="member-item">
                <div className="user-info">
                  <div className="user-icon">👤</div>
                  <span>{m.name}</span>
                </div>
                <span className="time">{m.time}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="list-box">
          <h3 className="list-title yellow-text">
            🎉 방문자 (Guest) <span className="count">{guests.length}명</span>
          </h3>
          <ul className="member-list">
            {guests.map((g, i) => (
              <li key={i} className="member-item">
                <div className="user-info">
                  <div className="user-icon guest">G</div>
                  <span>{g.name}</span>
                </div>
                <span className="time">{g.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SessionDetail;
