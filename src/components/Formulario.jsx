import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const Formulario = () => {
  return (
    <>
      <Form className='formulario'>
        <div className='form-group p-3'>
          <input type="text"
            name='Nombre'
            className='form-control'
            placeholder='Nombre'
          />
        </div>
        <div className='form-group'>
          <input type="email"
            name='Correo'
            className='form-control'
            placeholder='tuemail@ejemplo.com'
          />
        </div>
        <div className='form-group'>
          <input type="passwors"
            name='Contraseña1'
            className='form-control'
            placeholder='Contraseña'
          />
        </div>
        <div className='form-group'>
          <input type="passwors"
            name='Contraseña2'
            className='form-control'
            placeholder='Confirma tu contraseña'
          />
        </div>


        <Button type="submit" className='btn btnRegistro'>Registrarse</Button>
      </Form>
    </>
  )
}

export default Formulario
