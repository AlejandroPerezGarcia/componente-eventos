import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';


const Formulario = () => {
  return (
    <>
      <Form>
        <Row className="mb-3 ">
          <Form.Group as={Col} controlId="formGridNombre" >
            <Form.Control type="text" placeholder="Nombre" />
          </Form.Group>
          <br />
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Control type="email" placeholder="tuemail@ejemplo.com" />
          </Form.Group>
          <br />
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Control type="password" placeholder="contraseña" />
          </Form.Group>
          <br />
          <Form.Group as={Col} controlId="formGridPassword2">
            <Form.Control type="password" placeholder="Confirmar tu Contraseña" />
          </Form.Group>
        </Row>
        <br />
        <Button variant="primary" type="submit">
          Registrarse
        </Button>
      </Form>
    </>
  )
}

export default Formulario
