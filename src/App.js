import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import News from "./pages/News";
import Contact from "./pages/Contact";
import Nav from "./component/Nav";
function App() {
 
  return (
    <div>
    <Nav />

    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/news" element={<News />}/>
      <Route path="/contact" element={<Contact />}/>
    </Routes>
    </div>
  );
}

export default App;
