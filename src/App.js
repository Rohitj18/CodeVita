import "./App.css";
import Nav from "./components/Nav";
import HomePage from "./pages/HomePage";
import DataSciencePage from "./pages/DataSciencePage";
import CyberPage from "./pages/CyberPage";
import SkillsBrewry from "./pages/SkillsBrewry";
import TandC from "./pages/TandC";
import {Routes,Route} from 'react-router-dom';


function App() {
  return (
    <div className="relative">
      <Nav/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/skillbrewry" element={<SkillsBrewry/>}/>
        <Route path="/datascience" element={<DataSciencePage/>}/>
        <Route path="/cybersecurity" element={<CyberPage/>}/>
        <Route path="/tc" element={<TandC/>}/>
      </Routes>
    </div>
  );
}

export default App;
