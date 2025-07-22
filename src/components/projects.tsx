"use client";

import Link from "next/link";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function Projects() {
  const projects = [
    {
      id: "customer-portal",
      title: "Web3 Platform: GemX Network",
      description:
        "Research and develop a crypto market analytics dashboard with real-time data visualization and interactive reporting features",
      image: "/api/placeholder/600/400",
      tags: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Authentication",
        "API Integration",
      ],
      featured: true,
      links: {
        demo: "https://gemx.io/",
        details: "/projects/gemx-dashboard",
      },
    },
    {
      id: "saas-dashboard",
      title: "Avita Diving Dasboard ",
      description:
        "Build a customer portal to join online meetings, manage meeting rooms and create documents using Next.js and TypeScript.",
      image: "/images/avita-img.jpg",
      tags: ["Next.js", "skyway.js", "SCSS", "Real-time Data"],
      featured: false,
      links: {
        demo: "https://avita.co.jp/",
        details: "/projects/customer-portal",
      },
    },
    {
      id: "ecommerce-platform",
      title: "E-commerce Platform",
      description:
        "Full-featured e-commerce platform with product management, shopping cart, payment integration, and admin panel. Mobile-first responsive design.",
      image: "/images/itel-img.jpg",
      tags: ["Next.js", "Stripe", "PostgreSQL", "Responsive Design"],
      featured: false,
      links: {
        demo: "https://itel.vn/",
        details: "/projects/itel-platform",
      },
    },
  ];

  const featuredProject = projects.find((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
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
    <section ref={sectionRef} className="py-20 bg-muted/30">
      <div className="container">
        <div
          className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground">
            Showcasing my expertise in building modern web applications
          </p>
        </div>

        {/* Featured Project */}
        {featuredProject && (
          <div
            className={`max-w-6xl mx-auto mb-20 transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="bg-card rounded-2xl border overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.02] group">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="aspect-video lg:aspect-auto bg-[url(/images/gemx-img.jpg)] bg-cover flex items-center justify-center group-hover:from-primary/20 group-hover:to-secondary/20 transition-all duration-500"></div>

                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="inline-flex items-center rounded-full bg-primary/10 text-primary px-3 py-1 text-sm font-medium mb-4 w-fit">
                    Featured Project
                  </div>

                  <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                    {featuredProject.title}
                  </h3>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {featuredProject.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredProject.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <Link
                      href={featuredProject.links.details}
                      className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    >
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>

                    <a
                      href={featuredProject.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-lg border border-input bg-background px-6 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    >
                      Live Demo
                      <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Other Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {otherProjects.map((project, index) => (
            <div
              key={project.id}
              className={`bg-card rounded-xl border overflow-hidden hover:shadow-xl transition-all duration-500 hover:scale-[1.03] group ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: isVisible ? `${600 + index * 200}ms` : "0ms",
              }}
            >
              <div
                style={{
                  backgroundImage: `url(${project.image})`,
                }}
                className="aspect-video bg-cover flex items-center justify-center group-hover:from-primary/10 group-hover:to-secondary/10 transition-all duration-500"
              />

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 3).map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs">
                      +{project.tags.length - 3} more
                    </span>
                  )}
                </div>

                <div className="flex gap-2">
                  <Link
                    href={project.links.details}
                    className="flex-1 inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    View Details
                  </Link>

                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-lg border border-input bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    <ExternalLink className="h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <div
          className={`text-center transition-all duration-1000 delay-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Link
            href="/projects"
            className="inline-flex items-center justify-center rounded-lg border border-input bg-background px-8 py-3 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-105 hover:shadow-lg group"
          >
            View All Projects
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
}
