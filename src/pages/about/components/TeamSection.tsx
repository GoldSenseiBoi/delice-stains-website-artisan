
import TeamMember from './TeamMember';

const TeamSection = () => {
  return (
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
              imageSrc="../../public/images/marie.jpg"
              imagePosition="right"
              delay={0.6}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
