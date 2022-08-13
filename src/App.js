import Navbar from "./components/Navbar";
import Herosection from "./components/Herosection"
import Skillsection from "./components/Skillsection";

function App() {
  return (
    <div>
    <Navbar/>

    <div className="page-sections">
    <Herosection/>
   <Skillsection/>
    </div>

    </div>
  ) ;
}

export default App;
