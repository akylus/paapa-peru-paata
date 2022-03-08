import "./App.scss";
import Home from "./pages/Home";
import AddSong from "./pages/AddSong";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-song" element={<AddSong />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
