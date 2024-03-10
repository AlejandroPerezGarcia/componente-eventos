import React from 'react'
import SocialButton from './SocialButton.jsx'
import Formulario from './Formulario.jsx'
import Alert from './Alert.jsx'
import { FaFacebook } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaLinkedinIn } from "react-icons/fa6"



const Registro = () => {
  const titulo = 'Crea Una cuenta'
  const titulo2 = 'o usa tu mail para registrarte'

  return (
    <>
      <div className='registro'>
        <h1>{titulo}</h1>
        <SocialButton FaFacebook={<FaFacebook size={30} />} FaGithub={<FaGithub size={30} />} FaLinkedinIn={<FaLinkedinIn size={30} />} />
        <p>{titulo2}</p>
        <Formulario />
        <Alert />
      </div>
    </>
  )
}

export default Registro