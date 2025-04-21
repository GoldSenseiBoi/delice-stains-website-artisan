
import { Instagram, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bakery-dark-brown text-bakery-cream py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="flex flex-col items-center md:items-start">
            <Link to="/" className="font-script text-3xl mb-3">Délice de Stains</Link>
            <p className="text-sm text-center md:text-left">
              Boulangerie artisanale offrant des produits frais et de qualité depuis plus de 10 ans.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-sans font-bold text-xl mb-4">Liens Rapides</h3>
            <ul className="space-y-2 text-center md:text-left">
              <li><Link to="/" className="hover:underline">Accueil</Link></li>
              <li><Link to="/savoir-faire" className="hover:underline">Notre savoir-faire</Link></li>
              <li><Link to="/produits" className="hover:underline">Nos produits</Link></li>
              <li><Link to="/a-propos" className="hover:underline">À propos</Link></li>
              <li><Link to="/contact" className="hover:underline">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-sans font-bold text-xl mb-4">Contact</h3>
            <div className="space-y-3 text-center md:text-left">
              <p className="flex items-center justify-center md:justify-start gap-2">
                <MapPin size={18} />
                <span>29 rue Parmentier, 93240 Stains</span>
              </p>
              <p className="flex items-center justify-center md:justify-start gap-2">
                <Phone size={18} />
                <span>01 23 45 67 89</span>
              </p>
              <a 
                href="https://www.instagram.com/delice2stains" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center md:justify-start gap-2 hover:text-bakery-beige-medium"
              >
                <Instagram size={18} />
                <span>@delice2stains</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-bakery-beige-dark/30 text-center text-sm">
          <p>&copy; {currentYear} Délice de Stains. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
