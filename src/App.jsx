import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import FormularioTarea from "./Componentes/FormularioTarea";

function App() {
  return (
    <>
      <h1 className="text-center text-light mt-1">BIENVENIDO!</h1>
      <Container className="my-5 foterFlex">
        <h1 className="display-4 text-center text-light ">Lista de tareas ✔</h1>
        <hr className="text-light" />
        <FormularioTarea></FormularioTarea>
      </Container>
      <footer className="text-center text-light py-4 foterNuevo">
        <p> Comision 43i - RollingCode School</p>
      </footer>
    </>
  );
}

export default App;
