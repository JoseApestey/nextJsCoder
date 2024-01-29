'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
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

const CategoriesMenu = () => {
  const pathname = usePathname();

  return (
    <aside className="flex flex-col w-[200px] pr-2">
      {links.map((link) => (
        <div key={link.label} className={`${
          pathname === link.href ? "font-semibold border-b" : ""
        } py-2`}>
          <Link href={link.href}>
            <p>{link.label} </p>
          </Link>
        </div>
      ))}
    </aside>
  );
};

export default CategoriesMenu;
