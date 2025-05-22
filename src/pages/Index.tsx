
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

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <nav className="flex items-center justify-between w-full">
            <a href="#" className="font-semibold text-xl">Abhay M</a>
            <div className="hidden md:flex items-center gap-6">
              <a href="#about" className="text-sm hover:text-primary">About</a>
              <a href="#education" className="text-sm hover:text-primary">Education</a>
              <a href="#skills" className="text-sm hover:text-primary">Skills</a>
              <a href="#projects" className="text-sm hover:text-primary">Projects</a>
              <a href="#certifications" className="text-sm hover:text-primary">Certifications</a>
              <a href="#contact" className="text-sm hover:text-primary">Contact</a>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 items-center">
          <div className="md:col-span-3 space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Hi, I'm <span className="text-primary">Abhay M</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground">
              Electronics & Communication Engineering Student | UI/UX Designer | IEEE Volunteer | Full-Stack
            </h2>
            <p className="text-muted-foreground max-w-lg">
              Passionate about creating intuitive user experiences and implementing technical solutions. 
              Currently focused on UI/UX design, web development, and IoT projects.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild>
                <a href="#contact">Get in Touch</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#projects">View Projects</a>
              </Button>
            </div>
            <div className="flex gap-4 pt-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                <Linkedin size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                <Instagram size={20} />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                <Github size={20} />
              </a>
            </div>
          </div>
          <div className="md:col-span-2 animate-slide-in">
            <Card className="overflow-hidden border-2">
              <AspectRatio ratio={4/5}>
                <div className="bg-gradient-to-br from-primary/20 to-secondary/20 w-full h-full flex items-center justify-center">
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
          <h2 className="text-3xl font-bold mb-12">About Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-4">
              <p>
                I'm an Electronics & Communication Engineering student at College of Engineering Thalassery with 
                a strong passion for UI/UX design and web development.
              </p>
              <p>
                Currently serving as the IEEE Design Lead, I blend my technical knowledge with creative skills
                to design user-friendly interfaces and implement innovative solutions.
              </p>
              <p>
                I've worked as a UI Engineering Intern at IMIOT Technolabs LLP, where I gained hands-on experience
                in frontend design and development using HTML, CSS, and JavaScript.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex gap-4 items-center">
                <Mail size={20} className="text-primary" />
                <span>abhayappu8@gmail.com</span>
              </div>
              <div className="flex gap-4 items-center">
                <Phone size={20} className="text-primary" />
                <span>+91 8136977264</span>
              </div>
              <div className="flex gap-4 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>Kannur, Kerala (Currently at Pala)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="container py-20">
        <h2 className="text-3xl font-bold mb-12">Education</h2>
        <div className="space-y-10">
          <Card>
            <CardHeader>
              <CardTitle>College of Engineering Thalassery (COET)</CardTitle>
              <CardDescription>2022 – 2026</CardDescription>
            </CardHeader>
            <CardContent>
              <p>B.Tech in Electronics and Communication Engineering</p>
              <p className="mt-2">CGPA: 7.0 (Up to 5th Semester)</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>AKG Smaraka Govt HSS Peralassery</CardTitle>
              <CardDescription>2019 – 2022</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Completed higher secondary education</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-muted/30 py-20">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Design & UI/UX</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Figma</span>
                    <span>90%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary rounded-full h-2" style={{ width: "90%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Adobe Photoshop</span>
                    <span>60%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary rounded-full h-2" style={{ width: "60%" }}></div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Development</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span>HTML</span>
                    <span>55%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary rounded-full h-2" style={{ width: "55%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span>CSS</span>
                    <span>50%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary rounded-full h-2" style={{ width: "50%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span>JavaScript</span>
                    <span>40%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary rounded-full h-2" style={{ width: "40%" }}></div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Hardware & IoT</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Raspberry Pi</span>
                    <span>70%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary rounded-full h-2" style={{ width: "70%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span>ESP32/ESP8266</span>
                    <span>65%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary rounded-full h-2" style={{ width: "65%" }}></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-10">
            <h3 className="text-xl font-semibold mb-4">Tools & Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {["Figma", "MATLAB", "PyCharm", "Git", "Notion", "Canva", "VS Code", "Python", "Flask", "Bootstrap"].map((tool) => (
                <span key={tool} className="px-3 py-1 bg-background rounded-full border text-sm">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container py-20">
        <h2 className="text-3xl font-bold mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="overflow-hidden">
            <div className="h-48 bg-muted flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground/50">
                <path d="M17.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"></path>
                <path d="M6 15a2 2 0 0 0-2 2c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2 2 2 0 0 0-2-2h-.5"></path>
                <path d="M9.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"></path>
                <path d="M13.5 14.5V12c0-1.1.9-2 2-2h2"></path>
                <path d="M6.5 14.5V12c0-1.1-.9-2-2-2h-2"></path>
              </svg>
            </div>
            <CardHeader>
              <CardTitle>AI Face Detection Attendance System</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Used Raspberry Pi with face recognition technology to create an automated attendance system for my college mini project.</p>
              <div className="flex gap-2">
                <span className="px-2 py-1 bg-muted rounded-md text-xs">Raspberry Pi</span>
                <span className="px-2 py-1 bg-muted rounded-md text-xs">Python</span>
                <span className="px-2 py-1 bg-muted rounded-md text-xs">OpenCV</span>
              </div>
            </CardContent>
          </Card>
          
          <Card className="overflow-hidden">
            <div className="h-48 bg-muted flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground/50">
                <rect width="16" height="20" x="4" y="2" rx="2"></rect>
                <path d="M9 22v-4h6v4"></path>
                <circle cx="10" cy="10" r="1"></circle>
                <circle cx="14" cy="10" r="1"></circle>
                <path d="M10 14a3.5 3.5 0 0 0 4 0"></path>
              </svg>
            </div>
            <CardHeader>
              <CardTitle>Velocart App</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">E-commerce shopping concept UI/UX design project using Figma, including mid-fidelity and high-fidelity prototypes.</p>
              <div className="flex gap-2">
                <span className="px-2 py-1 bg-muted rounded-md text-xs">Figma</span>
                <span className="px-2 py-1 bg-muted rounded-md text-xs">UI/UX Design</span>
                <span className="px-2 py-1 bg-muted rounded-md text-xs">Prototyping</span>
              </div>
            </CardContent>
          </Card>
          
          <Card className="overflow-hidden">
            <div className="h-48 bg-muted flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground/50">
                <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                <path d="M9 3v18"></path>
                <path d="M3 9h18"></path>
              </svg>
            </div>
            <CardHeader>
              <CardTitle>Responsive Web Design</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Personal project focused on creating clean, minimal UI using HTML, CSS & JavaScript with responsive design principles.</p>
              <div className="flex gap-2">
                <span className="px-2 py-1 bg-muted rounded-md text-xs">HTML</span>
                <span className="px-2 py-1 bg-muted rounded-md text-xs">CSS</span>
                <span className="px-2 py-1 bg-muted rounded-md text-xs">JavaScript</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Experience & Volunteering */}
      <section className="bg-muted/30 py-20">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12">Experience & Volunteering</h2>
          
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-6">Internships</h3>
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>UI Engineering Intern</CardTitle>
                  <CardDescription>June – November 2023 (90 Days)</CardDescription>
                </div>
                <CardDescription>IMIOT Technolabs LLP</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc ml-5 space-y-2">
                  <li>Worked on frontend design and development using HTML, CSS, JavaScript</li>
                  <li>Collaborated in UI/UX Design, created interactive and responsive web pages</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6">IEEE Roles & Volunteering</h3>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle>IEEE Design Lead</CardTitle>
                    <CardDescription>Feb 2025 – Present</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc ml-5 space-y-2">
                    <li>Leading all design initiatives including posters, banners, and UI mockups for IEEE events and hackathons</li>
                    <li>Mentored juniors in UI/UX and visual communication</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle>IEEE Designer</CardTitle>
                    <CardDescription>Sep 2023 – Feb 2025</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc ml-5 space-y-2">
                    <li>Designed 20+ posters and digital creatives for technical and outreach events</li>
                    <li>Supported visual branding for student-led IEEE programs</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle>IEEE PES Secretary</CardTitle>
                    <CardDescription>Jun 2022 – Aug 2023</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc ml-5 space-y-2">
                    <li>Managed communication and operations for IEEE Power & Energy Society Student Chapter</li>
                    <li>Coordinated technical talks, workshops, and an industrial visit to the Renewable Resource Center</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="container py-20">
        <h2 className="text-3xl font-bold mb-12">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>90 Days Full Stack</CardTitle>
              <CardDescription>IMIOT Technolabs</CardDescription>
            </CardHeader>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>UI/UX Launchpad</CardTitle>
              <CardDescription>IMIOT Technolabs</CardDescription>
            </CardHeader>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>10 Days UI/UX Launchpad</CardTitle>
              <CardDescription>Shareinfo (Nov 2024)</CardDescription>
            </CardHeader>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>AWS Solutions Architecture</CardTitle>
              <CardDescription>Forage (Feb 2025)</CardDescription>
            </CardHeader>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Tata Cybersecurity Analyst</CardTitle>
              <CardDescription>Forage (Feb 2025)</CardDescription>
            </CardHeader>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Be10x AI Workshop</CardTitle>
              <CardDescription>Oct 2024</CardDescription>
            </CardHeader>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Insights into Robotics</CardTitle>
              <CardDescription>EightPlanes (Oct 2024)</CardDescription>
            </CardHeader>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Industrial Visit to Renewable Resource Center</CardTitle>
              <CardDescription>IEEE PES Day 2023</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-muted/30 py-20">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12">Contact Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold">Get In Touch</h3>
              <p>Feel free to contact me for any work or suggestions below.</p>
              
              <div className="space-y-4">
                <div className="flex gap-4 items-center">
                  <Mail className="text-primary" size={20} />
                  <a href="mailto:abhayappu8@gmail.com" className="hover:underline">abhayappu8@gmail.com</a>
                </div>
                <div className="flex gap-4 items-center">
                  <Phone className="text-primary" size={20} />
                  <a href="tel:+918136977264" className="hover:underline">+91 8136977264</a>
                </div>
                <div className="flex gap-4 items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span>Kannur, Kerala (Currently at Pala)</span>
                </div>
              </div>
              
              <div className="flex gap-6 pt-4">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                  <Linkedin size={24} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                  <Twitter size={24} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                  <Instagram size={24} />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                  <Github size={24} />
                </a>
              </div>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Send Me a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">Name</label>
                      <input
                        id="name"
                        type="text"
                        className="w-full rounded-md border border-input bg-background px-3 py-2"
                        placeholder="Your Name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">Email</label>
                      <input
                        id="email"
                        type="email"
                        className="w-full rounded-md border border-input bg-background px-3 py-2"
                        placeholder="Your Email"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                    <input
                      id="subject"
                      type="text"
                      className="w-full rounded-md border border-input bg-background px-3 py-2"
                      placeholder="Subject"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">Message</label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full rounded-md border border-input bg-background px-3 py-2"
                      placeholder="Your Message"
                    ></textarea>
                  </div>
                  <Button type="submit" className="w-full">Send Message</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container text-center">
          <p className="text-muted-foreground">© 2025 Abhay M. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
