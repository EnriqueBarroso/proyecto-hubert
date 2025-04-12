import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AnimatedRoutes from "./routes/AnimateRoutes";

function App() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
