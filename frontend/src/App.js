import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import SimpleMap from "./SimpleMap";

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
    <div>
      <SimpleMap businesses={businesses} />
      <form onSubmit={handleSubmit}>
        <label>
          ZIP:
          <input type="text" value={zip} name="zip" onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
export default App;
