import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon: Icon, delay = 0 }) => {
  return (
    <div 
      className="card group hover:border-purple-pain hover:border transform hover:-translate-y-1 animate-slide-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="h-14 w-14 mx-auto mb-4 bg-ice-cold text-purple-pain rounded-full flex items-center justify-center group-hover:bg-purple-pain group-hover:text-white transition-all duration-300">
        <Icon size={28} />
      </div>
      <h3 className="text-xl font-semibold text-center mb-3">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
      <div className="mt-6 text-center">
        <button className="text-purple-pain font-medium hover:text-ice-cold transition-colors duration-300">
          Learn More →
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;