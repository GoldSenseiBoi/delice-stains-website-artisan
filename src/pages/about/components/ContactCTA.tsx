
import React from 'react';
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ContactCTA = () => {
  return (
    <section className="section-padding bg-bakery-beige-medium/50">
      <div className="container mx-auto text-center">
        <h2 className="font-sans text-4xl tracking-widest mb-8 opacity-0 animate-fade-in text-bakery-brown-dark">
          VENEZ NOUS RENCONTRER
        </h2>
        <div 
          className="h-px w-16 mx-auto bg-bakery-brown/70 mb-10 origin-left opacity-0 animate-reveal" 
          style={{ animationDelay: '0.3s' }}
        ></div>
        <p 
          className="text-lg mb-10 max-w-2xl mx-auto text-bakery-brown/80 opacity-0 animate-fade-in" 
          style={{ animationDelay: '0.5s' }}
        >
          Découvrez nos produits artisanaux et partagez notre passion pour la boulangerie traditionnelle
        </p>
        <Link 
          to="/contact" 
          className="btn-secondary group opacity-0 animate-fade-in"
          style={{ animationDelay: '0.7s' }}
        >
          NOUS CONTACTER
          <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
};

export default ContactCTA;
