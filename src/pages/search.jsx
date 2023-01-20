import React from "react";
import { useEffect, useState } from "react";
import ProductModule from "../modules/products.module";
import ProductItem from "../components/products/ProductItem";
const Search = () => {
  const [inputSearch, setInputSearch] = useState("");
  const [data, setData] = useState([]);
  const [newData, setNewData] = useState([]);
  const handleChange = (event) => {
    setInputSearch(event.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    const getAllProduct = async () => {
      let allProduct = await ProductModule.getAllProduct();
      if (allProduct) {
        setData(allProduct.data);
      }
    };
    getAllProduct();
  }, []);

  useEffect(() => {
    if (inputSearch !== "") {
      const filteredData = data.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(inputSearch.toLowerCase());
      });
      setNewData(filteredData);
    }
  }, [inputSearch, data]);

  return (
    <div id="p_search">
      <div className="search_form">
        <div className="inner">
          <h3 className="h3title center">Page Search Product</h3>
          <form onSubmit={handleSubmit}>
            <ul className="c_form">
              <li>
                <label>Search Product</label>
                <input
                  className="input_cus"
                  name="search"
                  placeholder="Search Product"
                  value={inputSearch}
                  onChange={handleChange}
                />
              </li>
            </ul>
          </form>
        </div>
      </div>
      <div className="search_cont">
        <div className="inner">
          <ul className="list_product">
            {newData.map((item) => (
              <ProductItem key={item._id} product={item} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Search;
