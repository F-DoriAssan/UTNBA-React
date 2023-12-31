import React from "react";
import Product from "./Product";
import Title from "./Title";
import { ProductConsumer } from "../context";
import Footer from "./Footer";

export default function ProuctList() {
  return (
    <>
      <div className="py-5">
        <div className="container">
          <Title name="nuestros" title=" productos" />
          <div className="row">
            <ProductConsumer>
              {(value) => {
                return value.products.map((product) => {
                  return <Product key={product.id} product={product} />;
                });
              }}
            </ProductConsumer>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
