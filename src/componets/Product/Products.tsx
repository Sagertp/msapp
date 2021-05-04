import React, { useEffect, useState } from "react";
import Product from "./Product";

import { auth, db } from "../../libs/interfaces/firebase";
import Login from "../Form/Login";

const Products = () => {
  const [products, setProductd] = useState([]);
  const [usr, setUsr] = useState(false);
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
    showProduct();
  }, []);

  const showProduct = () => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        console.log("User is authenticated");
        setUsr(true);
      } else {
        setUsr(false);
        console.log("User is not Authenticate");
      }
    });
  };

  if (usr) {
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
  } else {
    return <Login />;
  }
};

export default Products;
