import React from "react";
import { useParams, useNavigate } from "react-router-dom";

function SessionDetail() {
  const { sessionId } = useParams();
  const navigate = useNavigate();

  return (
    <div style={{ padding: "60px" }}>
      <button onClick={() => navigate(-1)}>← 뒤로가기</button>
    </div>
  );
}
export default SessionDetail;
