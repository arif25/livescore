import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Apifootball() {
  const [data, setData] = useState([]);

  useEffect(() =>{
  axios("https://api-football-standings.azharimm.site/leagues").then(
    (res) => {
      console.log(res.data.data);
      setData(res.data.data);
    }
  )
  }, []);

  return (
    <div className="App">
      Football Live score    
    </div>
  );
}

export default Apifootball;
