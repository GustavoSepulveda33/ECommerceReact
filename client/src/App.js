
import './App.css';

import {BrowserRouter, Routes, Route,} from "react-router-dom"; 

import Homepage from "./pages/Homepage";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Cart from './pages/Cart';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
