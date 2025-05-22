
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Instagram, Twitter, Mail, Phone, ExternalLink } from "lucide-react";
import LocationIcon from "./LocationIcon";

const ContactSection = () => {
  const contactMethods = [
    { icon: Mail, text: "abhayappu8@gmail.com", href: "mailto:abhayappu8@gmail.com" },
    { icon: Phone, text: "+91 8136977264", href: "tel:+918136977264" },
    { icon: LocationIcon, text: "Kannur, Kerala (Currently at Pala)", href: "#" }
  ];

  const socialLinks = [
    { icon: Linkedin, href: "https://linkedin.com" },
    { icon: Twitter, href: "https://twitter.com" },
    { icon: Instagram, href: "https://instagram.com" },
    { icon: Github, href: "https://github.com" }
  ];

  return (
    <section id="contact" className="bg-muted/30 py-20">
      <div className="container">
        <h2 className="text-3xl font-bold mb-12" data-animate="animate-slide-up">Contact Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-6" data-animate="animate-slide-in" data-delay="0.2">
            <h3 className="text-xl font-semibold">Get In Touch</h3>
            <p>Feel free to contact me for any work or suggestions below.</p>
            
            <div className="space-y-4">
              {contactMethods.map((contact, i) => (
                <div 
                  key={i} 
                  className="flex gap-4 items-center hover-lift" 
                  data-animate="animate-slide-up"
                  data-delay={i * 0.2 + 0.4}
                >
                  {contact.icon === LocationIcon ? <LocationIcon /> : <contact.icon className="text-primary" size={20} />}
                  <a href={contact.href} className="hover:underline hover:text-primary transition-colors duration-300">
                    {contact.text}
                  </a>
                </div>
              ))}
            </div>
            
            <div className="flex gap-6 pt-4">
              {socialLinks.map((social, i) => (
                <a 
                  key={i}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-primary transform transition-all duration-300 hover:scale-125 hover:rotate-6"
                  data-animate="animate-fade-in"
                  data-delay={i * 0.1 + 0.9}
                >
                  <social.icon size={24} className="animate-fade-in" />
                </a>
              ))}
            </div>
          </div>
          
          <Card className="hover-lift" data-animate="animate-fade-in" data-delay="0.6">
            <CardHeader>
              <CardTitle>Send Me a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2" data-animate="animate-slide-up" data-delay="0.7">
                    <label htmlFor="name" className="text-sm font-medium">Name</label>
                    <input
                      id="name"
                      type="text"
                      className="w-full rounded-md border border-input bg-background px-3 py-2 transition-all duration-300 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="space-y-2" data-animate="animate-slide-up" data-delay="0.8">
                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                    <input
                      id="email"
                      type="email"
                      className="w-full rounded-md border border-input bg-background px-3 py-2 transition-all duration-300 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
                      placeholder="Your Email"
                    />
                  </div>
                </div>
                <div className="space-y-2" data-animate="animate-slide-up" data-delay="0.9">
                  <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                  <input
                    id="subject"
                    type="text"
                    className="w-full rounded-md border border-input bg-background px-3 py-2 transition-all duration-300 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
                    placeholder="Subject"
                  />
                </div>
                <div className="space-y-2" data-animate="animate-slide-up" data-delay="1">
                  <label htmlFor="message" className="text-sm font-medium">Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full rounded-md border border-input bg-background px-3 py-2 transition-all duration-300 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <Button 
                  type="submit" 
                  className="w-full hover-lift transition-all duration-500 hover:bg-primary/90"
                  data-animate="animate-slide-up"
                  data-delay="1.1"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
