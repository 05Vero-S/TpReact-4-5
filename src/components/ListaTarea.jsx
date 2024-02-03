import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";

const ListaTarea = ({arrayTareas}) => {
    return (
        <ListGroup>
          {
            arrayTareas.map((elementoTarea, posicionElementoTarea)=><ItemTarea key={posicionElementoTarea} nombreTarea={elementoTarea}></ItemTarea>)
          }
      
    </ListGroup>
    );
};

export default ListaTarea;