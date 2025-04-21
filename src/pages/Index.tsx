
import { Link } from "react-router-dom";
import { ArrowRight, ArrowDown } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { IconBaguette, IconCake } from "@tabler/icons-react";

const Index = () => {
  return (
    <div className="flex flex-col bg-bakery-dark">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0 animate-zoom-in opacity-40"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1472&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-black/60 z-[1]"></div>
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <p className="text-lg md:text-xl mb-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            Boulangerie Artisanale
          </p>
          <h1 className="font-script text-5xl md:text-7xl mb-8 opacity-0 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            Délice de Stains
          </h1>
          
          <div className="h-px w-24 mx-auto bg-white/30 mb-8 origin-left opacity-0 animate-reveal" style={{ animationDelay: '1.2s' }}></div>
          
          <p className="font-sans text-lg tracking-wider mb-10 max-w-xl mx-auto opacity-0 animate-fade-in" style={{ animationDelay: '1.4s' }}>
            Le goût de l'authenticité chaque matin
          </p>
          <div className="opacity-0 animate-fade-in" style={{ animationDelay: '1.8s' }}>
            <Link 
              to="/savoir-faire" 
              className="btn-secondary group"
            >
              Découvrir notre savoir-faire
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <ArrowDown className="text-white/70 h-6 w-6" />
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center space-y-10">
            <h2 className="font-sans text-4xl tracking-widest opacity-0 animate-fade-in">BIENVENUE</h2>
            
            <div className="h-px w-16 mx-auto bg-primary/70 opacity-0 animate-reveal" style={{ animationDelay: '0.3s' }}></div>
            
            <p className="text-foreground/80 leading-relaxed opacity-0 animate-fade-in" style={{ animationDelay: '0.5s' }}>
              Depuis plus de 10 ans, notre boulangerie artisanale vous propose des produits frais et authentiques, 
              fabriqués dans le respect des traditions avec des ingrédients de qualité.
              Située au cœur de Stains, notre enseigne familiale vous accueille tous les jours dans une ambiance 
              chaleureuse et conviviale.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 pt-4 opacity-0 animate-fade-in" style={{ animationDelay: '0.7s' }}>
              <Link 
                to="/savoir-faire" 
                className="btn-secondary group"
              >
                Notre savoir-faire
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link 
                to="/a-propos" 
                className="btn-secondary group"
              >
                Notre histoire
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Separator className="divider max-w-xl" />

      {/* Featured Products */}
      <section className="section-padding bg-bakery-dark-brown/50">
        <div className="container mx-auto">
          <h2 className="font-sans text-4xl text-center tracking-widest mb-16 opacity-0 animate-fade-in">NOS PRODUITS</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <FeaturedProduct 
              title="Baguette tradition" 
              description="Croustillante à l'extérieur, moelleuse à l'intérieur, notre baguette tradition est préparée selon une recette traditionnelle."
              icon={<IconBaguette className="h-10 w-10" />}
              delay={0.3}
            />
            <FeaturedProduct 
              title="Pain au levain" 
              description="Fabriqué avec notre levain naturel maison, ce pain légèrement acidulé offre une mie dense et une croûte épaisse."
              icon={<IconBaguette className="h-10 w-10" />}
              delay={0.6}
            />
            <FeaturedProduct 
              title="Flan pâtissier" 
              description="Un grand classique de la pâtisserie française : notre flan à la texture crémeuse et à la saveur vanillée intense."
              icon={<IconCake className="h-10 w-10" />}
              delay={0.9}
            />
          </div>
          
          <div className="text-center mt-16 opacity-0 animate-fade-in" style={{ animationDelay: '1.2s' }}>
            <Link 
              to="/produits" 
              className="btn-secondary group"
            >
              Voir tous nos produits
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      <Separator className="divider max-w-xl" />

      {/* Opening Hours with Image */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="relative h-[500px] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=2026&auto=format&fit=crop" 
                alt="Notre boulangerie"
                className="absolute inset-0 w-full h-full object-cover opacity-0 animate-fade-in"
                style={{ animationDelay: '0.3s' }}
              />
            </div>
            <div className="flex items-center justify-center">
              <div className="max-w-xl space-y-10 opacity-0 animate-fade-in" style={{ animationDelay: '0.5s' }}>
                <h2 className="font-sans text-4xl tracking-widest">HORAIRES</h2>
                
                <div className="h-px w-16 bg-primary/70 animate-reveal" style={{ animationDelay: '0.8s' }}></div>
                
                <div className="grid grid-cols-1 gap-8 text-foreground/80">
                  <div className="border border-border/30 p-8 hover:border-primary/50 transition-colors duration-300">
                    <h3 className="text-lg mb-8 tracking-wider">DU LUNDI AU VENDREDI</h3>
                    <p className="text-2xl">7h00 - 19h30</p>
                  </div>
                  <div className="border border-border/30 p-8 hover:border-primary/50 transition-colors duration-300">
                    <h3 className="text-lg mb-8 tracking-wider">SAMEDI ET DIMANCHE</h3>
                    <p className="text-2xl">7h00 - 19h00</p>
                  </div>
                </div>
                <p className="mt-8 text-foreground/60 text-center">Fermé les jours fériés</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Separator className="divider max-w-xl" />

      {/* Instagram CTA */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center space-y-8 opacity-0 animate-fade-in">
            <h2 className="font-sans text-4xl tracking-widest">SUIVEZ-NOUS</h2>
            
            <div className="h-px w-16 mx-auto bg-primary/70 animate-reveal" style={{ animationDelay: '0.3s' }}></div>
            
            <p className="text-foreground/80 leading-relaxed">
              Découvrez notre quotidien, nos créations et nos promotions sur Instagram
            </p>
            <div className="pt-4">
              <a 
                href="https://www.instagram.com/delice2stains" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-secondary group"
              >
                @delice2stains
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
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
      className="border border-border/30 p-8 hover:border-primary/50 transition-all duration-500 opacity-0 animate-fade-in flex flex-col items-center"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="mb-6 text-foreground/80 transition-transform duration-300 hover:scale-110">
        {icon}
      </div>
      <h3 className="font-sans text-xl text-center tracking-wide mb-4">{title}</h3>
      <p className="text-center text-foreground/70 leading-relaxed">{description}</p>
    </div>
  );
};

export default Index;
