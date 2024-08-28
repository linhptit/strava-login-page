import React from 'react';
import HomePage from './pages/HomePage';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CallbackPage from "./pages/CallbackPage";

const App: React.FC = () => {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/auth" element={<CallbackPage />} />
          </Routes>
      </Router>
  );
};

export default App;
