import SocialButton from './SocialButton.jsx'
import Formulario from './Formulario.jsx'
import { FaFacebook } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaLinkedinIn } from "react-icons/fa6"
import Alert from "./Alert.jsx"
import { useState } from 'react'

const Registro = () => {
  const titulo = 'Crea Una cuenta'
  const titulo2 = 'o usa tu mail para registrarte'
  const [alert, setAlert] = useState({ message: '', color: '' })

  return (
    <>
      <div className='registro'>
        <h1>{titulo}</h1>
        <SocialButton FaFacebook={<FaFacebook size={30} />} FaGithub={<FaGithub size={30} />} FaLinkedinIn={<FaLinkedinIn size={30} />} />
        <p>{titulo2}</p>
        <Formulario setAlert={setAlert} />
        {alert.message !== '' && <Alert message={alert.message} color={alert.color} />}
      </div>
    </>
  )
}

export default Registro