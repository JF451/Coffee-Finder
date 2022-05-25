import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import SimpleMap from "./SimpleMap";

function App() {
  const [zip, setZip] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    axios.post("http://localhost:8000", { zip: zip }).then((res) => {
      console.log(res);
    });
  }

  const handleChange = (event) => {
    setZip(event.target.value);
  };

  return (
    <div>
      <SimpleMap />
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
