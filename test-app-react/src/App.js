import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Blogs from "./Blogs";
import About from "./About";
import Contact from "./Contact";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
     
          <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/blogs">Blogs</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          </ul>
      
          
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/blogs" element={<Blogs/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
