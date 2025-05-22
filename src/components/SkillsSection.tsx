
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const SkillsSection = () => {
  const skillCategories = [
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
  ];

  const tools = ["Figma", "MATLAB", "PyCharm", "Git", "Notion", "Canva", "VS Code", "Python", "Flask", "Bootstrap"];

  return (
    <section id="skills" className="bg-muted/30 py-20">
      <div className="container">
        <h2 className="text-3xl font-bold mb-12" data-animate="animate-slide-up">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, i) => (
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
            {tools.map((tool, i) => (
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
  );
};

export default SkillsSection;
