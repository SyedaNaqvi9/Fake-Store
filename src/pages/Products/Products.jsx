import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Products.css";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchInput, setSearchInput] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sort, setSort] = useState("");

  async function getProducts() {
    setLoading(true);
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    setProducts(data);
    setLoading(false);
  }

  useEffect(() => {
    getProducts();
  }, []);

  const handleSearch = (event) => {
    setSearchInput(event.target.value);
  };

  const handleFilter = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredProducts = products.filter((prod) =>
    prod.title.toLowerCase().includes(searchInput.toLowerCase()),
  );

  let filteredCategories = filteredProducts;

  if (selectedCategory !== "") {
    filteredCategories = filteredProducts.filter(
      (prod) => prod.category === selectedCategory,
    );
  }

  const handleSort = (event) => {
    setSort(event.target.value);
  };

  let sortProducts = filteredCategories;

  if (sort === "low-high") {
    sortProducts = [...filteredCategories].sort((a, b) => a.price - b.price);
  }

  if (sort === "high-low") {
    sortProducts = [...filteredCategories].sort((a, b) => b.price - a.price);
  }


  return (
    <>
      <div className="product-header">
        <h1>My Products</h1>
      </div>
      <div className="search-bar">
        <label>Search by Product title: </label>
        <input
          type="text"
          placeholder="Search Product by Title"
          value={searchInput}
          onChange={handleSearch}
        />
        <label>Filter:</label>
        <div className="filter-bar">
          <select onChange={handleFilter} value={selectedCategory}>
            <option value="">All categories</option>
            <option value="men's clothing">Men's Clothing</option>
            <option value="women's clothing">Women's Clothing</option>
            <option value="jewelery">Jewelery</option>
            <option value="electronics">Electronics</option>
          </select>
        </div>
        <div className="sort">
          <label>Sort: </label>
          <select onChange={handleSort} value={sort}>
            <option value="">Default</option>
            <option value="low-high">Price: Low → High</option>
            <option value="high-low">Price: High → Low</option>
          </select>
        </div>
      </div>

      <div className="loader">
        {loading && <h3>Loading...</h3>}
        {!loading && sortProducts.length === 0 && (
          <h3>Sorry! No macthes found</h3>
        )}
      </div>

      <div className="products">
        {sortProducts.map((prod) => (
          <div key={prod.id} className="product-card">
            <img src={prod.image} alt="" />
            <h4>{prod.category.toUpperCase()}</h4>
            <h3>{prod.title}</h3>
            <p>${prod.price}</p>
            <Link to={`/product/${prod.id}`}>
              <button>View Product</button>
            </Link>
          </div>
        ))}
      </div>
      <div></div>
    </>
  );
}

export default Products;
