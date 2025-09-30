import { useState } from "react";
import { addToCart, removeFromCart } from "./cart";

function App() {
  const [cart, setCart] = useState([]);

  const handleAdd = () => {
    const newItem = { id: Date.now(), name: "상품" };
    setCart(addToCart(cart, newItem));
  };

  const handleRemove = (id) => {
    setCart(removeFromCart(cart, id));
  };

  return (
    <div>
      <h1>My Shop</h1>
      <button onClick={handleAdd}>장바구니 담기</button>
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => handleRemove(item.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
