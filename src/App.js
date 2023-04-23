
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './views/home/Home';
import About from './views/about/About';
import Contact from './views/contact/Contact';
import Shop from './views/shop/Shop';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
