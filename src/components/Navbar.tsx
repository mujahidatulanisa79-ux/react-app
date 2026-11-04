import { Button } from "./ui/button";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Cart", path: "/cart" },
  ];

  return (
    <nav className="flex items-center justify-between border-b px-8 py-4">
      <h1 className="text-xl font-black">StoreAnisa</h1>

      <div className="flex gap-2">
        {navItems.map((item) => (
          <Button key={item.path} asChild variant="ghost">
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                isActive ? "font-bold text-blue-400" : ""
              }
            >
              {item.name}
            </NavLink>
          </Button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
