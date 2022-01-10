import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { Navbar, ScrollToTop, Sidebar, Chatbot, Footer } from './components';
import {Home, About, Guide, Info, News, Article, Policy, Location, Contact} from './pages'
import "antd/dist/antd.css";
import "./reset.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <ScrollToTop />
        <Sidebar />
        <Chatbot />
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/guide" element={<Guide />} />
            <Route path="/info" element={<Info />} />
            <Route path="/news" element={<News />} />
            <Route path="/article" element={<Article />} />
            <Route path="/policy" element={<Policy />} />
            <Route path="/location" element={<Location />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/" element={<Home/>}/>
          </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
