import React from 'react'
import { Link } from 'react-router-dom'

function Signin() {
    return (
        <div className=' w-2/4 items-center mt-10 ml-auto mr-auto mb-10  p-14'>
            <div>
                <h1 className='mb-8 text-center w-5/6 text-3xl text-second-color-100'>S'inscrire</h1>
            </div>
            <div className=''>
                <input type="text" placeholder="Username "
                    className=' w-5/6 mb-6 bg-gray-100 border-none ' />
            </div>
            <div className=''>
                <input type="text" placeholder="Email"
                    className=' w-5/6 mb-6 bg-gray-100 border-none' />
            </div>
            <div className=''>
                <input type="text" id="password" typeof='password' placeholder='Password'
                    className=' w-5/6 mb-6 bg-gray-100 border-none ' />
            </div>
            <div className=' flex space-x-80'>
                <p className=''>
                    <a className=' hover:underline hover:text-navbg-100' href="#">Login</a>
                </p>
                <p className=''>
                    <a className='hover:underline  text-navbg-100' href="#">Home</a>
                </p>
            </div>

            <div className=' mt-8'>
                <Link className='hover:border   hover:border-second-color-100 hover:bg-another-one-100 bg-first-color-100 pl-44 px-44 pt-2 pb-2 text-center text-white '
                    to="/">S'inscrire</Link>
            </div>
        </div>
    )
}

export default Signin