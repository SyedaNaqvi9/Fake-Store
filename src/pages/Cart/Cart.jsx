import "./Cart.css";
function Cart({ cart, setCart }) {
  const total = cart.reduce((acc, c) => acc + c.price, 0);

  const handleDelete = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
  };

  const handleClear = () => {
     setCart([]);

  }
  return (
    <>
      <div className="cart-header">
        <h1>My Cart</h1>
      </div>

      <div className="cart-msg">
        {cart.length === 0 && <h2>Your cart is empty</h2>}
      </div>

      {cart.map((c, index) => (
        <div key={c.id}>
          <div className="cart">
            <div className="cart-image">
              <img src={c.image} />
            </div>
            <div className="cart-desc">
              <p>{c.title}</p>
              <p>Price: ${c.price}</p>
              <div className="cart-btn">
                <button onClick={() => handleDelete(index)}>
                  Remove from Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="cart-total">
        {total > 0 && <h3>Total: ${total.toFixed(2)}</h3>}
      </div>
      <div className="clear-cart">
        <button onClick={handleClear}>Clear Cart</button>
      </div>
    </>
  );
}

export default Cart;
