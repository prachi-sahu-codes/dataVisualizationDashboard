import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export const RequiresAuth = ({ children }) => {
  const location = useLocation();
  const token = useSelector((state) => state?.auth?.token);
  return token ? (
    <div>{children}</div>
  ) : (
    <Navigate to="/login" state={{ from: location?.pathname }} replace />
  );
};

export default RequiresAuth;
