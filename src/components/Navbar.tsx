
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-bakery-cream border-b border-bakery-beige-medium sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center" onClick={closeMenu}>
            <span className="font-script text-3xl md:text-4xl text-bakery-brown-dark">Délice de Stains</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <NavLinks closeMenu={closeMenu} />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-bakery-brown-dark hover:text-bakery-brown p-2"
              aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-bakery-cream py-4 px-6 border-t border-bakery-beige-medium">
          <div className="flex flex-col space-y-4">
            <NavLinks closeMenu={closeMenu} />
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLinks = ({ closeMenu }: { closeMenu: () => void }) => {
  const links = [
    { name: "Accueil", path: "/" },
    { name: "Notre savoir-faire", path: "/savoir-faire" },
    { name: "Nos produits", path: "/produits" },
    { name: "À propos", path: "/a-propos" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {links.map((link) => (
        <Link
          key={link.name}
          to={link.path}
          className="font-sans text-bakery-brown hover:text-bakery-brown-dark transition-colors duration-200 py-2 border-b-2 border-transparent hover:border-bakery-brown-dark"
          onClick={closeMenu}
        >
          {link.name}
        </Link>
      ))}
    </>
  );
};

export default Navbar;
