import React, { ChangeEvent, useState } from "react";
import functionsProps from "../../libs/interfaces/functionsProps";
import Idvr from "../../libs/interfaces/dvr";

const DvrForm = (prop: functionsProps) => {
  const initialState: Idvr = {
    id: 0,
    name: "",
    manufacturer: "",
    description: "",
    price: 0,
    image: "",
    features: {
      compression: "",
      resolution: "",
      videoInput: "",
      videoOutput: "",
      audioInput: "",
      audioOutput: "",
      capacity: "",
      dimension: "",
      weights: "",
    },
  };

  const [values, setValues] = useState<Idvr>(initialState);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const _name: string = e.target.name;
    const value: string = e.target.value;
    inputSave(_name, value);
    setValues(initialState);
    console.log(values);
  };

  const inputSave = (_name: string, value: string) => {
    for (const p in Object.keys(values)) {
      if (_name === Object.keys(values)[p]) {
        values[_name] = value;
      } else {
        for (const l in Object.keys(values.features)) {
          if (_name === Object.keys(values.features)[l]) {
            values.features[_name] = value;
          }
        }
      }
    }
  };

  const resetValues = (values: Idvr) => {
    for (const i in Object.keys(values)) {
      if (values[i] === Object.keys(values)[i]) {
        values[i] = "";
      } else {
        for (const j in Object.keys(values.features)) {
          if (values.features[j] === Object.keys(values.features)[j]) {
            values.features[j] = "";
          }
        }
      }
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    prop.addOrEditProduct(values);
    resetValues(values);
    console.log(values);
  };

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
};

{
  /*
  TODO
  1.- the propertys value of input tag don't reflects the change of state.
  2.- refactorin de setValues funtion.
  */
}

export default DvrForm;
