import React from "react";
import { Button, ListGroup } from "react-bootstrap";

const ItemTarea = () => {
  return (
    <>
      <ListGroup.Item className="d-flex justify-content-between">
        Tarea de prueba <Button variant="danger">Borrar</Button>
      </ListGroup.Item>
    </>
  );
};

export default ItemTarea;
