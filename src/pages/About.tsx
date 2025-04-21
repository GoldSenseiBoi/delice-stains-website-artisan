
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";

const About = () => {
  return (
    <div className="flex flex-col bg-bakery-beige-light text-bakery-brown-dark">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2072&auto=format&fit=crop"
            alt="Boulangerie artisanale"
            className="w-full h-full object-cover opacity-30 animate-zoom-in"
          />
        </div>
        <div className="absolute inset-0 bg-bakery-brown/20 z-[1]"></div>
        <div className="relative h-full flex items-center justify-center text-bakery-brown-dark z-10">
          <div className="text-center">
            <h1 className="font-sans text-5xl tracking-widest mb-8 opacity-0 animate-fade-in" style={{ animationDelay: '0.5s' }}>NOTRE HISTOIRE</h1>
            
            <div className="h-px w-24 mx-auto bg-bakery-brown/30 mb-8 origin-left opacity-0 animate-reveal" style={{ animationDelay: '0.8s' }}></div>
            
            <p className="max-w-xl mx-auto text-lg tracking-wide opacity-0 animate-fade-in" style={{ animationDelay: '1s' }}>
              Une tradition familiale depuis plus de 10 ans
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 opacity-0 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <h2 className="font-sans text-4xl tracking-widest text-bakery-brown-dark">NOTRE SAVOIR-FAIRE</h2>
              
              <div className="h-px w-16 bg-bakery-brown/70 origin-left animate-reveal" style={{ animationDelay: '0.6s' }}></div>
              
              <div className="text-bakery-brown/80 space-y-6">
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
            <div className="relative h-[600px] overflow-hidden opacity-0 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <img
                src="https://images.unsplash.com/photo-1509365465985-25d11c17e812?q=80&w=2075&auto=format&fit=crop"
                alt="Fabrication du pain"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <Separator className="divider max-w-xl" />

      {/* Values Section */}
      <section className="section-padding bg-bakery-beige-medium/50">
        <div className="container mx-auto">
          <h2 className="font-sans text-4xl text-center tracking-widest mb-16 opacity-0 animate-fade-in text-bakery-brown-dark">
            NOS VALEURS
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <ValueCard 
              title="TRADITION" 
              description="Des méthodes authentiques transmises de génération en génération"
              imageSrc="https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=2026&auto=format&fit=crop"
              delay={0.3}
            />
            <ValueCard 
              title="QUALITÉ" 
              description="Une sélection rigoureuse des meilleurs ingrédients"
              imageSrc="https://images.unsplash.com/photo-1549413468-f14c1c2728b3?q=80&w=2070&auto=format&fit=crop"
              delay={0.6}
            />
            <ValueCard 
              title="PASSION" 
              description="Un amour du métier qui se retrouve dans chacune de nos créations"
              imageSrc="https://images.unsplash.com/photo-1516684947595-5c5f8b1b87b5?q=80&w=2070&auto=format&fit=crop"
              delay={0.9}
            />
          </div>
        </div>
      </section>

      <Separator className="divider max-w-xl" />

      {/* Team Section */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-sans text-4xl text-center tracking-widest mb-16 opacity-0 animate-fade-in text-bakery-brown-dark">
              NOTRE ÉQUIPE
            </h2>
            
            <div className="space-y-24">
              <TeamMember 
                name="MARC DUPONT"
                role="Maître Boulanger"
                description="Avec plus de 25 ans d'expérience, Marc perpétue la tradition de la boulangerie artisanale française avec passion et expertise."
                imageSrc="https://images.unsplash.com/photo-1583394293214-28ded15ee548?q=80&w=1480&auto=format&fit=crop"
                imagePosition="left"
                delay={0.3}
              />
              <TeamMember 
                name="MARIE DUPONT"
                role="Pâtissière"
                description="Marie apporte sa créativité et sa minutie à chaque création, rendant chaque pâtisserie unique et délicieuse."
                imageSrc="https://images.unsplash.com/photo-1545224144-2d2016b5a151?q=80&w=1480&auto=format&fit=crop"
                imagePosition="right"
                delay={0.6}
              />
            </div>
          </div>
        </div>
      </section>

      <Separator className="divider max-w-xl" />

      {/* Contact CTA */}
      <section className="section-padding bg-bakery-beige-medium/50">
        <div className="container mx-auto text-center">
          <h2 className="font-sans text-4xl tracking-widest mb-8 opacity-0 animate-fade-in text-bakery-brown-dark">VENEZ NOUS RENCONTRER</h2>
          
          <div className="h-px w-16 mx-auto bg-bakery-brown/70 mb-10 origin-left opacity-0 animate-reveal" style={{ animationDelay: '0.3s' }}></div>
          
          <p className="text-lg mb-10 max-w-2xl mx-auto text-bakery-brown/80 opacity-0 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            Découvrez nos produits artisanaux et partagez notre passion pour la boulangerie traditionnelle
          </p>
          <Link 
            to="/contact" 
            className="btn-secondary group opacity-0 animate-fade-in"
            style={{ animationDelay: '0.7s' }}
          >
            NOUS CONTACTER
            <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </div>
  );
};

const ValueCard = ({ 
  title, 
  description, 
  imageSrc,
  delay
}: { 
  title: string; 
  description: string; 
  imageSrc: string;
  delay: number;
}) => {
  return (
    <div className="group opacity-0 animate-fade-in" style={{ animationDelay: `${delay}s` }}>
      <div className="relative h-80 mb-8 overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10 group-hover:bg-black/20 transition-colors duration-500"></div>
        <img 
          src={imageSrc} 
          alt={title} 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      <h3 className="font-sans text-xl tracking-wide mb-4 text-bakery-brown-dark">{title}</h3>
      <p className="font-sans text-bakery-brown/70">{description}</p>
    </div>
  );
};

const TeamMember = ({ 
  name, 
  role, 
  description, 
  imageSrc, 
  imagePosition = 'left',
  delay
}: { 
  name: string; 
  role: string; 
  description: string; 
  imageSrc: string;
  imagePosition?: 'left' | 'right';
  delay: number;
}) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center opacity-0 animate-fade-in ${
      imagePosition === 'right' ? 'md:flex-row-reverse' : ''
    }`} style={{ animationDelay: `${delay}s` }}>
      <div className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        <img src={imageSrc} alt={name} className="absolute inset-0 w-full h-full object-cover" />
      </div>
      <div className="text-center md:text-left">
        <h3 className="font-sans text-2xl tracking-wide mb-2 text-bakery-brown-dark">{name}</h3>
        <p className="font-medium text-bakery-brown/80 mt-2 mb-6">{role}</p>
        <p className="text-bakery-brown/70">{description}</p>
      </div>
    </div>
  );
};

export default About;

