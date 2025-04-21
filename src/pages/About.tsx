
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-bakery-brown-dark">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2072&auto=format&fit=crop"
            alt="Boulangerie artisanale"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative h-full flex items-center justify-center text-white">
          <div className="text-center">
            <h1 className="font-script text-6xl mb-4">Notre Histoire</h1>
            <p className="max-w-xl mx-auto text-lg">
              Une tradition familiale depuis plus de 10 ans
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="font-script text-4xl text-bakery-brown-dark">Notre Savoir-faire</h2>
              <div className="prose prose-lg text-bakery-brown">
                <p>
                  Délice de Stains est une boulangerie artisanale où chaque pain, 
                  chaque viennoiserie raconte une histoire de passion et de tradition.
                </p>
                <p>
                  Depuis 2010, notre famille perpétue les méthodes traditionnelles 
                  de fabrication, en utilisant des farines sélectionnées et un 
                  savoir-faire transmis de génération en génération.
                </p>
              </div>
            </div>
            <div className="relative h-[600px] rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1509365465985-25d11c17e812?q=80&w=2075&auto=format&fit=crop"
                alt="Fabrication du pain"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-bakery-beige-light">
        <div className="container mx-auto px-4">
          <h2 className="font-script text-4xl text-center text-bakery-brown-dark mb-16">
            Nos Valeurs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <ValueCard 
              title="Tradition" 
              description="Des méthodes authentiques transmises de génération en génération"
              imageSrc="https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=2026&auto=format&fit=crop"
            />
            <ValueCard 
              title="Qualité" 
              description="Une sélection rigoureuse des meilleurs ingrédients"
              imageSrc="https://images.unsplash.com/photo-1549413468-f14c1c2728b3?q=80&w=2070&auto=format&fit=crop"
            />
            <ValueCard 
              title="Passion" 
              description="Un amour du métier qui se retrouve dans chacune de nos créations"
              imageSrc="https://images.unsplash.com/photo-1516684947595-5c5f8b1b87b5?q=80&w=2070&auto=format&fit=crop"
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-script text-4xl text-center text-bakery-brown-dark mb-16">
              Notre Équipe
            </h2>
            <div className="space-y-16">
              <TeamMember 
                name="Marc Dupont"
                role="Maître Boulanger"
                description="Avec plus de 25 ans d'expérience, Marc perpétue la tradition de la boulangerie artisanale française avec passion et expertise."
                imageSrc="https://images.unsplash.com/photo-1583394293214-28ded15ee548?q=80&w=1480&auto=format&fit=crop"
                imagePosition="left"
              />
              <TeamMember 
                name="Marie Dupont"
                role="Pâtissière"
                description="Marie apporte sa créativité et sa minutie à chaque création, rendant chaque pâtisserie unique et délicieuse."
                imageSrc="https://images.unsplash.com/photo-1545224144-2d2016b5a151?q=80&w=1480&auto=format&fit=crop"
                imagePosition="right"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 bg-bakery-brown-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-script text-4xl mb-6">Venez nous rencontrer</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Découvrez nos produits artisanaux et partagez notre passion pour la boulangerie traditionnelle
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center bg-white text-bakery-brown-dark px-8 py-3 rounded-md hover:bg-bakery-cream transition-colors duration-300"
          >
            Nous contacter
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

const ValueCard = ({ title, description, imageSrc }: { title: string; description: string; imageSrc: string }) => {
  return (
    <div className="group">
      <div className="relative h-80 mb-6 overflow-hidden rounded-lg">
        <img 
          src={imageSrc} 
          alt={title} 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <h3 className="font-sans font-bold text-xl text-bakery-brown-dark mb-3">{title}</h3>
      <p className="text-bakery-brown">{description}</p>
    </div>
  );
};

const TeamMember = ({ 
  name, 
  role, 
  description, 
  imageSrc, 
  imagePosition = 'left' 
}: { 
  name: string; 
  role: string; 
  description: string; 
  imageSrc: string;
  imagePosition?: 'left' | 'right';
}) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
      imagePosition === 'right' ? 'md:flex-row-reverse' : ''
    }`}>
      <div className="relative h-[400px] rounded-lg overflow-hidden">
        <img src={imageSrc} alt={name} className="absolute inset-0 w-full h-full object-cover" />
      </div>
      <div className="text-center md:text-left">
        <h3 className="font-sans font-bold text-2xl text-bakery-brown-dark">{name}</h3>
        <p className="font-medium text-bakery-brown-light mt-2 mb-4">{role}</p>
        <p className="text-bakery-brown">{description}</p>
      </div>
    </div>
  );
};

export default About;

