import { Users, Award, Target } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <div className="about page-padding">
      <div className="container">
        <div className="about-header text-center animate-fade-up">
          <h1 className="page-title">About <span className="text-gradient">ApexHealth</span></h1>
          <p className="page-subtitle">Pioneering the future of compassionate healthcare.</p>
        </div>

        <div className="about-content">
          <div className="about-image glass-card animate-fade-up delay-200">
            <img src="https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Hospital building" />
          </div>
          <div className="about-text animate-fade-up delay-300">
            <h2>Our Mission</h2>
            <p>
              At ApexHealth, we believe that everyone deserves access to premium, state-of-the-art healthcare. 
              Our mission is to bridge the gap between advanced medical technology and human-centric care, 
              providing an unparalleled experience for every patient who walks through our doors.
            </p>
            
            <div className="stats-grid">
              <div className="stat-box">
                <Users size={32} color="var(--color-secondary)" />
                <h4>50k+</h4>
                <p>Happy Patients</p>
              </div>
              <div className="stat-box">
                <Award size={32} color="var(--color-secondary)" />
                <h4>150+</h4>
                <p>Awards Won</p>
              </div>
              <div className="stat-box">
                <Target size={32} color="var(--color-secondary)" />
                <h4>99%</h4>
                <p>Success Rate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
