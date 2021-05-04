import React, { ChangeEvent, useEffect, useState } from "react";
import functionsProps from "../../libs/interfaces/functionsProps";
import { auth } from "../../libs/interfaces/firebase";
import Idvr from "../../libs/interfaces/dvr";
import Login from "./Login";

const DvrForm = (prop: functionsProps) => {
  const initialState: Idvr = {
    name: "",
    manufacturer: "",
    description: "",
    price: 0,
    image: "",
    compression: "",
    resolution: "",
    videoInput: "",
    videoOutput: "",
    audioInput: "",
    audioOutput: "",
    capacity: "",
    dimension: "",
    weights: "",
  };

  const [values, setValues] = useState<Idvr>(initialState);

  const [usr, setUsr] = useState(false);
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    prop.addOrEditProduct(values);
    setValues({ ...initialState });
  };

  const showForm = () => {
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

  useEffect(() => {
    showForm();
  }, []);

  if (usr) {
    return (
      <form onSubmit={handleSubmit}>
        <legend>Registro de Nuevo equipo.</legend>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Nombre del Equipo.
          </label>
          <input
            value={values.name}
            name="name"
            onChange={handleInputChange}
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            Ingresa el Nombre y modelo del equipo.
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Marca del Fabricante.
          </label>
          <input
            value={values.manufacturer}
            name="manufacturer"
            onChange={handleInputChange}
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            Ingresa la marca o el fabricante del equipo.
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Descripcion.
          </label>
          <input
            value={values.description}
            name="description"
            onChange={handleInputChange}
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            Ingresa una breve descripcion del equipo.
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Precio.
          </label>
          <input
            value={values.price}
            name="price"
            onChange={handleInputChange}
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            Ingresa el precio del equipo como referencia en USD.
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Imagen del Equipo.
          </label>
          <input
            value={values.image}
            name="image"
            onChange={handleInputChange}
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            Ingresa el URL de la imagen del modelo del equipo.
          </div>
        </div>

        <legend>Caracteristicas del equipo.</legend>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Compresion.
          </label>
          <input
            value={values.compression}
            name="compression"
            onChange={handleInputChange}
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            Formato de compresion de video.
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Resolucion.
          </label>
          <input
            value={values.resolution}
            name="resolution"
            onChange={handleInputChange}
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            Resoluciones soportadas por el equipo.
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Canales de video.
          </label>
          <input
            value={values.videoInput}
            name="videoInput"
            onChange={handleInputChange}
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            Cantidad de canales soportados por el equipo.
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Salida de video.
          </label>
          <input
            value={values.videoOutput}
            name="videoOutput"
            onChange={handleInputChange}
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            Cantidad y tipo de puertos de salida de vide.
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Canales de audio.
          </label>
          <input
            value={values.audioInput}
            name="audioInput"
            onChange={handleInputChange}
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            Cantidad de canales de audio soportados.
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Salida de audio.
          </label>
          <input
            value={values.audioOutput}
            name="audioOutput"
            onChange={handleInputChange}
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            Cantidad y tipos de puertos de salida de audio.
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Disco Duro.
          </label>
          <input
            value={values.capacity}
            name="capacity"
            onChange={handleInputChange}
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            Capacidad y cantidad de discos soportados.
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Dimensiones del equipo.
          </label>
          <input
            value={values.dimension}
            name="dimension"
            onChange={handleInputChange}
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            Capacidad y cantidad de discos soportados.
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Peso.
          </label>
          <input
            value={values.weights}
            name="weights"
            onChange={handleInputChange}
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            Capacidad y cantidad de discos soportados.
          </div>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  } else {
    return <Login />;
  }
};

export default DvrForm;
