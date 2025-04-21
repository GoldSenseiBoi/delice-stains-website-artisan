

const Hero = () => {
  return (
    <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
  <div className="absolute inset-0">
    <img
      src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2072&auto=format&fit=crop"
      alt="Boulangerie artisanale"
      className="w-full h-full object-cover opacity-80 animate-zoom-in"
    />
  </div>

  {/* Couche sombre pour améliorer le contraste */}
  <div className="absolute inset-0 bg-black/50 z-[1]"></div>

  <div className="relative h-full flex items-center justify-center text-white z-10">
    <div className="text-center">
      <h1
        className="font-sans text-5xl tracking-widest mb-8 opacity-0 animate-fade-in drop-shadow-lg"
        style={{ animationDelay: '0.5s' }}
      >
        NOTRE HISTOIRE
      </h1>

      <div
        className="h-px w-24 mx-auto bg-white mb-8 origin-left opacity-0 animate-reveal"
        style={{ animationDelay: '0.8s' }}
      ></div>

      <p
        className="max-w-xl mx-auto text-lg tracking-wide opacity-0 animate-fade-in drop-shadow-md"
        style={{ animationDelay: '1s' }}
      >
        Une tradition familiale depuis plus de 10 ans
      </p>
    </div>
  </div>
</section>

  );
};

export default Hero;
