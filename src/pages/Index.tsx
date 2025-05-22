
import React, { useEffect } from "react";
import { Github, Linkedin, Instagram, Twitter, Mail, Phone, ExternalLink } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import MouseTracker from "@/components/MouseTracker";
import BackgroundAnimation from "@/components/BackgroundAnimation";
import { initScrollAnimations } from "@/utils/scrollAnimation";

const Index = () => {
  useEffect(() => {
    // Initialize scroll animations
    const cleanup = initScrollAnimations();
    return cleanup;
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Custom cursor and background animations */}
      <MouseTracker />
      <BackgroundAnimation />

      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <nav className="flex items-center justify-between w-full">
            <a href="#" className="font-semibold text-xl hover-scale">Abhay M</a>
            <div className="hidden md:flex items-center gap-6">
              {["about", "education", "skills", "projects", "certifications", "contact"].map((item, i) => (
                <a 
                  key={item} 
                  href={`#${item}`} 
                  className="text-sm hover:text-primary relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              ))}
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
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

      {/* About Section */}
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
                { 
                  icon: function LocationIcon() {
                    return (
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                    );
                  }, 
                  text: "Kannur, Kerala (Currently at Pala)" 
                }
              ].map((item, i) => (
                <div 
                  key={i} 
                  className="flex gap-4 items-center hover-lift p-2 rounded-md transition-all duration-300 hover:bg-background" 
                  data-animate="animate-reveal-left"
                  data-delay={i * 0.2 + 0.3}
                >
                  {typeof item.icon === 'function' 
                    ? <item.icon />
                    : <item.icon size={20} className="text-primary" />
                  }
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="container py-20">
        <h2 className="text-3xl font-bold mb-12" data-animate="animate-slide-up">Education</h2>
        <div className="space-y-10">
          {[
            {
              title: "College of Engineering Thalassery (COET)",
              period: "2022 – 2026",
              description: "B.Tech in Electronics and Communication Engineering",
              extra: "CGPA: 7.0 (Up to 5th Semester)"
            },
            {
              title: "AKG Smaraka Govt HSS Peralassery",
              period: "2019 – 2022",
              description: "Completed higher secondary education",
              extra: ""
            }
          ].map((edu, i) => (
            <Card 
              key={i} 
              className="hover-lift transition-all duration-500 hover:border-primary/50"
              data-animate="animate-slide-up"
              data-delay={i * 0.3}
            >
              <CardHeader>
                <CardTitle className="flex justify-between items-center">
                  <span>{edu.title}</span>
                  <span className="text-xs px-3 py-1 bg-primary/10 rounded-full text-primary font-normal">{edu.period}</span>
                </CardTitle>
                <CardDescription>{edu.period}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{edu.description}</p>
                {edu.extra && <p className="mt-2">{edu.extra}</p>}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-muted/30 py-20">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12" data-animate="animate-slide-up">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                category: "Design & UI/UX",
                skills: [
                  { name: "Figma", level: 90 },
                  { name: "Adobe Photoshop", level: 60 }
                ]
              },
              {
                category: "Development",
                skills: [
                  { name: "HTML", level: 55 },
                  { name: "CSS", level: 50 },
                  { name: "JavaScript", level: 40 }
                ]
              },
              {
                category: "Hardware & IoT",
                skills: [
                  { name: "Raspberry Pi", level: 70 },
                  { name: "ESP32/ESP8266", level: 65 }
                ]
              }
            ].map((category, i) => (
              <Card 
                key={i} 
                className="hover-lift transition-all duration-500"
                data-animate="animate-fade-in"
                data-delay={i * 0.2}
              >
                <CardHeader>
                  <CardTitle>{category.category}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills.map((skill, j) => (
                    <div key={j} data-animate="animate-slide-up" data-delay={i * 0.2 + j * 0.1 + 0.3}>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-primary font-medium">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                        <div 
                          className="bg-primary rounded-full h-2 transition-all duration-1000 ease-out" 
                          style={{ 
                            width: `${skill.level}%`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-10" data-animate="animate-fade-in" data-delay="0.8">
            <h3 className="text-xl font-semibold mb-4">Tools & Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {["Figma", "MATLAB", "PyCharm", "Git", "Notion", "Canva", "VS Code", "Python", "Flask", "Bootstrap"].map((tool, i) => (
                <span 
                  key={tool} 
                  className="px-3 py-1 bg-background rounded-full border text-sm hover-lift cursor-default hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
                  data-animate="animate-fade-in"
                  data-delay={i * 0.1 + 0.9}
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container py-20">
        <h2 className="text-3xl font-bold mb-12" data-animate="animate-slide-up">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground/50">
                  <path d="M17.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"></path>
                  <path d="M6 15a2 2 0 0 0-2 2c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2 2 2 0 0 0-2-2h-.5"></path>
                  <path d="M9.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"></path>
                  <path d="M13.5 14.5V12c0-1.1.9-2 2-2h2"></path>
                  <path d="M6.5 14.5V12c0-1.1-.9-2-2-2h-2"></path>
                </svg>
              ),
              title: "AI Face Detection Attendance System",
              description: "Used Raspberry Pi with face recognition technology to create an automated attendance system for my college mini project.",
              tags: ["Raspberry Pi", "Python", "OpenCV"]
            },
            {
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground/50">
                  <rect width="16" height="20" x="4" y="2" rx="2"></rect>
                  <path d="M9 22v-4h6v4"></path>
                  <circle cx="10" cy="10" r="1"></circle>
                  <circle cx="14" cy="10" r="1"></circle>
                  <path d="M10 14a3.5 3.5 0 0 0 4 0"></path>
                </svg>
              ),
              title: "Velocart App",
              description: "E-commerce shopping concept UI/UX design project using Figma, including mid-fidelity and high-fidelity prototypes.",
              tags: ["Figma", "UI/UX Design", "Prototyping"]
            },
            {
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground/50">
                  <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                  <path d="M9 3v18"></path>
                  <path d="M3 9h18"></path>
                </svg>
              ),
              title: "Responsive Web Design",
              description: "Personal project focused on creating clean, minimal UI using HTML, CSS & JavaScript with responsive design principles.",
              tags: ["HTML", "CSS", "JavaScript"]
            }
          ].map((project, i) => (
            <Card 
              key={i} 
              className="overflow-hidden hover-lift transition-all duration-300 group"
              data-animate="animate-fade-in"
              data-delay={i * 0.3}
            >
              <div className="h-48 bg-muted flex items-center justify-center group-hover:bg-primary/5 transition-colors duration-300">
                <div className="transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                  {project.icon}
                </div>
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, j) => (
                    <span 
                      key={j} 
                      className="px-2 py-1 bg-muted rounded-md text-xs group-hover:bg-primary/10 group-hover:text-primary transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Experience & Volunteering */}
      <section className="bg-muted/30 py-20">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12" data-animate="animate-slide-up">Experience & Volunteering</h2>
          
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-6" data-animate="animate-slide-up" data-delay="0.2">Internships</h3>
            <Card className="hover-lift transition-all duration-500" data-animate="animate-fade-in">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>UI Engineering Intern</CardTitle>
                  <CardDescription>June – November 2023 (90 Days)</CardDescription>
                </div>
                <CardDescription>IMIOT Technolabs LLP</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc ml-5 space-y-2">
                  {[
                    "Worked on frontend design and development using HTML, CSS, JavaScript",
                    "Collaborated in UI/UX Design, created interactive and responsive web pages"
                  ].map((item, i) => (
                    <li key={i} data-animate="animate-slide-up" data-delay={i * 0.2 + 0.4}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6" data-animate="animate-slide-up" data-delay="0.6">IEEE Roles & Volunteering</h3>
            <div className="space-y-6">
              {[
                {
                  title: "IEEE Design Lead",
                  period: "Feb 2025 – Present",
                  items: [
                    "Leading all design initiatives including posters, banners, and UI mockups for IEEE events and hackathons",
                    "Mentored juniors in UI/UX and visual communication"
                  ]
                },
                {
                  title: "IEEE Designer",
                  period: "Sep 2023 – Feb 2025",
                  items: [
                    "Designed 20+ posters and digital creatives for technical and outreach events",
                    "Supported visual branding for student-led IEEE programs"
                  ]
                },
                {
                  title: "IEEE PES Secretary",
                  period: "Jun 2022 – Aug 2023",
                  items: [
                    "Managed communication and operations for IEEE Power & Energy Society Student Chapter",
                    "Coordinated technical talks, workshops, and an industrial visit to the Renewable Resource Center"
                  ]
                }
              ].map((role, i) => (
                <Card 
                  key={i} 
                  className="hover-lift transition-all duration-500 hover:border-primary/30"
                  data-animate="animate-fade-in"
                  data-delay={i * 0.3 + 0.8}
                >
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle>{role.title}</CardTitle>
                      <CardDescription className="text-xs px-3 py-1 bg-primary/10 rounded-full text-primary">{role.period}</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc ml-5 space-y-2">
                      {role.items.map((item, j) => (
                        <li key={j} data-animate="animate-slide-up" data-delay={i * 0.3 + j * 0.2 + 1}>{item}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="container py-20">
        <h2 className="text-3xl font-bold mb-12" data-animate="animate-slide-up">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { title: "90 Days Full Stack", org: "IMIOT Technolabs" },
            { title: "UI/UX Launchpad", org: "IMIOT Technolabs" },
            { title: "10 Days UI/UX Launchpad", org: "Shareinfo (Nov 2024)" },
            { title: "AWS Solutions Architecture", org: "Forage (Feb 2025)" },
            { title: "Tata Cybersecurity Analyst", org: "Forage (Feb 2025)" },
            { title: "Be10x AI Workshop", org: "Oct 2024" },
            { title: "Insights into Robotics", org: "EightPlanes (Oct 2024)" },
            { title: "Industrial Visit to Renewable Resource Center", org: "IEEE PES Day 2023" }
          ].map((cert, i) => (
            <Card 
              key={i} 
              className="hover-lift transition-all duration-300 hover:border-primary/30 group"
              data-animate="animate-fade-in"
              data-delay={i * 0.1}
            >
              <CardHeader>
                <CardTitle className="group-hover:text-primary transition-colors duration-300">{cert.title}</CardTitle>
                <CardDescription>{cert.org}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-muted/30 py-20">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12" data-animate="animate-slide-up">Contact Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-6" data-animate="animate-slide-in" data-delay="0.2">
              <h3 className="text-xl font-semibold">Get In Touch</h3>
              <p>Feel free to contact me for any work or suggestions below.</p>
              
              <div className="space-y-4">
                {[
                  { icon: Mail, text: "abhayappu8@gmail.com", href: "mailto:abhayappu8@gmail.com" },
                  { icon: Phone, text: "+91 8136977264", href: "tel:+918136977264" },
                  { 
                    icon: function LocationIcon() { 
                      return (
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                          <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                      );
                    }, 
                    text: "Kannur, Kerala (Currently at Pala)",
                    href: "#"
                  }
                ].map((contact, i) => (
                  <div 
                    key={i} 
                    className="flex gap-4 items-center hover-lift" 
                    data-animate="animate-slide-up"
                    data-delay={i * 0.2 + 0.4}
                  >
                    {typeof contact.icon === 'function' 
                      ? <contact.icon />
                      : <contact.icon className="text-primary" size={20} />
                    }
                    <a href={contact.href} className="hover:underline hover:text-primary transition-colors duration-300">
                      {contact.text}
                    </a>
                  </div>
                ))}
              </div>
              
              <div className="flex gap-6 pt-4">
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

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container text-center">
          <p className="text-muted-foreground animate-fade-in">© 2025 Abhay M. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
