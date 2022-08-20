import Navbar from "./components/Navbar";
import Herosection from "./components/Herosection"
import Skillsection from "./components/Skillsection";
import Aboutme from "./components/Aboutme";
import Projectsection from "./components/Projectsection";
import Technologies from "./components/Technologies";

function App() {
  return (
    <div>
    <Navbar/>
    <div className="page-sections">
    <Herosection/>
   <Skillsection/>
    <Aboutme/>
    <Projectsection/>
    <Technologies/>
    </div>

    </div>
  ) ;
}

export default App;
