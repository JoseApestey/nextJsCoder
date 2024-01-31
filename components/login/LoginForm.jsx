"use client"

import Boton from "../utils/Button"



const LoginForm = ({ }) => {
   

    return (
        <div className="fixed w-screen h-screen inset-0 z-10 flex justify-center items-center bg-blue-400 bg-opacity-25">
            <form  className="bg-white py-4 px-6 rounded-xl max-w-md w-full">
                <h2>Login</h2>
                <input
                    type="email"
                    onChange={handleChangeEmail}
                    value={email}
                    placeholder="Tu email"
                    className="p-2 rounded w-full border border-blue-100 block my-4"
                />
                <input
                    type="password"
                    value={password}
                    onChange={handleChangePassword}
                    placeholder="password"
                    className="p-2 rounded w-full border border-blue-100 block my-4"
                />
                <Boton  className="m-1 p-1 bg-blue-400 rounded" text="Ingresar" />
                <Boton className="m-1 p-1 bg-blue-400 rounded" text="Registrarme" />
                <Boton  className="m-1 p-1 bg-blue-400 rounded" text="Ingresar con google" />
            </form>
        </div>
    )
}

export default LoginForm