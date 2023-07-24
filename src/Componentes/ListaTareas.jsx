import React from "react";
import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";

const ListaTareas = ({ propsListaTareas, propsBorrarTarea }) => {
  return (
    <>
      <ListGroup>
        {propsListaTareas.map((tareaAgregadas, index) => (
          <ItemTarea
            key={index}
            nombreTarea={tareaAgregadas}
            eliminarTarea={propsBorrarTarea}
          ></ItemTarea>
        ))}
      </ListGroup>
    </>
  );
};

export default ListaTareas;
