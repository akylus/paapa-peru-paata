import "./App.css";
import Home from "./pages/Home";
// import AddSong from "./pages/AddSong";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    // <Router>
    //   <div className="App">
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/add-song" element={<AddSong />} />
    //     </Routes>
    //   </div>
    // </Router>
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
