import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
// import products from "../products";
import Products from "../components/Products";
const HomeScreen = () => {
  const [products, setPorducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("/api/products");
      setPorducts(data);
    };
    fetchProducts();
  }, []); //empty array will run page only once
  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Products product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
