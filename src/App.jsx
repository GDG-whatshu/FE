import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// 1. 폴더 구조에 맞게 정확한 경로로 불러오기
import Navigation from "./components/Navigation";
import Home from "./routes/Home";
import GdgDetail from "./routes/GdgDetail";
import SessionDetail from "./routes/SessionDetail"; // 새로 만든 파일

// CSS 파일 불러오기
import "./App.css";

function App() {
  return (
    <Router>
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/gdg/:id" element={<GdgDetail />} />

        <Route path="/session/:sessionId" element={<SessionDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
