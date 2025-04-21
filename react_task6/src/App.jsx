import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Products from './pages/Products';
import Cart from './pages/Cart';
import { CartProvider } from './context/CartContext';
import './App.css';

const App = () => {
  return (
    <CartProvider>
      <Router>
        <div className="navbar">
          <h1 className="logo">🛍 Fake Store</h1>
          <nav className="nav-links">
            <Link to="/">Products</Link>
            <Link to="/cart">Cart</Link>
          </nav>
        </div>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;