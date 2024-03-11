import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'

const Formulario = ({ setAlert }) => {

  const [nombre, setNombre] = useState('')
  const [mail, setMail] = useState('')
  const [passwordA, setPasswordA] = useState('')
  const [passwordB, setPasswordB] = useState('')

  console.log('desde el foemulario =>', setAlert)

  const validarInput = (e) => {
    e.preventDefault()

    if (
      nombre.trim() === '' ||
      mail.trim() === '' ||
      passwordA.trim() === '' ||
      passwordB.trim() === ''
    ) {
      setAlert({ message: 'debe rellenar todos los campos', color: 'warning' })
      return
    }

    if (passwordA !== passwordB) {
      setAlert({ message: 'Las contraseñas no coinciden', color: 'danger' })
      return
    }

    setAlert({ message: '¡Los datos han sido Guardado exitosamente!', color: 'success' })
    setNombre('')
    setMail('')
    setPasswordA('')
    setPasswordB('')

  }

  return (
    <>
      <Form className='formulario' onSubmit={validarInput}>

        <div className='form-group p-3'>
          <input
            type="text"
            name='Nombre'
            className='form-control'
            id='inputNombre'
            placeholder='Nombre'
            onChange={(e) => setNombre(e.target.value)}
            value={nombre}
          />
        </div>
        <div className='form-group'>

          <input
            type="email"
            name='Correo'
            className='form-control'
            id='inputEmail'
            placeholder='tuemail@ejemplo.com'
            onChange={(e) => setMail(e.target.value)}
            value={mail}
          />
        </div>
        <div className='form-group' >

          <input
            type="passwors"
            name='Contraseña1'
            className='form-control'
            id='inputPassword1'
            placeholder='Contrasena'
            onChange={(e) => setPasswordA(e.target.value)}
            value={passwordA}
          />
        </div>
        <div className='form-group' >

          <input
            type="passwors"
            name='Contrasena2'
            className='form-control'
            id='inputPassword2'
            placeholder='Confirma tu contraseña'
            onChange={(e) => setPasswordB(e.target.value)}
            value={passwordB}


          />
        </div>

        <Button type="submit" className='btn  btnRegistro' variant="danger" id='boton-enviar'>
          Registrarse
        </Button>

      </Form>
    </>
  )
}

export default Formulario
