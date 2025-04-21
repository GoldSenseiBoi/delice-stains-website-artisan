

const StorySection = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 opacity-0 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <h2 className="font-sans text-4xl tracking-widest text-bakery-brown-dark">NOTRE SAVOIR-FAIRE</h2>
            <div 
              className="h-px w-16 bg-bakery-brown/70 origin-left animate-reveal" 
              style={{ animationDelay: '0.6s' }}
            ></div>
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
              src="../public/images/savoir.jpg"
              alt="Fabrication du pain"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
