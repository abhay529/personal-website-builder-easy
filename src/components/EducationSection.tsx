
import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

const EducationSection = () => {
  const educationData = [
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
  ];

  return (
    <section id="education" className="container py-20">
      <h2 className="text-3xl font-bold mb-12" data-animate="animate-slide-up">Education</h2>
      <div className="space-y-10">
        {educationData.map((edu, i) => (
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
  );
};

export default EducationSection;
