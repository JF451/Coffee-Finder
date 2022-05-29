import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import SimpleMap from "./components/SimpleMap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashBoard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Header from "./components/Header";

function App() {
  const [zip, setZip] = useState("");
  const [businesses, setBusinesses] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    axios.post("http://localhost:8000", { zip: zip }).then((res) => {
      console.log(res);
      setBusinesses(res.data.businesses);
    });
  }

  const handleChange = (event) => {
    setZip(event.target.value);
  };

  return (
    <>
      <Router>
        <div className="containeer">
          <Header />
          <Routes>
            <Route path="/" element={<DashBoard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
          <SimpleMap businesses={businesses} />
          <form onSubmit={handleSubmit}>
            <label>
              ZIP:
              <input
                type="text"
                value={zip}
                name="zip"
                onChange={handleChange}
              />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}
export default App;
