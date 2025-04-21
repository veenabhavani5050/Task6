import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart, dispatch } = useCart();

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discount = total * 0.10;
  const finalTotal = total - discount;

  return (
    <div className="container">
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <table className="cart-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Total</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map(item => (
                <tr key={item.id}>
                  <td>{item.title}</td>
                  <td>${item.price}</td>
                  <td>
                    <div className="cart-actions">
                      <button onClick={() => dispatch({ type: 'DECREASE_QUANTITY', payload: item })}>-</button>
                      {item.quantity}
                      <button onClick={() => dispatch({ type: 'INCREASE_QUANTITY', payload: item })}>+</button>
                    </div>
                  </td>
                  <td>${(item.price * item.quantity).toFixed(2)}</td>
                  <td>
                    <button className="remove" onClick={() => dispatch({ type: 'REMOVE_FROM_CART', payload: item })}>Remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div style={{ textAlign: 'right', marginTop: '20px' }}>
            <p>Total: ${total.toFixed(2)}</p>
            <p>Discount (10%): -${discount.toFixed(2)}</p>
            <h2>Final Total: ${finalTotal.toFixed(2)}</h2>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
