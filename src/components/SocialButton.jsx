import { FaFacebook } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaLinkedinIn } from "react-icons/fa6"
import Button from 'react-bootstrap/Button'

const SocialButton = () => {
  return (
    <>
      <div className='redes'>
        <div><Button className='btn-1'><FaFacebook size={30} /></Button></div>
        <div><Button className='btn-1'><FaGithub size={30} /></Button></div>
        <div><Button className='btn-1' ><FaLinkedinIn size={30} /></Button></div>
      </div>
    </>
  )
}

export default SocialButton