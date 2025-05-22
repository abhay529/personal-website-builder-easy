
import React from "react";
import { Mail, Phone } from "lucide-react";
import LocationIcon from "./LocationIcon";

const AboutSection = () => {
  return (
    <section id="about" className="bg-muted/30 py-20">
      <div className="container">
        <h2 className="text-3xl font-bold mb-12" data-animate="animate-slide-up">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-4">
            {[
              "I'm an Electronics & Communication Engineering student at College of Engineering Thalassery with a strong passion for UI/UX design and web development.",
              "Currently serving as the IEEE Design Lead, I blend my technical knowledge with creative skills to design user-friendly interfaces and implement innovative solutions.",
              "I've worked as a UI Engineering Intern at IMIOT Technolabs LLP, where I gained hands-on experience in frontend design and development using HTML, CSS, and JavaScript."
            ].map((para, i) => (
              <p key={i} data-animate="animate-reveal-right" data-delay={i * 0.2}>{para}</p>
            ))}
          </div>
          <div className="space-y-4">
            {[
              { icon: Mail, text: "abhayappu8@gmail.com" },
              { icon: Phone, text: "+91 8136977264" },
              { icon: LocationIcon, text: "Kannur, Kerala (Currently at Pala)" }
            ].map((item, i) => (
              <div 
                key={i} 
                className="flex gap-4 items-center hover-lift p-2 rounded-md transition-all duration-300 hover:bg-background" 
                data-animate="animate-reveal-left"
                data-delay={i * 0.2 + 0.3}
              >
                {item.icon === LocationIcon ? <LocationIcon /> : <item.icon size={20} className="text-primary" />}
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
