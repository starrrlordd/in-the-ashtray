import { Routes, Route } from "react-router-dom";

import Homepage from "./components/Homepage";

import Arts from "./pages/Arts";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/arts" element={<Arts />} />
      </Routes>
    
  );
}

export default App;
