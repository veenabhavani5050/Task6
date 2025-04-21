import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { cart, dispatch } = useCart();
  const inCart = cart.find(item => item.id === product.id);

  const toggleCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} className="product-image" />
      <h2 className="product-title">{product.title}</h2>
      <p className="product-desc">{product.description.slice(0, 80)}...</p>
      <div className="product-footer">
        <span className="product-price">${product.price}</span>
        <button onClick={toggleCart} className="product-btn">
          {inCart ? 'Remove from Cart' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;