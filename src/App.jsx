import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./routes/Home";
import GdgDetail from "./routes/GdgDetail";
import SessionDetail from "./routes/SessionDetail";
import Login from "./routes/Login";
import Join from "./routes/Join";
import "./App.css";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gdg/:id" element={<GdgDetail />} />
        <Route path="/session/:sessionId" element={<SessionDetail />} />

        {/* 💡 이 부분이 중요합니다! 경로와 컴포넌트가 일치하는지 확인하세요 */}
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
      </Routes>
    </Router>
  );
}

export default App;

const [groups, setGroups] = useState([]);
