"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LinkProducts } from "@/utils/constants";
import { useCart } from "@/utils/context/CartContext";
import { useAuthContext } from "@/utils/context/AuthContext";
import { useEffect } from "react";

const CategoryMenu = () => {
    const pathname = usePathname();
    const { setCart, userId } = useAuthContext();
    const { setDbCart } = useCart();
    useEffect(() => {
        if(userId.logged) setDbCart(userId.uid);
    }, []);

    return (
        <aside className="flex flex-col gap-3">
            {LinkProducts.map(link => (
                    <Link 
                        key={link.label} 
                        href={link.value}
                        className={`${pathname === link.value ? "font-semibold border-b" :''} py-2`}
                    >
                        {link.label}
                    </Link>
                ))}
        </aside>
    )
}

export default CategoryMenu