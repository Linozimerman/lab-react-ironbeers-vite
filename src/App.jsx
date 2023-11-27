import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar"
import HomePage from "./components/HomePage";
import AllBeersPage from "./components/AllBeersPage";
import RandomBeerPage from "./components/RandomBeerPage";
import AddBeerPage from "./components/AddBeerPage";
import BeerDetailsPage from "./components/BeerDetailsPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/beers' element={<AllBeersPage />} />
        <Route path='/random-beer' element={<RandomBeerPage />} />
        <Route path='/new-beer' element={<AddBeerPage />} />
        <Route path='/beers/:beerId' element={<BeerDetailsPage />} />
      </Routes>
    </div>
  );

}

export default App;
