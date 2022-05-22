import React,{useEffect,useState} from 'react';
import './App.css';
import axios from 'axios'



function App() {
  const [results, setResults] = useState({})
  console.log(results)
  useEffect(() => {
    axios.get('http://localhost:8000').then(res => {
      console.log(res)
    })
    
  }, [])
  return (
    <div>
      <h1>My App</h1>
    </div>
  );
}

export default App;
