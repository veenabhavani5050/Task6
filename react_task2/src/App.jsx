import { Routes, Route } from 'react-router-dom';
import Products from './pages/Product'
import Cart from './pages/cart';
import Navbar from './component/Navbar';
import './index.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default App;
