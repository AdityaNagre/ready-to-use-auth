import React, { useState, useContext } from 'react'
import { useUserAuth } from '../Context/UserAuthContext'
import Alert from './Alert'
import { useNavigate } from 'react-router-dom'

export default function SignUp() {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [error, seterror] = useState("")
    const { signUp }= useUserAuth();
    const Navigate=useNavigate()

    const handleSubmit=async ()=>{
        seterror("")
        try {
            await signUp(email, password)
            Navigate("/")
        } catch (err) {
            seterror(err.message)
        }
    }
  return (
    <div>
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
                <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
                <h1 className="title-font font-medium text-3xl text-gray-900">Slow-carb next level shoindcgoitch ethical authentic, poko scenester</h1>
                <p className="leading-relaxed mt-4">Poke slow-carb mixtape knausgaard, typewriter street art gentrify hammock starladder roathse. Craies vegan tousled etsy austin.</p>
                </div>
                <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col mx-auto w-full mt-10">
                <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Sign Up</h2>
                {error && <Alert err={error}/>}
                <div className="relative mb-4">
                    <label for="email" className="leading-7 text-sm text-gray-600">Email</label>
                    <input onChange={(e)=>{setemail(e.target.value)}} value={email} type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
                <div className="relative mb-4">
                    <label for="password" className="leading-7 text-sm text-gray-600">Password</label>
                    <input onChange={(e)=>{setpassword(e.target.value)}} value={password} type="password" id="password" name="password" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
                <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={handleSubmit}>SignUp</button>
                <p className="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p>
                </div>
            </div>
        </section>
    </div>
  )
}
