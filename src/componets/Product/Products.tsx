import React from "react";
import Product from "./Product";

import Idvr from "../../libs/interfaces/dvr";

import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.jpg";

const data: Idvr[] = [
  {
    id: 1,
    name: "Dvr Hikvision",
    manufacturer: "Hikvision",
    description: "Es de 16 Canales",
    price: 100,
    image: image1,
    features: {
      compression: "h264",
      resolution: "1080p",
      videoInput: "4ch",
      videoOutput: "1 hdmi",
      audioInput: "1 audio ch",
      audioOutput: "1 rca",
      capacity: "6 TB",
      dimension: "14 x 23",
      weights: "24 kg",
    },
  },
];

const Products = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        {data.map(
          ({ id, name, manufacturer, description, price, image, features }) => (
            <div className="col-md-3" key={id}>
	      <Product
                id={id}
                name={name}
		manufacturer={manufacturer}
                description={description}
                price={price}
                image={image}
                features={features}
              />
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Products;
