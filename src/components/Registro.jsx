import React from 'react'
import SocialButton from './SocialButton.jsx'
import Formulario from './Formulario.jsx'
import Alert from './Alert.jsx'


const Registro = () => {
  const titulo = 'Crea Una cuenta'
  const titulo2 = 'o usa tu mail para registrarte'

  return (
    <>
      <div className='registro'>
        <h1>{titulo}</h1>
        <SocialButton />
        <p>{titulo2}</p>
        <Formulario />
        <Alert />
      </div>
    </>
  )
}

export default Registro