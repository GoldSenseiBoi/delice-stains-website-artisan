
import React from 'react';

interface TeamMemberProps {
  name: string;
  role: string;
  description: string;
  imageSrc: string;
  imagePosition: 'left' | 'right';
  delay: number;
}

const TeamMember = ({ name, role, description, imageSrc, imagePosition, delay }: TeamMemberProps) => {
  return (
    <div 
      className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center opacity-0 animate-fade-in ${
        imagePosition === 'right' ? 'md:flex-row-reverse' : ''
      }`} 
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        <img src={imageSrc} alt={name} className="absolute inset-0 w-full h-full object-cover" />
      </div>
      <div className="text-center md:text-left">
        <h3 className="font-sans text-2xl tracking-wide mb-2 text-bakery-brown-dark">{name}</h3>
        <p className="font-medium text-bakery-brown/80 mt-2 mb-6">{role}</p>
        <p className="text-bakery-brown/70">{description}</p>
      </div>
    </div>
  );
};

export default TeamMember;
