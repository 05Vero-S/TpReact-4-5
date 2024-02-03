import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";

const ListaTarea = ({arrayTareas, borrarTarea}) => {
    return (
        <ListGroup>
          {
            arrayTareas.map((elementoTarea, posicionElementoTarea)=><ItemTarea key={posicionElementoTarea} nombreTarea={elementoTarea} borrarTarea={borrarTarea}></ItemTarea>)
          }
      
    </ListGroup>
    );
};

export default ListaTarea;