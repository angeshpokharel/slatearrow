import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Welcome } from "./welcome/welcome";
import { Services } from "./services";
import { Industries } from "./industries";
import { Insights } from "./insights";
import { About } from "./about";
import { Careers } from "./careers";
import { Contact } from "./contact";

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/services" element={<Services />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
} 