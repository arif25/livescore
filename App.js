import React from "react";
import { createBrowserRouter, RouterProvider, Route, BrowserRouter, Routes, } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Home from './Components/Home';
import Favorites from './Components/favorites/Favorites';
import Cricket from "./Components/Assets/cricket/Cricket";
import Football from "./Components/Assets/Football/Football";
import Tennis from "./Components/Assets/tennis/Tennis";
import Kabaddi from "./Components/Assets/Kabaddi/Kabaddi";
import Tournamentitem from "./Components/Assets/Football/tournament/Tournamentitem";
import Tournamentresults from "./Components/Assets/Football/tournament/Tournamentresults";
import Tournamentfixtures from "./Components/Assets/Football/tournament/Tournamentfixtures";
import Tournamentstanding from "./Components/Assets/Football/tournament/Tournamentstanding";
import Tournamentarchive from "./Components/Assets/Football/tournament/Tournamentarchive";

function App() {
  return (   
    <BrowserRouter>
       <Routes>
          // <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/cricket" element={<Cricket />} />
          <Route path="/football" element={<Football />} />
          <Route path="/tennis" element={<Tennis />} />
          <Route path="/kabaddi" element={<Kabaddi />} />

          <Route path="/summary" element={<Tournamentitem />} />
          <Route path="/results" element={<Tournamentresults />} />
          <Route path="/fixtures" element={<Tournamentfixtures />} />
          <Route path="/standing" element={<Tournamentstanding />} />
          <Route path="/archive" element={<Tournamentarchive />} />
       </Routes>
    </BrowserRouter>   
  );
}

export default App;



