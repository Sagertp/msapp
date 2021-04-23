import React from "react";
import DrvForm from "./Dvrform";
import funcProps from "../../libs/interfaces/functionsProps";
import Idvr from "../../libs/interfaces/dvr";


import { db } from "../../libs/interfaces/firebase";


const propiedades: funcProps = {
  addOrEditProduct: async (productObjet: Idvr) => {
    let message: string = "New Product is Saved.";
    await db.collection("products").doc().set(productObjet);
    console.log(message);
  },
  removeProduct: () => {
    console.log("Deleted Product");
    return true;
  },
};

const Froms = () => {
  return (
    <div className="container">
      <DrvForm
        addOrEditProduct={propiedades.addOrEditProduct}
        removeProduct={propiedades.removeProduct}
      />
    </div>
  );
};

export default Froms;
