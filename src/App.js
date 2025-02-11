import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import RoutedPage from "./RoutedPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/routed" element={<RoutedPage />} />
      </Routes>
    </Router>
  );
};

export default App;