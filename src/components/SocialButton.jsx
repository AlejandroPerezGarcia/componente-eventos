import Button from 'react-bootstrap/Button'

const SocialButton = ({ FaFacebook, FaGithub, FaLinkedinIn }) => {
  return (
    <>
      <div className='redes'>
        <div><Button className='btn-1'><a href='https://www.facebook.com/' target="_blank">{FaFacebook}</a></Button></div>
        <div><Button className='btn-1'><a href='https://github.com/' target="_blank">{FaGithub}</a> </Button></div>
        <div><Button className='btn-1'><a href='https://www.linkedin.com/' target="_blank">{FaLinkedinIn}</a></Button></div>
      </div>
    </>
  )
}

export default SocialButton