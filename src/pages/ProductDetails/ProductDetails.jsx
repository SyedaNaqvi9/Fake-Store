import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './ProductDetails.css';

function ProductDetails({ cart, setCart }) {
  const { id } = useParams();

  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  async function getProduct() {
    setLoading(true);

    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await response.json();
    setProduct(data);
    setLoading(false);
  }

  const handleAddToCart = () => {
    setCart([...cart, product]);
  };

  useEffect(() => {
    getProduct();
  }, [id]);
  return (
    <>
      <div className="loader">{loading && <h3>Loading...</h3>}</div>
      <div className="product">
        <div className="product-image">
          <img src={product.image} alt="" />
        </div>
        <div className="product-details">
          <h1>Product Details</h1>
          <p>
            <b>Category:</b> {product.category}
          </p>
          <h3>{product.title}</h3>
          <p>
            <b>Price:</b> ${product.price}
          </p>
          <p>
            <b>Description:</b> {product.description}
          </p>
          <div className="btn">
            <button onClick={handleAddToCart}>Add to Cart</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
