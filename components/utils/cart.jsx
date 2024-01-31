"use client"
import Link from "next/link"

import Image from "next/image"

const CartWidget = () => {
  
    return (
        <Link href={"/cart"} className={`text-base text-slate-100 p-3 flex items-center text-center`}>
            <Image 
                src={"/cart-icon.svg"}
                alt="Cart icon"
                width={30}
                height={30}
            />
            
        </Link>
    )
}

export default CartWidget