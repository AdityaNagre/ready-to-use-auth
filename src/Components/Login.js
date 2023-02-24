import React, {useState, useEffect, useContext} from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useUserAuth } from '../Context/UserAuthContext'
import Alert from './Alert'
import GoogleButton from 'react-google-button'

export default function Login() {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [error, seterror] = useState("")
    const { logIn, googleSignIn }= useUserAuth();
    const Navigate=useNavigate()

    const handleSubmit=async ()=>{
        seterror("")
        try {
            await logIn(email, password)
            Navigate("/LandingUpper")
        } catch (err) {
            seterror(err.message)
        }
    }

    const googleAuth= async()=>{
        try {
            await googleSignIn();
            Navigate("/LandingUpper")
        } catch (error) {
            console.log(error.message)
        }
    }

  return (
    <>
    <div>
            <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col mx-auto w-full mt-10">
            <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Log In</h2>
            <div className='flex justify-center'>
            <GoogleButton onClick={googleAuth} className='g-btn' type='dark'/>
            </div>
            {error && <Alert err={error}/>}
            <div className="relative mb-4">
                <label for="email" className="leading-7 text-sm text-gray-600">Email</label>
                <input onChange={(e)=>{setemail(e.target.value)}} value={email} type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
            <div className="relative mb-4">
                <label for="password" className="leading-7 text-sm text-gray-600">Password</label>
                <input onChange={(e)=>{setpassword(e.target.value)}} value={password} type="password" id="password" name="password" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
            <div>
            <Link to="/">
            <button onClick={handleSubmit} className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Login</button></Link>
            </div>
            <p className="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p>
            </div>
            <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex justify-between items-center mx-auto w-full mt-10">
                Don't have an account? <Link to="/signup">
                <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">SignUp</button></Link>
            </div>
    </div>
    </>
  )
}
