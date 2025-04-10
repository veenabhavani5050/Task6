import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map(item => (
          <div key={item.id} className="cart-item">
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img src={item.image} alt={item.title} />
              <span>{item.title}</span>
            </div>
            <div>
              <span>${item.price}</span>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
