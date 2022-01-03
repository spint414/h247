import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { Navbar, ScrollToTop, Sidebar, Chatbot, CTA } from './components';
import {Home, About, Guide, Info, News, Article, Policy} from './pages'

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
            <Route path="/" element={<Home/>}/>
          </Routes>
        <CTA />
      </div>
    </Router>
  );
}

export default App;
