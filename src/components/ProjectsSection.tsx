
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const ProjectsSection = () => {
  const projects = [
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
  ];

  return (
    <section id="projects" className="container py-20">
      <h2 className="text-3xl font-bold mb-12" data-animate="animate-slide-up">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
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
  );
};

export default ProjectsSection;
