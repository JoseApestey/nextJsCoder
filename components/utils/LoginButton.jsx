"use client"

import { useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import Boton from "./Button";

const LoginButton = () => {
   
  
    

    return (
        <>
            <button
                
                className="bg-green-500 text-white p-2 rounded hover:bg-green-600 focus:outline-none focus:ring focus:border-green-300 flex items-center"
            >
                <FontAwesomeIcon icon={faSignInAlt} className="mr-2" />
                Login
            </button>
            
        </>
    );
};

export default LoginButton;