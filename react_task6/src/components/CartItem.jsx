import { useCart } from '../context/CartContext';

const CartItem = ({ item }) => {
  const { dispatch } = useCart();

  return (
    <tr>
      <td>{item.title}</td>
      <td>{item.quantity}</td>
      <td>${item.price}</td>
      <td>${(item.price * item.quantity).toFixed(2)}</td>
      <td>
        <button onClick={() => dispatch({ type: 'DECREASE_QUANTITY', payload: item })}>-</button>
        <button onClick={() => dispatch({ type: 'INCREASE_QUANTITY', payload: item })}>+</button>
        <button onClick={() => dispatch({ type: 'REMOVE_FROM_CART', payload: item })}>Remove</button>
      </td>
    </tr>
  );
};

export default CartItem;