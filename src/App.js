import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js"
import Navbar from "./componentes/navbar";
import Header from "./componentes/header";
import SobreNosotros from "./componentes/sobre";
import Servicios from "./componentes/services"
import Services from './componentes/services';
import Portfolio from './componentes/portfolio';
import Contacto from "./componentes/contacto";
import Footer from "./componentes/footer";
import Barras from "./componentes/barras";
import PortComing from "./componentes/port_coming";

function App() {
  return (
    <>
      <Particles
        className="particles-canvas"
        params={{
          particles: {
            number: {
              value: 90,
              density: {
                enable: true,
                value_area: 900
              }
            },
            shape: {
              type: "circle",
              stroke: {
                width: 6,
                color: "#f9ab00"
              }
            }
          }
        }}
      />
      <Navbar />
      <Header />
      <SobreNosotros />
      <Portfolio />
      <Services />

      <Contacto />
      <Footer />
    </>
  );
}

export default App;
