import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import ListaTarea from "./ListaTarea";
import { useState } from "react";

const FormularioTarea = () => {
  const [tarea, setTarea] = useState("");
  const [tareas, setTareas] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setTareas([...tareas, tarea]);
    //para limpiar el formulario
    setTarea("");
  };

  const borrarTarea = (nombreTarea)=>{
    const tareasFiltradas = tareas.filter((tarea)=> tarea !== nombreTarea)
    setTareas (tareasFiltradas);

  }

  return (
    <section>
      <Form onSubmit={handleSubmit}>
        <Form.Group
          className="mb-3 d-flex"
          controlId="exampleForm.ControlInput1"
        >
          <Form.Control
            type="text"
            placeholder="Ej: Tarea 1"
            minLength={3}
            maxLength={60}
            onChange={(e) => setTarea(e.target.value)}
            value={tarea}
          />
          <Button variant="secondary" className="ms-2" type="submit">
            Agregar
          </Button>
        </Form.Group>
      </Form>
      <ListaTarea arrayTareas ={tareas} borrarTarea={borrarTarea}></ListaTarea>
    </section>
  );
};

export default FormularioTarea;
