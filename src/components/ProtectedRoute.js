import { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUserName } from "../features/user/userSlice";

// Route Guard component
const ProtectedRoute = () => {
  const navigate = useNavigate();
  const userName = useSelector(selectUserName);

  useEffect(() => {
    if (!userName) {
      navigate("/");
    }
  }, [userName, navigate]);

  return <Outlet />;
};

export default ProtectedRoute;
