import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./routes/Home";
import GdgDetail from "./routes/GdgDetail";
import SessionDetail from "./routes/SessionDetail";
import Login from "./routes/Login";
import Join from "./routes/Join";
import CreatePage from "./routes/CreatePage";
import CreateSession from "./routes/CreateSession";
import "./App.css";

function App() {
  const [cohorts, setCohorts] = useState([
    { cohortNo: 7, organizer: "강대현", members: 42, status: "진행중" },
  ]);

  const addCohort = (newCohort) => {
    setCohorts((prev) => [newCohort, ...prev]);
  };

  const removeCohort = (id) => {
    setCohorts(cohorts.filter((c) => c.cohortNo !== id));
  };

  return (
    <Router>
      <Navigation />
      <Routes>
        <Route
          path="/"
          element={<Home cohorts={cohorts} removeCohort={removeCohort} />}
        />

        <Route
          path="/create-cohort"
          element={<CreatePage addCohort={addCohort} />}
        />

        <Route path="/gdg/:id" element={<GdgDetail />} />
        <Route path="/create-session/:cohortId" element={<CreateSession />} />
        <Route path="/session/:sessionId" element={<SessionDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
      </Routes>
    </Router>
  );
}

export default App;
