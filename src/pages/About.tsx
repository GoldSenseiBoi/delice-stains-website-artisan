
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="flex flex-col">
      {/* Header Banner */}
      <section className="relative py-20 bg-bakery-brown-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-script text-5xl mb-4">À Propos</h1>
          <p className="max-w-2xl mx-auto">
            Découvrez l'histoire et les valeurs de notre boulangerie artisanale
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-script text-3xl text-center text-bakery-brown-dark mb-8">Notre Histoire</h2>
            
            <div className="space-y-6 text-bakery-brown">
              <p>
                Délice de Stains est une boulangerie artisanale créée par la famille Dupont en 2010. 
                Ce qui a commencé comme un rêve de partager leur passion pour le pain et les viennoiseries 
                traditionnels s'est transformé en une aventure familiale qui dure depuis plus de dix ans.
              </p>
              
              <p>
                Marc Dupont, maître boulanger passionné, a appris son métier auprès des meilleurs artisans de France. 
                Après des années d'expérience dans des boulangeries renommées, il a décidé de créer sa propre enseigne 
                à Stains, accompagné de son épouse Marie, pâtissière de formation.
              </p>
              
              <p>
                Au fil des années, Délice de Stains est devenu un repère incontournable pour les habitants du quartier 
                et des environs, à la recherche de produits authentiques et de qualité. La boulangerie s'est forgée une 
                réputation d'excellence grâce à son engagement envers les méthodes traditionnelles et les ingrédients de qualité.
              </p>
              
              <p>
                Aujourd'hui, la deuxième génération de la famille commence à s'impliquer dans l'entreprise, 
                perpétuant ainsi les traditions tout en apportant une touche de modernité à cette belle aventure artisanale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-bakery-beige-light">
        <div className="container mx-auto px-4">
          <h2 className="font-script text-3xl text-center text-bakery-brown-dark mb-12">Nos Valeurs</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ValueCard 
              title="Tradition" 
              description="Nous perpétuons les méthodes traditionnelles de boulangerie, transmises de génération en génération."
            />
            <ValueCard 
              title="Qualité" 
              description="Nous sélectionnons rigoureusement nos ingrédients pour vous offrir des produits d'exception."
            />
            <ValueCard 
              title="Authenticité" 
              description="Nous créons des produits artisanaux, sans additifs ni conservateurs, pour préserver les saveurs authentiques."
            />
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-script text-3xl text-center text-bakery-brown-dark mb-12">Notre Équipe</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <TeamMember 
              name="Marc Dupont" 
              role="Maître Boulanger, Fondateur" 
              description="Fort de 25 ans d'expérience, Marc est l'âme de notre boulangerie. Son expertise et sa passion se retrouvent dans chaque pain qui sort de notre four."
              imageSrc="https://images.unsplash.com/photo-1583394293214-28ded15ee548?q=80&w=1480&auto=format&fit=crop"
            />
            <TeamMember 
              name="Marie Dupont" 
              role="Pâtissière, Co-fondatrice" 
              description="Marie apporte sa créativité et sa minutie à toutes nos pâtisseries. Son flan pâtissier est devenu l'une des spécialités les plus appréciées de la boulangerie."
              imageSrc="https://images.unsplash.com/photo-1545224144-2d2016b5a151?q=80&w=1480&auto=format&fit=crop"
            />
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="py-16 bg-bakery-beige-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-script text-3xl text-bakery-brown-dark mb-8">Notre Engagement</h2>
            
            <p className="text-bakery-brown mb-8">
              Chez Délice de Stains, nous nous engageons à :
            </p>
            
            <ul className="text-left space-y-4 mb-8 inline-block mx-auto">
              <li className="flex items-start">
                <span className="mr-3 text-bakery-brown-dark">•</span>
                <p>Préserver le patrimoine boulanger français en respectant les méthodes artisanales.</p>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-bakery-brown-dark">•</span>
                <p>Sélectionner des ingrédients de qualité, locaux lorsque c'est possible.</p>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-bakery-brown-dark">•</span>
                <p>Offrir à nos clients des produits frais, fabriqués chaque jour dans notre laboratoire.</p>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-bakery-brown-dark">•</span>
                <p>Maintenir une relation de proximité avec notre clientèle et notre communauté.</p>
              </li>
            </ul>
            
            <Link 
              to="/contact" 
              className="inline-flex items-center bg-bakery-brown text-white px-6 py-3 rounded-md hover:bg-bakery-brown-dark transition-colors duration-300"
            >
              Nous contacter
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

const ValueCard = ({ title, description }: { title: string; description: string }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <h3 className="font-sans font-bold text-xl text-bakery-brown-dark mb-3">{title}</h3>
      <p className="text-bakery-brown">{description}</p>
    </div>
  );
};

const TeamMember = ({ name, role, description, imageSrc }: { name: string; role: string; description: string; imageSrc: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-6">
      <div className="w-36 h-36 rounded-full overflow-hidden flex-shrink-0">
        <img src={imageSrc} alt={name} className="w-full h-full object-cover" />
      </div>
      <div>
        <h3 className="font-sans font-bold text-xl text-bakery-brown-dark">{name}</h3>
        <p className="font-medium text-bakery-brown-light mb-2">{role}</p>
        <p className="text-bakery-brown">{description}</p>
      </div>
    </div>
  );
};

export default About;
