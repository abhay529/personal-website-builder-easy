
import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

const ExperienceSection = () => {
  const volunteeringRoles = [
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
  ];

  return (
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
            {volunteeringRoles.map((role, i) => (
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
  );
};

export default ExperienceSection;
