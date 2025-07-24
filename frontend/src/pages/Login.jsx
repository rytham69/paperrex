import { SignIn } from '@clerk/clerk-react'
import React from 'react'
import FluidCanvas from '../components/FluidCanvas'

const Login = () => {
  return (
    <div className='flex items-center justify-center w-[100vw] min-h-screen bg-[#]'>
    <SignIn  signUpUrl='/signup' forceRedirectUrl={"/profile"}/>
    </div>
  )
}

export default Login