
import ValueCard from './ValueCard';

const ValuesSection = () => {
  return (
    <section className="section-padding bg-bakery-beige-medium/50">
      <div className="container mx-auto">
        <h2 className="font-sans text-4xl text-center tracking-widest mb-16 opacity-0 animate-fade-in text-bakery-brown-dark">
          NOS VALEURS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <ValueCard 
            title="TRADITION" 
            description="Des méthodes authentiques transmises de génération en génération"
            imageSrc="../public/images/tradition.jpg"
            delay={0.3}
          />
          <ValueCard 
            title="QUALITÉ" 
            description="Une sélection rigoureuse des meilleurs ingrédients"
            imageSrc="../../public/images/quality.jpg"
            delay={0.6}
          />
          <ValueCard 
            title="PASSION" 
            description="Un amour du métier qui se retrouve dans chacune de nos créations"
            imageSrc="../../public/images/passion.jpg"
            delay={0.9}
          />
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
