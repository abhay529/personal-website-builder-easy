
import React from "react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const CertificationsSection = () => {
  const certifications = [
    { title: "90 Days Full Stack", org: "IMIOT Technolabs" },
    { title: "UI/UX Launchpad", org: "IMIOT Technolabs" },
    { title: "10 Days UI/UX Launchpad", org: "Shareinfo (Nov 2024)" },
    { title: "AWS Solutions Architecture", org: "Forage (Feb 2025)" },
    { title: "Tata Cybersecurity Analyst", org: "Forage (Feb 2025)" },
    { title: "Be10x AI Workshop", org: "Oct 2024" },
    { title: "Insights into Robotics", org: "EightPlanes (Oct 2024)" },
    { title: "Industrial Visit to Renewable Resource Center", org: "IEEE PES Day 2023" }
  ];

  return (
    <section id="certifications" className="container py-20">
      <h2 className="text-3xl font-bold mb-12" data-animate="animate-slide-up">Certifications</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {certifications.map((cert, i) => (
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
  );
};

export default CertificationsSection;
