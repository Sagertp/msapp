import React, { useEffect, useState } from "react";
import Product from "./Product";

import { db } from "../../libs/interfaces/firebase";

const Products = () => {
  const [products, setProductd] = useState([]);

  const getProducts = () => {
    db.collection("products").onSnapshot((querySnapshot) => {
      const prod: any = [];
      querySnapshot.forEach((doc) => {
        prod.push({ ...doc.data(), id: doc.id });
      });
      setProductd(prod);
    });
  };

  useEffect(() => {
    console.log("Getting Data...");
    getProducts();
  }, []);

  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        {products.map(
          ({
            id,
            name,
            manufacturer,
            description,
            price,
            image,
            compression,
            resolution,
            videoInput,
            videoOutput,
            audioInput,
            audioOutput,
            capacity,
            dimension,
            weights,
          }) => (
            <div className="col-md-3" key={id}>
              <Product
		id={id}
                name={name}
                manufacturer={manufacturer}
                description={description}
                price={price}
                image={image}
                compression={compression}
                resolution={resolution}
                videoInput={videoInput}
                videoOutput={videoOutput}
                audioInput={audioInput}
                audioOutput={audioOutput}
                capacity={capacity}
                dimension={dimension}
                weights={weights}
              />
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Products;
