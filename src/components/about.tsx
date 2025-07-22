"use client";

import { Code, Database, Globe, Smartphone } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleHighlights, setVisibleHighlights] = useState<boolean[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  const highlights = [
    {
      icon: Code,
      title: "Frontend Development",
      description:
        "Expert in React, Next.js, and TypeScript with focus on performance and user experience",
    },
    {
      icon: Database,
      title: "Full-Stack Integration",
      description:
        "Experience with API integration, authentication, and database management",
    },
    {
      icon: Globe,
      title: "Modern Web Standards",
      description:
        "Following best practices for SEO, accessibility, and web performance",
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description:
        "Creating seamless experiences across all devices and screen sizes",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Stagger highlight animations
          highlights.forEach((_, index) => {
            setTimeout(() => {
              setVisibleHighlights((prev) => {
                const newState = [...prev];
                newState[index] = true;
                return newState;
              });
            }, index * 200);
          });
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-muted/30 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/6 w-32 h-32 bg-primary/3 rounded-full blur-2xl animate-float" />
        <div className="absolute bottom-1/3 right-1/6 w-48 h-48 bg-secondary/3 rounded-full blur-2xl animate-float-delayed" />
      </div>

      <div className="container relative">
        <div
          className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 hover:text-primary transition-colors">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I'm a passionate frontend developer with over 3 years of experience
            building modern web applications. I specialize in creating customer
            portals, admin dashboards, and SaaS platforms that prioritize user
            experience and business objectives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`group text-center transition-all duration-700 hover:scale-105 ${
                  visibleHighlights[index]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        <div
          className={`max-w-4xl mx-auto transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-6 hover:text-primary transition-colors">
                My Approach
              </h3>
              <div className="space-y-4">
                {[
                  {
                    title: "User-Centered Design",
                    description:
                      "Every interface I build prioritizes user experience and accessibility",
                  },
                  {
                    title: "Performance First",
                    description:
                      "Optimized code and best practices ensure fast, reliable applications",
                  },
                  {
                    title: "Scalable Architecture",
                    description:
                      "Building maintainable systems that grow with your business needs",
                  },
                ].map((approach, index) => (
                  <div
                    key={index}
                    className={`group flex items-start space-x-3 transition-all duration-500 hover:translate-x-2 ${
                      isVisible
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-4"
                    }`}
                    style={{ transitionDelay: `${600 + index * 200}ms` }}
                  >
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0 group-hover:scale-150 group-hover:bg-primary/80 transition-all duration-300" />
                    <div>
                      <h4 className="font-medium mb-1 group-hover:text-primary transition-colors">
                        {approach.title}
                      </h4>
                      <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                        {approach.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div
              className={`bg-card rounded-xl p-8 border hover:shadow-lg hover:border-primary/20 transition-all duration-500 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-8"
              }`}
              style={{ transitionDelay: "800ms" }}
            >
              <h3 className="text-xl font-bold mb-6 hover:text-primary transition-colors">
                Experience Highlights
              </h3>
              <div className="space-y-6">
                {[
                  {
                    title: "Web3 Platform",
                    period: "2023-2024",
                    description:
                      "Research and develop a crypto market analytics dashboard with real-time data visualization and interactive reporting features",
                  },
                  {
                    title: "E-commerce Platform",
                    period: "2023-2024",
                    description:
                      "Developed responsive e-commerce platform with payment integration, inventory management, and admin panel",
                  },
                  {
                    title: "Avita Diving Dasboard",
                    period: "2022-2023",
                    description:
                      "Build a customer portal to join online meetings, manage meeting rooms and create documents using Next.js and TypeScript",
                  },
                ].map((experience, index) => (
                  <div
                    key={index}
                    className={`group transition-all duration-500 hover:translate-x-2 ${
                      isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4"
                    }`}
                    style={{ transitionDelay: `${1000 + index * 200}ms` }}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium group-hover:text-primary transition-colors">
                        {experience.title}
                      </h4>
                      <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                        {experience.period}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                      {experience.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
