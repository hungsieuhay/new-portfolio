"use client";

import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ExternalLink, Github, Calendar } from "lucide-react";
import { useEffect, useRef, useState } from "react";

// Note: metadata export moved to layout or parent component since this is now a client component

export default function ProjectsPage() {
  const projects = [
    {
      id: "customer-portal",
      title: "Avita Diving Dashboard",
      description:
        "A comprehensive customer portal with role-based access control, ticket management, and document generation. Features include user authentication, dashboard analytics, support ticket system, and PDF/Excel document generation.",
      longDescription:
        "This project demonstrates my ability to build complex web applications with multiple user roles and advanced functionality. The portal includes a complete authentication system, role-based access control for Client and Operator roles, real-time room update management.",
      image: "/images/avita-img.jpg",
      tags: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Authentication",
        "API Integration",
        "Role-based Access",
      ],
      featured: true,
      status: "Completed",
      date: "2024",
      links: {
        demo: "https://avita.co.jp/",
        details: "/projects/customer-portal",
      },
      highlights: [
        "Role-based authentication system",
        "Real-time ticket management",
        "Document generation (PDF/Excel)",
        "Responsive dashboard design",
        "API integration and data management",
      ],
    },
    {
      id: "saas-dashboard",
      title: "Web3 Platform",
      description:
        "Real-time analytics dashboard with interactive charts, data visualization, and reporting features. Built with modern React patterns and optimized for performance.",
      longDescription:
        "A comprehensive analytics platform that showcases my skills in data visualization and real-time applications. Features include interactive charts, customizable dashboards, real-time data updates, and export functionality.",
      image: "/images/gemx-img.jpg",
      tags: [
        "Next.js",
        "Trading View Charts",
        "Tailwind CSS",
        "Real-time Data",
        "Data Visualization",
        "Performance Optimization",
      ],
      featured: false,
      status: "In Progress",
      date: "2023",
      links: {
        demo: "https://gemx.io/",
        details: "/projects/saas-dashboard",
      },
      highlights: [
        "Interactive data visualization",
        "Real-time updates",
        "Customizable dashboard layouts",
        "Export functionality",
        "Performance optimized",
      ],
    },
    {
      id: "ecommerce-platform",
      title: "E-commerce Platform",
      description:
        "Full-featured e-commerce platform with product management, shopping cart, payment integration, and admin panel. Mobile-first responsive design.",
      longDescription:
        "A complete e-commerce solution demonstrating full-stack development skills. Includes product catalog, shopping cart functionality, secure payment processing, order management, and comprehensive admin panel.",
      image: "/images/itel-img.jpg",
      tags: [
        "Next.js",
        "Stripe",
        "PostgreSQL",
        "Responsive Design",
        "Payment Integration",
        "Admin Panel",
      ],
      featured: false,
      status: "Completed",
      date: "2023",
      links: {
        demo: "https://itel.vn/",
        details: "/projects/ecommerce-platform",
      },
      highlights: [
        "Secure payment processing",
        "Product catalog management",
        "Order tracking system",
        "Admin dashboard",
        "Mobile-responsive design",
      ],
    },
    {
      id: "task-management",
      title: "GameFi Crypto",
      description:
        "Collaborative task management tool with team features, project organization, and progress tracking. Built with modern React and state management.",
      longDescription:
        "A type of gameFi tap to earn players can mine and complete tasks to get tokens",
      image: "/images/telegram-img.png",
      tags: [
        "React",
        "Twitter API",
        "Antd Mobile",
        "MongoDB",
        "Real-time Collaboration",
      ],
      featured: false,
      status: "In Progress",
      date: "2024",
      links: {
        demo: "https://t.me/GemxNetworkBot",
        details: "/projects/task-management",
      },
      highlights: [
        "Team collaboration features",
        "Project organization",
        "Real-time updates",
        "Progress tracking",
        "Task assignment system",
      ],
    },
  ];

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  const [isVisible, setIsVisible] = useState(false);
  const [featuredVisible, setFeaturedVisible] = useState(false);
  const [projectsVisible, setProjectsVisible] = useState(false);

  const headerRef = useRef<HTMLDivElement>(null);
  const featuredRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observerOptions = { threshold: 0.1 };

    const headerObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, observerOptions);

    const featuredObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setFeaturedVisible(true);
    }, observerOptions);

    const projectsObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setProjectsVisible(true);
    }, observerOptions);

    if (headerRef.current) headerObserver.observe(headerRef.current);
    if (featuredRef.current) featuredObserver.observe(featuredRef.current);
    if (projectsRef.current) projectsObserver.observe(projectsRef.current);

    return () => {
      headerObserver.disconnect();
      featuredObserver.disconnect();
      projectsObserver.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen py-20">
      <div className="container">
        {/* Header */}
        <div
          ref={headerRef}
          className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">My Projects</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            A collection of web applications showcasing my expertise in modern
            frontend development, from customer portals to SaaS dashboards and
            e-commerce platforms.
          </p>
        </div>

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <section ref={featuredRef} className="mb-20">
            <h2
              className={`text-2xl font-bold mb-8 transition-all duration-1000 ${
                featuredVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              Featured Projects
            </h2>
            <div className="space-y-12">
              {featuredProjects.map((project, index) => (
                <div
                  key={project.id}
                  className={`bg-card rounded-2xl border overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.02] group ${
                    featuredVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{
                    transitionDelay: featuredVisible
                      ? `${300 + index * 200}ms`
                      : "0ms",
                  }}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    <div
                      style={{ backgroundImage: `url(${project.image})` }}
                      className="aspect-video lg:aspect-auto bg-cover flex items-center justify-center group-hover:from-primary/20 group-hover:to-secondary/20 transition-all duration-500"
                    />
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="inline-flex items-center rounded-full bg-primary/10 text-primary px-3 py-1 text-sm font-medium">
                          Featured
                        </span>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-1" />
                          {project.date}
                        </div>
                      </div>

                      <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                        {project.title}
                      </h3>

                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {project.longDescription}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag, index) => (
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
                          href={project.links.details}
                          className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-lg group"
                        >
                          View Details
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </Link>

                        <a
                          href={project.links.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center rounded-lg border border-input bg-background px-6 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-105 hover:shadow-lg group"
                        >
                          Live Demo
                          <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Other Projects */}
        <section ref={projectsRef}>
          <h2
            className={`text-2xl font-bold mb-8 transition-all duration-1000 ${
              projectsVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            All Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {otherProjects.map((project, index) => (
              <div
                key={project.id}
                className={`bg-card rounded-xl border overflow-hidden hover:shadow-xl transition-all duration-500 hover:scale-[1.03] group ${
                  projectsVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: projectsVisible
                    ? `${300 + index * 150}ms`
                    : "0ms",
                }}
              >
                <div
                  style={{ backgroundImage: `url(${project.image})` }}
                  className="aspect-video bg-cover flex items-center justify-center group-hover:from-primary/10 group-hover:to-secondary/10 transition-all duration-500"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <span
                      className={`px-2 py-1 rounded text-xs font-medium ${
                        project.status === "Completed"
                          ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                          : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>

                  <div className="flex items-center text-sm text-muted-foreground mb-3">
                    <Calendar className="h-4 w-4 mr-1" />
                    {project.date}
                  </div>

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
                      href="#"
                      className="flex-1 inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    >
                      View Details
                    </Link>

                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-lg border border-input bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-105 hover:shadow-lg group"
                    >
                      <ExternalLink className="h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
