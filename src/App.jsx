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
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
      </Routes>
    </Router>
  );
}

export default App;
