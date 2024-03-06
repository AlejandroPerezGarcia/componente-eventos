import React from 'react'
import { FaFacebook } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaLinkedinIn } from "react-icons/fa6"

const SocialButton = () => {
  return (
    <>
      <div className='redes'>
        <FaFacebook size={40} />
        <FaGithub size={40} />
        <FaLinkedinIn size={40} />
      </div>
    </>
  )
}

export default SocialButton