
import React from 'react';

interface ValueCardProps {
  title: string;
  description: string;
  imageSrc: string;
  delay: number;
}

const ValueCard = ({ title, description, imageSrc, delay }: ValueCardProps) => {
  return (
    <div className="group opacity-0 animate-fade-in" style={{ animationDelay: `${delay}s` }}>
      <div className="relative h-80 mb-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-bakery-brown-dark/80 to-black/40 z-10 group-hover:opacity-70 transition-opacity duration-500"></div>
        <img 
          src={imageSrc} 
          alt={title} 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      <h3 className="font-sans text-xl tracking-wide mb-4 text-bakery-brown-dark">{title}</h3>
      <p className="font-sans text-bakery-brown/70">{description}</p>
    </div>
  );
};

export default ValueCard;
