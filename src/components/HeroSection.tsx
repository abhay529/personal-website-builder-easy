
import React from "react";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Instagram, Twitter } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="container py-20 md:py-28">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-10 items-center">
        <div className="md:col-span-3 space-y-6">
          {["Hi, I'm", "Abhay M", "Electronics & Communication Engineering Student | UI/UX Designer | IEEE Volunteer | Full-Stack"].map((text, i) => (
            <div key={i} className="animate-slide-in" style={{ animationDelay: `${i * 0.2}s` }}>
              {i === 0 && <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">{text} <span className="text-primary animate-pulse-soft">Abhay M</span></h1>}
              {i === 1 && null}
              {i === 2 && <h2 className="text-xl md:text-2xl text-muted-foreground">{text}</h2>}
            </div>
          ))}
          <p className="text-muted-foreground max-w-lg animate-fade-in" style={{ animationDelay: "0.6s" }}>
            Passionate about creating intuitive user experiences and implementing technical solutions. 
            Currently focused on UI/UX design, web development, and IoT projects.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "0.8s" }}>
            <Button asChild className="hover-lift">
              <a href="#contact">Get in Touch</a>
            </Button>
            <Button variant="outline" asChild className="hover-lift">
              <a href="#projects">View Projects</a>
            </Button>
          </div>
          <div className="flex gap-4 pt-4">
            {[
              { icon: Linkedin, href: "https://linkedin.com" },
              { icon: Twitter, href: "https://twitter.com" },
              { icon: Instagram, href: "https://instagram.com" },
              { icon: Github, href: "https://github.com" }
            ].map((social, i) => (
              <a 
                key={i}
                href={social.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-primary transform transition-all duration-300 hover:scale-125"
                style={{ animationDelay: `${i * 0.1 + 0.9}s` }}
              >
                <social.icon size={20} className="animate-fade-in" />
              </a>
            ))}
          </div>
        </div>
        <div className="md:col-span-2 animate-float">
          <Card className="overflow-hidden border-2 hover-scale transform transition-all duration-500 hover:shadow-xl hover:border-primary/20">
            <AspectRatio ratio={4/5}>
              <div className="bg-gradient-to-br from-primary/10 to-secondary/20 w-full h-full flex items-center justify-center">
                <div className="text-xl font-medium text-center p-6">
                  <span className="block mb-2">Abhay M</span>
                  <span className="block text-sm text-muted-foreground">UI/UX Designer & ECE Student</span>
                </div>
              </div>
            </AspectRatio>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
