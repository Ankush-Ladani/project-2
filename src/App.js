import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import "./index.css";
import About from "./Components/About";
import Interest from "./Components/images/Interest";
function App() {
  return (
    <div className="App">
      <div className="card">
        <Navbar></Navbar>
        <About></About>
        <Interest></Interest>
      </div>
    </div>
  );
}

export default App;
