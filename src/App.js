import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUserName } from "./features/user/userSlice";
import Header from "./components/Header"; // Assuming Header is in the components folder
import Home from "./components/Home"; // Your Home component
import Login from "./components/Login"; // Your Login component

// Route Guard component to protect routes
const ProtectedRoute = ({ children }) => {
  const userName = useSelector(selectUserName);
  return userName ? children : <Navigate to="/" replace />;
};

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
