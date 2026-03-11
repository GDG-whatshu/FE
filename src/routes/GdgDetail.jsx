import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import "./GdgDetail.css";

function GdgDetail({ sessions, removeSession }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const currentSessions = sessions.filter(
    (s) => String(s.cohortId) === String(id),
  );

  // 삭제 핸들러
  const handleDeleteSession = (e, sessionTitle) => {
    e.preventDefault(); // 카드 클릭 시 상세 페이지 이동 방지
    e.stopPropagation(); // 이벤트 버블링 방지
    removeSession(sessionTitle, id);
  };

  return (
    <div className="detail-container">
      <header className="detail-header">
        <div className="header-left">
          <div className="status-row">
            <span className="running-badge">RUNNING</span>
            <span className="organizer-name">Organizer 강대헌</span>
          </div>
          <h1 className="dashboard-title">GDG {id}기 Dashboard</h1>
        </div>
        <button
          className="add-session-btn"
          onClick={() => navigate(`/create-session/${id}`)}
        >
          + 세션 생성하기
        </button>
      </header>

      {/* 💡 content-section 클래스가 제목과 카드 사이의 간격을 담당합니다 */}
      <section className="content-section">
        <h3>📅 진행된 세션</h3>
        <div className="session-scroll-list">
          {currentSessions.length > 0 ? (
            currentSessions.map((s, idx) => (
              <div key={idx} className="session-card-wrapper">
                <Link to={`/session/${idx}`} className="session-card-link">
                  <div className="session-card">
                    <div className="session-card-top">
                      {/* 좌측: 배지 */}
                      <span
                        className={`type-tag ${s.type?.toLowerCase().includes("weekly") ? "weekly" : "quarterly"}`}
                      >
                        {s.type}
                      </span>

                      {/* 💡 우측: 삭제버튼과 날짜를 하나로 묶음 (CSS에서 정렬하기 위함) */}
                      <div className="session-actions">
                        <button
                          className="session-delete-btn"
                          onClick={(e) => handleDeleteSession(e, s.title)}
                        >
                          ✕
                        </button>
                        <span className="date-text">{s.date}</span>
                      </div>
                    </div>

                    <h4 className="session-card-title">{s.title}</h4>

                    <div className="progress-container">
                      <div className="progress-bg">
                        <div
                          className="progress-fill"
                          style={{ width: `90%` }}
                        ></div>
                      </div>
                      <span className="rate-number">출석률 90%</span>
                    </div>
                  </div>
                </Link>
              </div>
            ))
          ) : (
            <p className="no-data-msg">아직 생성된 세션이 없습니다.</p>
          )}
        </div>
      </section>

      {/* 출석부 영역 등 추가 영역... */}
    </div>
  );
}

export default GdgDetail;
