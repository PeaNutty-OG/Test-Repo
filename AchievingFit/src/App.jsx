import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import LogInPage from "./pages/LogIn.jsx";
import WorkoutTemplate from "./pages/WorkoutTemplate.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/LogIn" element={<LogInPage />}></Route>
        <Route path="/Workout" element={<WorkoutTemplate />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
