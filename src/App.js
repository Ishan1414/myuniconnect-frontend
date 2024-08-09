import "./App.css";
import { HashRouter } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router";
import { useDispatch } from "react-redux";
import * as client from "./user/client.ts";
import { setUser } from "./user/reducer.ts";
import Auth from "./user/auth.tsx";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const account = await client.profile();
        return account;
      } catch (e) {
        localStorage.removeItem("token");
      }
    };
    fetchProfile().then((e) => {
      if (e != null) {
        dispatch(setUser(e));
      }
    });
  }, []);
  return (
    <HashRouter>
      <Routes>
        <Route path="/signin" element={<Auth />} />

      </Routes>
    </HashRouter>
  );
}

export default App;