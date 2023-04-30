import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
];

const Navbar = () => {
  return (
    <header className="sticky top-0">
      <nav>
        <div className="flex items-center justify-center py-12 gap-6">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[#414052] hover:text-[#AC6DDE] transition-colors">
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
