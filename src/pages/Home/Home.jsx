import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <>
      <div className="header">
        <h1>Welcome to FakeStore</h1>
        <p>Browse products, view details, and manage your shopping cart.</p>
      </div>

      <div className="home-button">
        <Link to="/products">
          <button>Shop Now</button>
        </Link>
      </div>

      <div className="home-card">
        <div className="feature-card">
          <p>Quickly find products by title</p>
        </div>

        <div className="feature-card">
          <p>View pricing, descriptions and categories</p>
        </div>

        <div className="feature-card">
          <p>Add and manage products in your cart</p>
        </div>
      </div>
    </>
  );
}

export default Home;
