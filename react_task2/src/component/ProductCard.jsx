import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="product-card">
      <img src={product.image} alt= "#"/>
      <h2>{product.title}</h2>
      <p>${product.price}</p>
      <button onClick={() => addToCart(product)}> Add to Cart </button>
    </div>
  );
};

export default ProductCard;
