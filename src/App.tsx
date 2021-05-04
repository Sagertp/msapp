import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "./css/estilos.css";

import Header from "./componets/Header/Header";
import Footer from "./componets/Footer/Footer";
import Login from "./componets/Form/Login";
import Products from "./componets/Product/Products";
import Forms from "./componets/Form/Forms";
function App() {
  return (
    <div className="App">
      <Header />
      <Forms />
      <Footer />
    </div>
  );
}

export default App;
