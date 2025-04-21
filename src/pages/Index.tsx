
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { IconBaguette, IconCake } from "@tabler/icons-react";

const Index = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0 transition-transform duration-[1.5s] hover:scale-110"
          style={{ 
            backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1472&auto=format&fit=crop')",
            backgroundPosition: "center 35%"
          }}
        />
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <p className="text-xl md:text-2xl mb-4 opacity-0 animate-[fade-in_1s_ease-out_0.5s_forwards]">
            Boulangerie Artisanale
          </p>
          <h1 className="font-script text-6xl md:text-8xl mb-6 opacity-0 animate-[fade-in_1s_ease-out_0.8s_forwards]">
            Délice de Stains
          </h1>
          <p className="font-sans text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-0 animate-[fade-in_1s_ease-out_1.1s_forwards]">
            Une tradition familiale où chaque pain raconte une histoire de passion et de savoir-faire
          </p>
          <div className="opacity-0 animate-[fade-in_1s_ease-out_1.4s_forwards]">
            <Link 
              to="/produits" 
              className="inline-flex items-center bg-white/90 hover:bg-white text-bakery-brown-dark px-8 py-4 rounded-full transition-all duration-300 hover:px-10 font-medium text-lg"
            >
              Découvrir nos produits
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="font-script text-5xl text-bakery-brown-dark">Bienvenue chez Délice de Stains</h2>
            <p className="text-bakery-brown text-lg leading-relaxed">
              Depuis plus de 10 ans, notre boulangerie artisanale vous propose des produits frais et authentiques, 
              fabriqués dans le respect des traditions avec des ingrédients de qualité.
              Située au cœur de Stains, notre enseigne familiale vous accueille tous les jours dans une ambiance 
              chaleureuse et conviviale.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 pt-4">
              <Link 
                to="/savoir-faire" 
                className="group relative px-8 py-4 bg-bakery-brown text-white rounded-full overflow-hidden transition-all duration-300 hover:pr-12"
              >
                <span className="relative z-10">Notre savoir-faire</span>
                <ArrowRight className="absolute right-6 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300" />
              </Link>
              <Link 
                to="/a-propos" 
                className="group relative px-8 py-4 bg-bakery-beige-medium text-bakery-brown-dark rounded-full overflow-hidden transition-all duration-300 hover:pr-12"
              >
                <span className="relative z-10">Notre histoire</span>
                <ArrowRight className="absolute right-6 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-32 bg-bakery-beige-light relative overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="font-script text-5xl text-center text-bakery-brown-dark mb-16">Nos produits phares</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeaturedProduct 
              title="Baguette tradition" 
              description="Croustillante à l'extérieur, moelleuse à l'intérieur, notre baguette tradition est préparée selon une recette traditionnelle."
              icon={<IconBaguette className="h-12 w-12" />}
              delay={0.3}
            />
            <FeaturedProduct 
              title="Pain au levain" 
              description="Fabriqué avec notre levain naturel maison, ce pain légèrement acidulé offre une mie dense et une croûte épaisse."
              icon={<IconBaguette className="h-12 w-12" />}
              delay={0.6}
            />
            <FeaturedProduct 
              title="Flan pâtissier" 
              description="Un grand classique de la pâtisserie française : notre flan à la texture crémeuse et à la saveur vanillée intense."
              icon={<IconCake className="h-12 w-12" />}
              delay={0.9}
            />
          </div>
          
          <div className="text-center mt-16">
            <Link 
              to="/produits" 
              className="group inline-flex items-center bg-white/80 hover:bg-white text-bakery-brown-dark px-8 py-4 rounded-full transition-all duration-300 hover:px-10"
            >
              <span>Voir tous nos produits</span>
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Opening Hours with Image */}
      <section className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative h-[600px] overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=2026&auto=format&fit=crop" 
              alt="Notre boulangerie"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-110"
            />
          </div>
          <div className="flex items-center justify-center bg-white py-24 px-8">
            <div className="max-w-xl">
              <h2 className="font-script text-5xl text-bakery-brown-dark mb-12">Horaires d'ouverture</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-bakery-brown">
                <div className="p-6 border border-bakery-beige-medium rounded-lg transition-transform duration-300 hover:-translate-y-1">
                  <h3 className="font-bold text-xl mb-4">Du lundi au vendredi</h3>
                  <p className="text-lg">7h00 - 19h30</p>
                </div>
                <div className="p-6 border border-bakery-beige-medium rounded-lg transition-transform duration-300 hover:-translate-y-1">
                  <h3 className="font-bold text-xl mb-4">Samedi et dimanche</h3>
                  <p className="text-lg">7h00 - 19h00</p>
                </div>
              </div>
              <p className="mt-8 text-bakery-brown-light text-center">Fermé les jours fériés</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const FeaturedProduct = ({ 
  title, 
  description, 
  icon,
  delay 
}: { 
  title: string; 
  description: string; 
  icon: React.ReactNode;
  delay: number;
}) => {
  return (
    <div 
      className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl hover:shadow-xl transition-all duration-500 opacity-0 animate-[fade-in_1s_ease-out_forwards]"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="flex justify-center mb-6 text-bakery-brown transition-transform duration-300 hover:scale-110">
        {icon}
      </div>
      <h3 className="font-sans font-bold text-2xl text-center text-bakery-brown-dark mb-4">{title}</h3>
      <p className="text-center text-bakery-brown leading-relaxed">{description}</p>
    </div>
  );
};

export default Index;
