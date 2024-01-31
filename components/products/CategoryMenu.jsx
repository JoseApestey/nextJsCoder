'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    {
        label: "Todos",
        href: "/productos/all"
    },
    {
        label: "TVs",
        href: "/productos/tvs"
    },
    {
        label: "Hornos",
        href: "/productos/hornos"
    },
    {
        label: "Aire",
        href: "/productos/aires"
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
