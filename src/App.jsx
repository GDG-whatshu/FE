import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./routes/Home";
import CreatePage from "./routes/CreatePage";
import GdgDetail from "./routes/GdgDetail";
import CreateSession from "./routes/CreateSession";
import SessionDetail from "./routes/SessionDetail";
import Login from "./routes/Login";
import Join from "./routes/Join";
import "./App.css";

function App() {
  const [cohorts, setCohorts] = useState(() => {
    const saved = localStorage.getItem("gdg_data");
    return saved ? JSON.parse(saved) : [];
  });

  const [sessions, setSessions] = useState(() => {
    const saved = localStorage.getItem("gdg_sessions");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("gdg_data", JSON.stringify(cohorts));
    localStorage.setItem("gdg_sessions", JSON.stringify(sessions));
  }, [cohorts, sessions]);

  const addCohort = (newCohort) => setCohorts((prev) => [newCohort, ...prev]);
  const addSession = (newSession) =>
    setSessions((prev) => [newSession, ...prev]);

  const removeSession = (sessionTitle, cohortId) => {
    if (window.confirm(`'${sessionTitle}' 세션을 삭제하시겠습니까?`)) {
      setSessions((prev) =>
        prev.filter(
          (s) => !(s.title === sessionTitle && s.cohortId === cohortId),
        ),
      );
    }
  };

  const removeCohort = (id) => {
    if (window.confirm(`${id}기 기수를 삭제하시겠습니까?`)) {
      setCohorts((prev) => prev.filter((item) => item.cohortNo !== id));
    }
  };

  return (
    <Router>
      <Navigation />
      <Routes>
        <Route
          path="/"
          element={<Home cohorts={cohorts} removeCohort={removeCohort} />}
        />
        <Route path="/create" element={<CreatePage addCohort={addCohort} />} />
        <Route
          path="/gdg/:id"
          element={
            <GdgDetail sessions={sessions} removeSession={removeSession} />
          }
        />
        <Route
          path="/create-session/:cohortId"
          element={<CreateSession addSession={addSession} />}
        />

        <Route path="/session/:sessionId" element={<SessionDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
      </Routes>
    </Router>
  );
}

export default App;
