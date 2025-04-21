
import { Phone, MapPin, Instagram, Clock, ArrowRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Contact = () => {
  return (
    <div className="flex flex-col bg-bakery-dark">
      {/* Header Banner */}
      <section className="relative py-20 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1518481612222-68bbe828ecd1?q=80&w=2070&auto=format&fit=crop"
            alt="Boulangerie artisanale"
            className="w-full h-full object-cover opacity-20 animate-zoom-in"
          />
        </div>
        <div className="absolute inset-0 bg-black/60 z-[1]"></div>
        <div className="container relative z-10 text-center">
          <h1 className="font-sans text-5xl tracking-widest mb-8 opacity-0 animate-fade-in" style={{ animationDelay: '0.5s' }}>CONTACT</h1>
          
          <div className="h-px w-24 mx-auto bg-white/30 mb-8 origin-left opacity-0 animate-reveal" style={{ animationDelay: '0.8s' }}></div>
          
          <p className="max-w-2xl mx-auto text-lg tracking-wide opacity-0 animate-fade-in" style={{ animationDelay: '1s' }}>
            Venez nous rencontrer ou contactez-nous pour toute information
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              {/* Left Column - Info */}
              <div className="opacity-0 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <h2 className="font-sans text-3xl tracking-widest mb-10">INFORMATIONS</h2>
                
                <div className="h-px w-16 bg-primary/70 mb-12 origin-left animate-reveal" style={{ animationDelay: '0.6s' }}></div>
                
                <div className="space-y-12">
                  <div className="flex items-start gap-6 group">
                    <div className="mt-1 text-primary/80 group-hover:text-primary transition-colors duration-300">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h3 className="font-sans text-xl tracking-wide mb-4">ADRESSE</h3>
                      <p className="text-foreground/80">29 rue Parmentier</p>
                      <p className="text-foreground/80">93240 Stains</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-6 group">
                    <div className="mt-1 text-primary/80 group-hover:text-primary transition-colors duration-300">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h3 className="font-sans text-xl tracking-wide mb-4">TÉLÉPHONE</h3>
                      <p className="text-foreground/80">01 XX XX XX XX</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-6 group">
                    <div className="mt-1 text-primary/80 group-hover:text-primary transition-colors duration-300">
                      <Instagram size={24} />
                    </div>
                    <div>
                      <h3 className="font-sans text-xl tracking-wide mb-4">INSTAGRAM</h3>
                      <a 
                        href="https://www.instagram.com/delice2stains" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        @delice2stains
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-6 group">
                    <div className="mt-1 text-primary/80 group-hover:text-primary transition-colors duration-300">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h3 className="font-sans text-xl tracking-wide mb-4">HORAIRES</h3>
                      <p className="text-foreground/80">Lundi au vendredi : 7h00 - 19h30</p>
                      <p className="text-foreground/80">Samedi et dimanche : 7h00 - 19h00</p>
                      <p className="text-foreground/60 mt-2 text-sm italic">Fermé les jours fériés</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right Column - Map */}
              <div className="opacity-0 animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <h2 className="font-sans text-3xl tracking-widest mb-10">NOUS TROUVER</h2>
                
                <div className="h-px w-16 bg-primary/70 mb-12 origin-left animate-reveal" style={{ animationDelay: '0.9s' }}></div>
                
                <div className="h-80 overflow-hidden border border-border/30">
                  {/* Embedded map iframe would go here */}
                  <div className="w-full h-full flex items-center justify-center bg-bakery-dark-brown/50">
                    <p className="text-center text-foreground/70 p-4">
                      Carte interactive
                      <br />
                      <span className="text-sm">(29 rue Parmentier, 93240 Stains)</span>
                    </p>
                  </div>
                </div>
                <p className="mt-6 text-foreground/70">
                  Nous sommes facilement accessibles en transports en commun et disposons d'un stationnement à proximité.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Separator className="divider max-w-xl" />

      {/* Contact Form */}
      <section className="section-padding bg-bakery-dark-brown/50">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-sans text-3xl text-center tracking-widest mb-10 opacity-0 animate-fade-in">NOUS ÉCRIRE</h2>
            
            <div className="h-px w-16 mx-auto bg-primary/70 mb-12 origin-left opacity-0 animate-reveal" style={{ animationDelay: '0.3s' }}></div>
            
            <form className="space-y-8 opacity-0 animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-foreground/80 mb-3 tracking-wide">NOM</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 bg-transparent border border-border/50 focus:border-primary/70 focus:outline-none transition-colors"
                    placeholder="Votre nom"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-foreground/80 mb-3 tracking-wide">EMAIL</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 bg-transparent border border-border/50 focus:border-primary/70 focus:outline-none transition-colors"
                    placeholder="Votre email"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-foreground/80 mb-3 tracking-wide">SUJET</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full px-4 py-3 bg-transparent border border-border/50 focus:border-primary/70 focus:outline-none transition-colors"
                  placeholder="Sujet de votre message"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-foreground/80 mb-3 tracking-wide">MESSAGE</label>
                <textarea 
                  id="message" 
                  rows={5} 
                  className="w-full px-4 py-3 bg-transparent border border-border/50 focus:border-primary/70 focus:outline-none transition-colors"
                  placeholder="Votre message"
                  required
                ></textarea>
              </div>
              
              <div className="text-center">
                <button 
                  type="submit" 
                  className="btn-secondary group"
                >
                  ENVOYER
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Separator className="divider max-w-xl" />

      {/* Special Orders */}
      <section className="section-padding">
        <div className="container mx-auto text-center">
          <h2 className="font-sans text-3xl tracking-widest mb-8 opacity-0 animate-fade-in">COMMANDES SPÉCIALES</h2>
          
          <div className="h-px w-16 mx-auto bg-primary/70 mb-10 origin-left opacity-0 animate-reveal" style={{ animationDelay: '0.3s' }}></div>
          
          <p className="max-w-2xl mx-auto mb-10 text-foreground/80 opacity-0 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            Pour les commandes spéciales (événements, grandes quantités), nous vous invitons à nous contacter au moins 48 heures à l'avance.
          </p>
          <a 
            href="tel:+33XXXXXXXXX" 
            className="btn-secondary group opacity-0 animate-fade-in"
            style={{ animationDelay: '0.7s' }}
          >
            APPELEZ-NOUS
            <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
