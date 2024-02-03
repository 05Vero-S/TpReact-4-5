import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import ListaTarea from "./ListaTarea";
import { useState } from "react";

const FormularioTarea = () => {
  const [tarea, setTarea] = useState(" ");
  return (
    <section>
      <Form>
        <Form.Group
          className="mb-3 d-flex"
          controlId="exampleForm.ControlInput1"
        >
          <Form.Control
            type="text"
            placeholder="Ej: Tarea 1"
            minLength={3}
            maxLength={60}
            onChange={(e)=> setTarea(e.target.value) }
            value={tarea}
          />
          <Button variant="secondary" className="ms-2" type="submit">
            Agregar
          </Button>
        </Form.Group>
      </Form>
      <ListaTarea></ListaTarea>
    </section>
  );
};

export default FormularioTarea;
