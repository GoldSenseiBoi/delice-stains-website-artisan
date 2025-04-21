
import { IconBaguette, IconCookie, IconCake } from "@tabler/icons-react";

const SavoirFaire = () => {
  return (
    <div className="flex flex-col">
      {/* Header Banner */}
      <section className="relative py-20 bg-bakery-brown-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-script text-5xl mb-4">Notre Savoir-Faire</h1>
          <p className="max-w-2xl mx-auto">
            La tradition boulangère transmise de génération en génération
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-script text-3xl text-center text-bakery-brown-dark mb-8">L'art de la boulangerie artisanale</h2>
            <p className="text-bakery-brown mb-6">
              Chez Délice de Stains, nous perpétuons un savoir-faire artisanal transmis de génération en génération. 
              Notre passion pour le pain et les viennoiseries nous pousse à rechercher l'excellence dans chacune de nos créations.
            </p>
            <p className="text-bakery-brown">
              Nous sélectionnons avec soin nos ingrédients, privilégiant les farines de qualité et les produits locaux. 
              Nos méthodes de fabrication, respectueuses des traditions, permettent d'obtenir des produits au goût authentique 
              et aux saveurs préservées.
            </p>
          </div>
        </div>
      </section>

      {/* Our Processes */}
      <section className="py-16 bg-bakery-beige-light">
        <div className="container mx-auto px-4">
          <h2 className="font-script text-3xl text-center text-bakery-brown-dark mb-12">Nos procédés de fabrication</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Process 
              title="Pétrissage lent" 
              description="Nous pratiquons un pétrissage lent qui préserve toutes les qualités de la farine et permet un meilleur développement des arômes."
              icon={<IconBaguette />}
            />
            <Process 
              title="Fermentation longue" 
              description="Notre pâte fermente pendant plusieurs heures, ce qui lui confère une texture aérée et un goût développé, sans additifs ni améliorants."
              icon={<IconCookie />}
            />
            <Process 
              title="Cuisson traditionnelle" 
              description="Nos produits sont cuits dans un four à sole, garantissant une croûte croustillante et une mie moelleuse."
              icon={<IconCake />}
            />
          </div>
        </div>
      </section>

      {/* Our Ingredients */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-script text-3xl text-center text-bakery-brown-dark mb-8">Des ingrédients de qualité</h2>
          
          <div className="max-w-3xl mx-auto">
            <p className="text-bakery-brown mb-6">
              La qualité de nos produits commence par le choix rigoureux de nos ingrédients :
            </p>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <span className="bg-bakery-beige-medium text-bakery-brown-dark rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">1</span>
                <p><strong className="text-bakery-brown-dark">Des farines sélectionnées</strong> : Nous utilisons des farines de blé issues de l'agriculture raisonnée, riches en goût et en nutriments.</p>
              </li>
              <li className="flex items-start">
                <span className="bg-bakery-beige-medium text-bakery-brown-dark rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">2</span>
                <p><strong className="text-bakery-brown-dark">Notre levain naturel</strong> : Fabriqué à partir de farine et d'eau, notre levain est cultivé quotidiennement pour garantir sa vivacité.</p>
              </li>
              <li className="flex items-start">
                <span className="bg-bakery-beige-medium text-bakery-brown-dark rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">3</span>
                <p><strong className="text-bakery-brown-dark">Du beurre AOP</strong> : Pour nos viennoiseries, nous n'utilisons que du beurre fin de qualité supérieure.</p>
              </li>
              <li className="flex items-start">
                <span className="bg-bakery-beige-medium text-bakery-brown-dark rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">4</span>
                <p><strong className="text-bakery-brown-dark">Des œufs frais</strong> : Issus d'élevages en plein air pour toutes nos pâtisseries.</p>
              </li>
            </ul>
            
            <p className="text-bakery-brown italic text-center">
              "Le secret d'un bon pain, c'est la patience et le respect des ingrédients."
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-bakery-brown-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-script text-3xl mb-6">Venez découvrir nos créations</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Chaque jour, nous préparons avec passion une large gamme de pains, viennoiseries et pâtisseries 
            pour satisfaire toutes vos envies gourmandes.
          </p>
          <a 
            href="/produits" 
            className="inline-block bg-bakery-beige-medium text-bakery-brown-dark px-6 py-3 rounded-md hover:bg-bakery-beige-dark transition-colors duration-300"
          >
            Découvrir nos produits
          </a>
        </div>
      </section>
    </div>
  );
};

const Process = ({ title, description, icon }: { title: string; description: string; icon: React.ReactNode }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-bakery-beige-medium text-bakery-brown-dark mb-4">
        {icon}
      </div>
      <h3 className="font-sans font-bold text-xl text-bakery-brown-dark mb-3">{title}</h3>
      <p className="text-bakery-brown">{description}</p>
    </div>
  );
};

export default SavoirFaire;
