import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './page/Cart';
import Wishlist from './page/Wishlist';
import Home from './page/Home';
import Header from './component/Header';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/cart" element={<Cart />} /> 
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
      <Footer/>
      
    </div>
  );
}

export default App;