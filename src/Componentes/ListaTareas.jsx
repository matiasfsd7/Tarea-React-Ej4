import React from "react";
import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";

const ListaTareas = ({ propsListaTareas }) => {
  return (
    <>
      <ListGroup>
        {propsListaTareas.map((tareaAgregadas, index) => (
          <ItemTarea key={index}></ItemTarea>
        ))}
      </ListGroup>
    </>
  );
};

export default ListaTareas;
