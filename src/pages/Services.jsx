import { Activity, Stethoscope, Microscope, Brain, Heart, Baby } from 'lucide-react';
import './Services.css';

const servicesData = [
  {
    id: 1,
    title: 'General Practice',
    description: 'Comprehensive medical care for individuals and families, focusing on prevention and wellness.',
    icon: <Stethoscope size={36} />,
    delay: 'delay-100'
  },
  {
    id: 2,
    title: 'Cardiology',
    description: 'Advanced heart care with state-of-the-art diagnostic and treatment facilities.',
    icon: <Heart size={36} />,
    delay: 'delay-200'
  },
  {
    id: 3,
    title: 'Neurology',
    description: 'Expert care for disorders of the nervous system, brain, and spinal cord.',
    icon: <Brain size={36} />,
    delay: 'delay-300'
  },
  {
    id: 4,
    title: 'Pediatrics',
    description: 'Specialized, compassionate care for infants, children, and adolescents.',
    icon: <Baby size={36} />,
    delay: 'delay-100'
  },
  {
    id: 5,
    title: 'Laboratory Services',
    description: 'Fast, accurate testing and diagnostics with our in-house modern laboratory.',
    icon: <Microscope size={36} />,
    delay: 'delay-200'
  },
  {
    id: 6,
    title: 'Emergency Care',
    description: '24/7 critical care unit ready to handle all medical emergencies immediately.',
    icon: <Activity size={36} />,
    delay: 'delay-300'
  }
];

const Services = () => {
  return (
    <div className="services page-padding">
      <div className="container">
        <div className="services-header text-center animate-fade-up">
          <h1 className="page-title">Our <span className="text-gradient">Services</span></h1>
          <p className="page-subtitle">Comprehensive healthcare solutions tailored to your needs, delivered by experts.</p>
        </div>

        <div className="services-grid">
          {servicesData.map(service => (
            <div key={service.id} className={`service-card glass-card animate-fade-up ${service.delay}`}>
              <div className="service-icon">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <button className="service-btn">Learn more</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
