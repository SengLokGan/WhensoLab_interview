import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

import { loginUser } from "../slices";
import { useAppDispatch } from "../hooks";
import { customToast } from "../components";

export function useAuth() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleLogin = (email, password) => {
    dispatch(loginUser({ email, password }));
  };

  const handleLogout = useCallback(() => {
    localStorage.clear();
    navigate("/login");
    customToast("Success Logout!", "success");
  }, [navigate]);

  return { handleLogin, handleLogout };
}
