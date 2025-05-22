
import React from "react";

const Header = () => {
  return (
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
  );
};

export default Header;
