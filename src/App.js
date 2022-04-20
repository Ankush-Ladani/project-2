import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import "./index.css";
import About from "./Components/About";
import Interest from "./Components/images/Interest";
import Footer from "./Components/Footer";
function App() {
  return (
    <div className="App">
      <div className="card">
        <Navbar></Navbar>
        <About></About>
        <Interest></Interest>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
