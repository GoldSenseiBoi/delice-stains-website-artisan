
import { IconBaguette, IconCookie, IconCake } from "@tabler/icons-react";

const SavoirFaire = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ 
            backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('https://images.unsplash.com/photo-1517433670267-08bbd4be890f?q=80&w=1800')",
            backgroundPosition: "center",
          }}
        />
        <div className="container relative z-10 px-6 text-center">
          <h1 className="font-cormorant text-6xl md:text-7xl text-white mb-6 opacity-0 animate-[fade-in_1s_ease-out_0.5s_forwards]">
            Notre Savoir-Faire
          </h1>
          <p className="font-montserrat text-lg md:text-xl text-white/90 max-w-2xl mx-auto opacity-0 animate-[fade-in_1s_ease-out_0.8s_forwards]">
            La tradition boulangère transmise de génération en génération
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-cormorant text-4xl md:text-5xl text-center text-bakery-brown-dark mb-12">
              L'art de la boulangerie artisanale
            </h2>
            <div className="font-montserrat text-lg space-y-6 text-bakery-brown leading-relaxed">
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

      {/* Our Processes */}
      <section className="py-24 bg-bakery-cream">
        <div className="container mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl text-center text-bakery-brown-dark mb-16">
            Nos procédés de fabrication
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <Process 
              title="Pétrissage lent" 
              description="Nous pratiquons un pétrissage lent qui préserve toutes les qualités de la farine et permet un meilleur développement des arômes."
              icon={<IconBaguette className="w-12 h-12" />}
              delay={0.3}
            />
            <Process 
              title="Fermentation longue" 
              description="Notre pâte fermente pendant plusieurs heures, ce qui lui confère une texture aérée et un goût développé, sans additifs ni améliorants."
              icon={<IconCookie className="w-12 h-12" />}
              delay={0.6}
            />
            <Process 
              title="Cuisson traditionnelle" 
              description="Nos produits sont cuits dans un four à sole, garantissant une croûte croustillante et une mie moelleuse."
              icon={<IconCake className="w-12 h-12" />}
              delay={0.9}
            />
          </div>
        </div>
      </section>

      {/* Our Ingredients */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl text-center text-bakery-brown-dark mb-12">
            Des ingrédients de qualité
          </h2>
          
          <div className="max-w-3xl mx-auto">
            <p className="font-montserrat text-lg text-bakery-brown mb-12 text-center">
              La qualité de nos produits commence par le choix rigoureux de nos ingrédients
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {ingredients.map((ingredient, index) => (
                <div 
                  key={ingredient.title}
                  className="p-8 bg-bakery-cream rounded-2xl opacity-0 animate-[fade-in_1s_ease-out_forwards]"
                  style={{ animationDelay: `${0.3 * (index + 1)}s` }}
                >
                  <h3 className="font-cormorant text-2xl text-bakery-brown-dark mb-4">{ingredient.title}</h3>
                  <p className="font-montserrat text-bakery-brown">{ingredient.description}</p>
                </div>
              ))}
            </div>
            
            <blockquote className="font-cormorant text-2xl text-center italic text-bakery-brown mt-16">
              "Le secret d'un bon pain, c'est la patience et le respect des ingrédients."
            </blockquote>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-bakery-brown-dark text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-cormorant text-4xl mb-6">Venez découvrir nos créations</h2>
          <p className="font-montserrat max-w-2xl mx-auto mb-8">
            Chaque jour, nous préparons avec passion une large gamme de pains, viennoiseries et pâtisseries 
            pour satisfaire toutes vos envies gourmandes.
          </p>
          <a 
            href="/produits" 
            className="inline-block font-montserrat bg-white text-bakery-brown-dark px-8 py-4 rounded-full hover:bg-bakery-beige-light transition-colors duration-300"
          >
            Découvrir nos produits
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
      className="p-8 bg-white rounded-2xl text-center opacity-0 animate-[fade-in_1s_ease-out_forwards] hover:shadow-xl transition-all duration-500"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-bakery-cream text-bakery-brown-dark mb-6">
        {icon}
      </div>
      <h3 className="font-cormorant text-2xl text-bakery-brown-dark mb-4">{title}</h3>
      <p className="font-montserrat text-bakery-brown">{description}</p>
    </div>
  );
};

const ingredients = [
  {
    title: "Des farines sélectionnées",
    description: "Nous utilisons des farines de blé issues de l'agriculture raisonnée, riches en goût et en nutriments."
  },
  {
    title: "Notre levain naturel",
    description: "Fabriqué à partir de farine et d'eau, notre levain est cultivé quotidiennement pour garantir sa vivacité."
  },
  {
    title: "Du beurre AOP",
    description: "Pour nos viennoiseries, nous n'utilisons que du beurre fin de qualité supérieure."
  },
  {
    title: "Des œufs frais",
    description: "Issus d'élevages en plein air pour toutes nos pâtisseries."
  }
];

export default SavoirFaire;
