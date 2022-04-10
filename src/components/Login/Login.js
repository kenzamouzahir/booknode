import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
   
<div className=' w-2/4 mt-10 ml-auto mr-auto mb-10  p-14 '>
  <div>
  <h1 className='mb-8 text-center w-5/6 text-3xl text-second-color-100'>Connexion</h1>
  </div>
  <div className=''>
    <input type="text" placeholder="Email / Username " 
    className=' w-5/6 mb-6 bg-gray-100 border-none rounded' />
  </div>
  <div className=''> 
    <input type="text" id="password" typeof='password' placeholder='********' 
    className=' w-5/6 mb-6 bg-gray-100 border-none rounded'/>
  </div>
  <div className=' flex space-x-52'>
    <p className=''><a className=' hover:underline hover:text-navbg-100'  href="#">S'inscrire</a></p>
    <p className=''><a className='hover:underline  text-navbg-100' href="#">Mot de passe oublié</a></p>
  </div>
  <div className=' mt-8'> 
  <Link className='hover:border   hover:border-second-color-100 hover:bg-another-one-100 bg-first-color-100 
  pl-40 px-40 pt-2 pb-2 text-center
   text-white '
              to="/">Se connecter</Link>
  </div>
</div>
  )
}

export default Login