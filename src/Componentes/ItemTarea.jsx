import React from "react";
import { Button, ListGroup } from "react-bootstrap";

const ItemTarea = ({ nombreTarea }) => {
  {
  }
  return (
    <>
      <ListGroup.Item className="d-flex justify-content-between mt-3">
        {nombreTarea}
        <Button variant="danger">Borrar</Button>
      </ListGroup.Item>
    </>
  );
};

export default ItemTarea;
