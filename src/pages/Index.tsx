
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { IconBaguette, IconCake } from "@tabler/icons-react";

const Index = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ 
            backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1472&auto=format&fit=crop')",
            backgroundPosition: "center 35%"
          }}
        />
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <h1 className="font-script text-5xl md:text-7xl mb-4">Délice de Stains</h1>
          <p className="font-sans text-xl md:text-2xl mb-8">Boulangerie artisanale</p>
          <Link 
            to="/produits" 
            className="inline-flex items-center bg-bakery-beige-medium text-bakery-brown-dark px-6 py-3 rounded-md hover:bg-bakery-beige-dark transition-colors duration-300 font-medium"
          >
            Découvrir nos produits
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-script text-4xl text-bakery-brown-dark mb-6">Bienvenue chez Délice de Stains</h2>
            <p className="text-bakery-brown mb-8">
              Depuis plus de 10 ans, notre boulangerie artisanale vous propose des produits frais et authentiques, 
              fabriqués dans le respect des traditions avec des ingrédients de qualité.
              Située au cœur de Stains, notre enseigne familiale vous accueille tous les jours dans une ambiance 
              chaleureuse et conviviale.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/savoir-faire" 
                className="bg-bakery-brown text-white px-6 py-3 rounded-md hover:bg-bakery-brown-dark transition-colors duration-300"
              >
                Notre savoir-faire
              </Link>
              <Link 
                to="/a-propos" 
                className="bg-bakery-beige-medium text-bakery-brown-dark px-6 py-3 rounded-md hover:bg-bakery-beige-dark transition-colors duration-300"
              >
                Notre histoire
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-bakery-beige-light">
        <div className="container mx-auto px-4">
          <h2 className="font-script text-4xl text-center text-bakery-brown-dark mb-12">Nos produits phares</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeaturedProduct 
              title="Baguette tradition" 
              description="Croustillante à l'extérieur, moelleuse à l'intérieur, notre baguette tradition est préparée selon une recette traditionnelle."
              icon={<IconBaguette className="h-10 w-10" />}
            />
            <FeaturedProduct 
              title="Pain au levain" 
              description="Fabriqué avec notre levain naturel maison, ce pain légèrement acidulé offre une mie dense et une croûte épaisse."
              icon={<IconBaguette className="h-10 w-10" />}
            />
            <FeaturedProduct 
              title="Flan pâtissier" 
              description="Un grand classique de la pâtisserie française : notre flan à la texture crémeuse et à la saveur vanillée intense."
              icon={<IconCake className="h-10 w-10" />}
            />
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/produits" 
              className="inline-flex items-center bg-bakery-brown text-white px-6 py-3 rounded-md hover:bg-bakery-brown-dark transition-colors duration-300"
            >
              Voir tous nos produits
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Opening Hours */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-script text-4xl text-bakery-brown-dark mb-6">Horaires d'ouverture</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-bakery-brown">
              <div className="p-4">
                <h3 className="font-bold mb-3">Du lundi au vendredi</h3>
                <p>7h00 - 19h30</p>
              </div>
              <div className="p-4">
                <h3 className="font-bold mb-3">Samedi et dimanche</h3>
                <p>7h00 - 19h00</p>
              </div>
            </div>
            <p className="mt-6 text-bakery-brown-light font-medium">Fermé les jours fériés</p>
          </div>
        </div>
      </section>
    </div>
  );
};

const FeaturedProduct = ({ title, description, icon }: { title: string; description: string; icon: React.ReactNode }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="flex justify-center mb-4 text-bakery-brown">
        {icon}
      </div>
      <h3 className="font-sans font-bold text-xl text-center text-bakery-brown-dark mb-3">{title}</h3>
      <p className="text-center text-bakery-brown">{description}</p>
    </div>
  );
};

export default Index;
