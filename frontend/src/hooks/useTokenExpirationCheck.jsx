import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import  jwtDecode from "jwt-decode";
import { setIsFirstTime, setUser } from "@/store/authSlice";
import { useEffect } from "react";

const useTokenExpirationCheck = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.auth);

  const isTokenExpired = (token) => {
    const decoded = jwtDecode(token);
    const currentTime = Date.now() / 1000; // Current time in seconds
    return decoded.exp < currentTime; // Token is expired if true
  };

  const logout = () => {
    // Clear cookies, local storage, etc.
    localStorage.removeItem("token"); // Assuming token is stored in local storage// Redirect to login page
  };

  // Automatically log out user if token has expired
  const token = localStorage.getItem("token");
  if (token && isTokenExpired(token)) {
    dispatch(setUser(null));
    logout();
  }

};

export default useTokenExpirationCheck
