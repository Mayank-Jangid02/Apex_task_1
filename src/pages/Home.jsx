import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Clock, HeartPulse } from 'lucide-react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-content">
          <div className="hero-text-wrapper">
            <h1 className="hero-title animate-text-reveal">
              Premium Healthcare,<br/>
              <span className="text-gradient">Redefined for You.</span>
            </h1>
            <p className="hero-subtitle animate-fade-up delay-200">
              Experience seamless, world-class medical care with ApexHealth. We combine cutting-edge technology with compassionate expertise.
            </p>
            <div className="hero-actions animate-fade-up delay-300">
              <Link to="/contact" className="btn-primary">
                Book an Appointment <ArrowRight size={18} style={{ marginLeft: '8px' }} />
              </Link>
              <Link to="/services" className="btn-secondary">Explore Services</Link>
            </div>
          </div>
          <div className="hero-image-wrapper animate-fade-up delay-400">
            <div className="glass-card image-card">
              <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Doctor with patient" className="hero-img" />
              <div className="floating-badge badge-1">
                <HeartPulse color="var(--color-accent)" size={24} />
                <span>Top Rated</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features container">
        <h2 className="section-title animate-fade-up">Why Choose ApexHealth?</h2>
        <div className="features-grid">
          <div className="glass-card feature-card animate-fade-up delay-100">
            <div className="icon-wrapper">
              <Shield size={32} color="var(--color-primary)" />
            </div>
            <h3>Certified Experts</h3>
            <p>Our team consists of internationally recognized medical professionals dedicated to your wellbeing.</p>
          </div>
          <div className="glass-card feature-card animate-fade-up delay-200">
            <div className="icon-wrapper">
              <Clock size={32} color="var(--color-primary)" />
            </div>
            <h3>24/7 Availability</h3>
            <p>Healthcare doesn't sleep. Access emergency services and telemedicine round the clock.</p>
          </div>
          <div className="glass-card feature-card animate-fade-up delay-300">
            <div className="icon-wrapper">
              <HeartPulse size={32} color="var(--color-primary)" />
            </div>
            <h3>Modern Facilities</h3>
            <p>Equipped with the latest medical technology to provide accurate diagnoses and treatments.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
