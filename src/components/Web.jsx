import React from "react";
import { Link } from "react-router-dom";
import "./Web.css";

function Web({ id, organizer, members, status, onDelete }) {
  const handleDelete = (e) => {
    e.preventDefault(); // 링크 이동 방지
    onDelete(id); // 삭제 함수 실행
  };

  return (
    <div className="web-card-wrapper">
      <Link to={`/gdg/${id}`} className="card-link">
        <div className="web-card">
          <div className="card-top">
            <span className="status-badge">{status}</span>
            <div className="card-actions">
              {/* 💡 삭제 버튼 추가 */}
              <button className="delete-icon-btn" onClick={handleDelete}>
                ✕
              </button>
              <div className="arrow-circle">→</div>
            </div>
          </div>
          <h2 className="card-title">GDG {id}기</h2>
          <hr className="divider" />
          <div className="card-info">
            <div>
              <span className="info-label">오거나이저</span>{" "}
              <span className="info-value">{organizer}</span>
            </div>
            <div>
              <span className="info-label">멤버</span>{" "}
              <span className="info-value">{members}명</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Web;
