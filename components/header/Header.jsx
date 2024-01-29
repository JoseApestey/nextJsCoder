'use client'
import Image from 'next/image'
import Link from 'next/link'



import CartWidget from '../utils/cart'




const Header = () => {
    
    const LINKS = [
        {
            label: "Inicio",
            href: "/"
        },
        {
            label: "Tienda",
            href: "/productos/all"
        },
        {
            label: "Quienes somos",
            href: "/nosotros"
        },
        {
            label: "Contacto",
            href: "/contacto"
        }
    ];
    
   
    
  
    return (
        
            
            <header className="w-full bg-gray-700">
                <div className="container m-auto py-4 flex justify-between items-center">
                    <Link href={"/"}>
                        <Image
                            src={"/logo.png"}
                            alt='Capellari logo'
                            width={70}
                            height={70}
                        />
                    </Link>
                    <nav className="flex justify-between gap-2">
                        {
                            LINKS.map(link => {
                                return <Link
                                    key={link.label}
                                    href={link.href}
                                    className={`text-base text-slate-100 p-3 `}
                                >
                                    {link.label}
                                </Link>
                            })
                        }
                    </nav>
                    <div>
                        <CartWidget />
                        
                    </div>
                </div>
            </header>
    )
}

export default Header