import React from "react";
import { useParams, Link } from "react-router-dom";
import "./GdgDetail.css";

function GdgDetail() {
  const { id } = useParams();

  const sessions = [
    {
      id: 1,
      type: "Quarterly",
      date: "2024-03-02",
      title: "OT & 아이스브레이킹",
      attended: 9.5,
      total: 10,
    },
    {
      id: 2,
      type: "GTL Weekly",
      date: "2024-03-09",
      title: "Git/Github 협업 특강",
      attended: 8.8,
      total: 10,
    },
    {
      id: 3,
      type: "GTL Weekly",
      date: "2024-03-16",
      title: "FE/BE 파트별 스터디",
      attended: 9.2,
      total: 10,
    },
  ];

  const members = [
    { name: "김코딩", role: "Member", attendance: [true, true, false] },
    { name: "이자바", role: "Member", attendance: [true, false, true] },
    { name: "박리액", role: "Member", attendance: [true, true, true] },
  ];

  return (
    <div className="detail-container">
      <header className="detail-header">
        <div className="header-left">
          <div className="status-row">
            <span className="running-badge">RUNNING</span>
            <span className="organizer-name">Organizer 강대현</span>
          </div>
          <h1 className="dashboard-title">GDG {id}기 Dashboard</h1>
        </div>
        <button className="add-session-btn">+ 세션 생성하기</button>
      </header>

      <section className="content-section">
        <h3>📅 진행된 세션</h3>
        <div className="session-scroll-list">
          {sessions.map((s) => {
            const rate = Math.round((s.attended / s.total) * 100);
            return (
              <Link
                to={`/session/${s.id}`}
                key={s.id}
                className="session-card-link"
              >
                <div className="session-card">
                  <div className="session-card-top">
                    <span
                      className={`type-tag ${s.type.toLowerCase().includes("weekly") ? "weekly" : "quarterly"}`}
                    >
                      {s.type}
                    </span>
                    <span className="date-text">{s.date}</span>
                  </div>
                  <h4 className="session-card-title">{s.title}</h4>
                  <div className="progress-container">
                    <div className="progress-bg">
                      <div
                        className="progress-fill"
                        style={{ width: `${rate}%` }}
                      ></div>
                    </div>
                    <span className="rate-number">출석률 {rate}%</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="content-section">
        <div className="table-header">
          <h3>👥 전체 멤버 출석부</h3>
          <span className="total-count">총 {members.length}명</span>
        </div>
        <div className="table-wrapper">
          <table className="attendance-table">
            <thead>
              <tr>
                <th>이름</th>
                <th>출석률</th>
                {sessions.map((s) => (
                  <th key={s.id}>
                    <div className="table-date">{s.date.slice(5)}</div>
                    <div className="table-session-type">
                      {s.type.toUpperCase()}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {members.map((m, idx) => {
                const attendedCount = m.attendance.filter((a) => a).length;
                const totalRate = Math.round(
                  (attendedCount / sessions.length) * 100,
                );
                return (
                  <tr key={idx}>
                    <td className="member-name">
                      {m.name} <br /> <span className="role">{m.role}</span>
                    </td>
                    <td className="member-rate">{totalRate}%</td>
                    {m.attendance.map((isPresent, i) => (
                      <td key={i}>
                        <span
                          className={`check-circle ${isPresent ? "present" : "absent"}`}
                        >
                          {isPresent ? "O" : "X"}
                        </span>
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
          <button
            className="add-member-footer-btn"
            onClick={() => alert("멤버 추가 기능을 구현해 보세요!")}
          >
            + 멤버 추가하기
          </button>
        </div>
      </section>
    </div>
  );
}

export default GdgDetail;
