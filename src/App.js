import Navbar from "./components/Navbar";
import Herosection from "./components/Herosection"
import Skillsection from "./components/Skillsection";
import Aboutme from "./components/Aboutme";

function App() {
  return (
    <div>
    <Navbar/>

    <div className="page-sections">
    <Herosection/>
   <Skillsection/>
    <Aboutme/>
    </div>

    </div>
  ) ;
}

export default App;
