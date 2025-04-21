
import { Phone, MapPin, Instagram, Clock, ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    <div className="flex flex-col">
      {/* Header Banner */}
      <section className="relative py-20 bg-bakery-brown-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-script text-5xl mb-4">Contact</h1>
          <p className="max-w-2xl mx-auto">
            Venez nous rencontrer ou contactez-nous pour toute information
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Left Column - Info */}
              <div>
                <h2 className="font-script text-3xl text-bakery-brown-dark mb-8">Informations pratiques</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 text-bakery-brown-dark">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-bakery-brown-dark mb-1">Adresse</h3>
                      <p className="text-bakery-brown">29 rue Parmentier</p>
                      <p className="text-bakery-brown">93240 Stains</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="mt-1 text-bakery-brown-dark">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-bakery-brown-dark mb-1">Téléphone</h3>
                      <p className="text-bakery-brown">01 XX XX XX XX</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="mt-1 text-bakery-brown-dark">
                      <Instagram size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-bakery-brown-dark mb-1">Instagram</h3>
                      <a 
                        href="https://www.instagram.com/delice2stains" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-bakery-brown hover:text-bakery-brown-dark underline"
                      >
                        @delice2stains
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="mt-1 text-bakery-brown-dark">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-bakery-brown-dark mb-1">Horaires d'ouverture</h3>
                      <p className="text-bakery-brown">Lundi au vendredi : 7h00 - 19h30</p>
                      <p className="text-bakery-brown">Samedi et dimanche : 7h00 - 19h00</p>
                      <p className="text-bakery-brown mt-1 text-sm italic">Fermé les jours fériés</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right Column - Map */}
              <div>
                <h2 className="font-script text-3xl text-bakery-brown-dark mb-8">Comment nous trouver</h2>
                <div className="h-80 bg-gray-200 rounded-lg overflow-hidden">
                  {/* Embedded map iframe would go here */}
                  <div className="w-full h-full flex items-center justify-center bg-bakery-beige-light">
                    <p className="text-center text-bakery-brown p-4">
                      Carte interactive
                      <br />
                      <span className="text-sm">(29 rue Parmentier, 93240 Stains)</span>
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-bakery-brown">
                  Nous sommes facilement accessibles en transports en commun et disposons d'un stationnement à proximité.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-bakery-beige-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-script text-3xl text-center text-bakery-brown-dark mb-8">Envoyez-nous un message</h2>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-bakery-brown-dark font-medium mb-2">Nom</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 border border-bakery-beige-dark rounded-md focus:outline-none focus:ring-2 focus:ring-bakery-brown transition"
                    placeholder="Votre nom"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-bakery-brown-dark font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 border border-bakery-beige-dark rounded-md focus:outline-none focus:ring-2 focus:ring-bakery-brown transition"
                    placeholder="Votre email"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-bakery-brown-dark font-medium mb-2">Sujet</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full px-4 py-2 border border-bakery-beige-dark rounded-md focus:outline-none focus:ring-2 focus:ring-bakery-brown transition"
                  placeholder="Sujet de votre message"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-bakery-brown-dark font-medium mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={5} 
                  className="w-full px-4 py-2 border border-bakery-beige-dark rounded-md focus:outline-none focus:ring-2 focus:ring-bakery-brown transition"
                  placeholder="Votre message"
                  required
                ></textarea>
              </div>
              
              <div className="text-center">
                <button 
                  type="submit" 
                  className="inline-flex items-center bg-bakery-brown text-white px-6 py-3 rounded-md hover:bg-bakery-brown-dark transition-colors duration-300"
                >
                  Envoyer
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Special Orders */}
      <section className="py-12 bg-bakery-brown-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-script text-3xl mb-6">Commandes spéciales</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Pour les commandes spéciales (événements, grandes quantités), nous vous invitons à nous contacter au moins 48 heures à l'avance.
          </p>
          <a 
            href="tel:+33XXXXXXXXX" 
            className="inline-block bg-bakery-beige-medium text-bakery-brown-dark px-6 py-3 rounded-md hover:bg-bakery-beige-dark transition-colors duration-300"
          >
            Appelez-nous
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
