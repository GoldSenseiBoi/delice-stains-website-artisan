
import { IconBaguette, IconCookie, IconCake } from "@tabler/icons-react";
import { Separator } from "@/components/ui/separator";

const SavoirFaire = () => {
  return (
    <div className="flex flex-col bg-bakery-dark">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0 animate-zoom-in opacity-40"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1517433670267-08bbd4be890f?q=80&w=1800')",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-black/60 z-[1]"></div>
        <div className="container relative z-10 px-6 text-center">
          <h1 className="font-sans text-5xl md:text-6xl tracking-widest mb-8 opacity-0 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            NOTRE SAVOIR-FAIRE
          </h1>
          
          <div className="h-px w-24 mx-auto bg-white/30 mb-8 origin-left opacity-0 animate-reveal" style={{ animationDelay: '0.8s' }}></div>
          
          <p className="font-sans text-lg tracking-wider max-w-2xl mx-auto opacity-0 animate-fade-in" style={{ animationDelay: '1s' }}>
            La tradition boulangère transmise de génération en génération
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-sans text-4xl text-center tracking-widest mb-10 opacity-0 animate-fade-in">
              L'ART DE LA BOULANGERIE
            </h2>
            
            <div className="h-px w-16 mx-auto bg-primary/70 mb-12 origin-left opacity-0 animate-reveal" style={{ animationDelay: '0.3s' }}></div>
            
            <div className="font-sans text-foreground/80 space-y-8 leading-relaxed opacity-0 animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <p>
                Chez Délice de Stains, nous perpétuons un savoir-faire artisanal transmis de génération en génération. 
                Notre passion pour le pain et les viennoiseries nous pousse à rechercher l'excellence dans chacune de nos créations.
              </p>
              <p>
                Nous sélectionnons avec soin nos ingrédients, privilégiant les farines de qualité et les produits locaux. 
                Nos méthodes de fabrication, respectueuses des traditions, permettent d'obtenir des produits au goût authentique 
                et aux saveurs préservées.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Separator className="divider max-w-xl" />

      {/* Our Processes */}
      <section className="section-padding bg-bakery-dark-brown/50">
        <div className="container mx-auto">
          <h2 className="font-sans text-4xl text-center tracking-widest mb-16 opacity-0 animate-fade-in">
            NOS PROCÉDÉS
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <Process 
              title="PÉTRISSAGE LENT" 
              description="Nous pratiquons un pétrissage lent qui préserve toutes les qualités de la farine et permet un meilleur développement des arômes."
              icon={<IconBaguette className="w-10 h-10" />}
              delay={0.3}
            />
            <Process 
              title="FERMENTATION LONGUE" 
              description="Notre pâte fermente pendant plusieurs heures, ce qui lui confère une texture aérée et un goût développé, sans additifs ni améliorants."
              icon={<IconCookie className="w-10 h-10" />}
              delay={0.6}
            />
            <Process 
              title="CUISSON TRADITIONNELLE" 
              description="Nos produits sont cuits dans un four à sole, garantissant une croûte croustillante et une mie moelleuse."
              icon={<IconCake className="w-10 h-10" />}
              delay={0.9}
            />
          </div>
        </div>
      </section>

      <Separator className="divider max-w-xl" />

      {/* Our Ingredients */}
      <section className="section-padding">
        <div className="container mx-auto">
          <h2 className="font-sans text-4xl text-center tracking-widest mb-10 opacity-0 animate-fade-in">
            NOS INGRÉDIENTS
          </h2>
          
          <div className="h-px w-16 mx-auto bg-primary/70 mb-16 origin-left opacity-0 animate-reveal" style={{ animationDelay: '0.3s' }}></div>
          
          <div className="max-w-3xl mx-auto">
            <p className="font-sans text-foreground/80 mb-16 text-center opacity-0 animate-fade-in" style={{ animationDelay: '0.5s' }}>
              La qualité de nos produits commence par le choix rigoureux de nos ingrédients
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {ingredients.map((ingredient, index) => (
                <div 
                  key={ingredient.title}
                  className="border border-border/30 p-8 hover:border-primary/50 transition-all duration-300 opacity-0 animate-fade-in"
                  style={{ animationDelay: `${0.3 * (index + 1)}s` }}
                >
                  <h3 className="font-sans text-xl tracking-wide mb-6">{ingredient.title}</h3>
                  <p className="font-sans text-foreground/70">{ingredient.description}</p>
                </div>
              ))}
            </div>
            
            <blockquote className="font-sans text-xl text-center italic text-foreground/90 mt-16 opacity-0 animate-fade-in" style={{ animationDelay: '1.6s' }}>
              "Le secret d'un bon pain, c'est la patience et le respect des ingrédients."
            </blockquote>
          </div>
        </div>
      </section>

      <Separator className="divider max-w-xl" />

      {/* Call to Action */}
      <section className="section-padding bg-bakery-dark-brown/50">
        <div className="container mx-auto text-center">
          <h2 className="font-sans text-3xl tracking-widest mb-8 opacity-0 animate-fade-in">DÉCOUVRIR NOS CRÉATIONS</h2>
          
          <div className="h-px w-16 mx-auto bg-primary/70 mb-10 origin-left opacity-0 animate-reveal" style={{ animationDelay: '0.3s' }}></div>
          
          <p className="font-sans max-w-2xl mx-auto mb-10 text-foreground/80 opacity-0 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            Chaque jour, nous préparons avec passion une large gamme de pains, viennoiseries et pâtisseries 
            pour satisfaire toutes vos envies gourmandes.
          </p>
          <a 
            href="/produits" 
            className="btn-secondary group opacity-0 animate-fade-in"
            style={{ animationDelay: '0.7s' }}
          >
            DÉCOUVRIR NOS PRODUITS
            <span className="ml-2">→</span>
          </a>
        </div>
      </section>
    </div>
  );
};

const Process = ({ 
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
      className="border border-border/30 p-8 text-center opacity-0 animate-fade-in hover:border-primary/50 transition-all duration-500"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="inline-flex items-center justify-center mb-6 text-foreground/80">
        {icon}
      </div>
      <h3 className="font-sans text-xl tracking-wide mb-6">{title}</h3>
      <p className="font-sans text-foreground/70">{description}</p>
    </div>
  );
};

const ingredients = [
  {
    title: "DES FARINES SÉLECTIONNÉES",
    description: "Nous utilisons des farines de blé issues de l'agriculture raisonnée, riches en goût et en nutriments."
  },
  {
    title: "NOTRE LEVAIN NATUREL",
    description: "Fabriqué à partir de farine et d'eau, notre levain est cultivé quotidiennement pour garantir sa vivacité."
  },
  {
    title: "DU BEURRE AOP",
    description: "Pour nos viennoiseries, nous n'utilisons que du beurre fin de qualité supérieure."
  },
  {
    title: "DES ŒUFS FRAIS",
    description: "Issus d'élevages en plein air pour toutes nos pâtisseries."
  }
];

export default SavoirFaire;
