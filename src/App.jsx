import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import FormularioTarea from "./Componentes/FormularioTarea";

function App() {
  return (
    <>
      <h1 className="text-center text-light">BIENVENIDO!</h1>
      <Container className="my-5 mainPage">
        <h1 className="display-4 text-center text-light">Lista de tareas</h1>
        <hr className="text-light" />
        <FormularioTarea></FormularioTarea>
      </Container>
      <footer className="text-center bg-dark text-light py-4">
        <p>&copy; Todos los derechos reservados</p>
      </footer>
    </>
  );
}

export default App;
