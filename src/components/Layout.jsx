import { Link, Outlet } from "react-router-dom";
import "./Layout.css";

function Layout({cart}) {
  return (
    <>
      <div className="nav-bar">
        <div className="logo">
          <h1>
            <Link to="/">FakeStore</Link>
          </h1>
        </div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/cart">My Cart ({cart.length})</Link>
        </nav>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
