
import { SignUp } from '@clerk/clerk-react'
import React from 'react'

const Signup = () => {
  return (
    <div className='flex items-center justify-center w-[100vw] min-h-screen'>
    <SignUp signInUrl='/login' forceRedirectUrl={"/profile"}/>
    </div>
  )
}

export default Signup