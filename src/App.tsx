import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "./css/estilos.css";

import Header from "./componets/Header/Header";

import Products from "./componets/Product/Products";

import Footer from "./componets/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
