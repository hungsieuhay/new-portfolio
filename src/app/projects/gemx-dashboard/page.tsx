"use client";

import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Calendar,
  Users,
  Shield,
  FileText,
  BarChart3,
} from "lucide-react";
import { useEffect, useState, useRef } from "react";

// export const metadata: Metadata = {
//   title: "Customer Portal Web Application",
//   description:
//     "Detailed case study of a comprehensive customer portal with role-based access control, ticket management, and document generation built with Next.js and TypeScript.",
// };

export default function CustomerPortalPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleSections, setVisibleSections] = useState<boolean[]>([]);
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(
              entry.target.getAttribute("data-section") || "0"
            );
            setVisibleSections((prev) => {
              const newState = [...prev];
              newState[index] = true;
              return newState;
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all section elements
    const sectionElements = document.querySelectorAll("[data-section]");
    sectionElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
  const features = [
    {
      icon: Shield,
      title: "Role-Based Access Control",
      description:
        "Secure authentication system with two distinct user roles: Client, and Admin, each with specific permissions and dashboard views.",
    },
    {
      icon: FileText,
      title: "Crypto Price Management System",
      description:
        "Complete support crypto price management with status tracking, priority levels, and real-time updates.",
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description:
        "Comprehensive dashboard with key metrics, charts, and reports for tracking customer interactions and system performance.",
    },
    {
      icon: Users,
      title: "User Management",
      description:
        "Admin panel for managing user accounts, permissions, and organizational structure with bulk operations support.",
    },
  ];

  const techStack = [
    {
      name: "Next.js 14",
      description:
        "React framework with App Router for server-side rendering and optimal performance",
    },
    {
      name: "TypeScript",
      description:
        "Type-safe development with enhanced developer experience and code reliability",
    },
    {
      name: "Tailwind CSS",
      description:
        "Utility-first CSS framework for rapid UI development and consistent design",
    },
    {
      name: "NextAuth.js",
      description:
        "Complete authentication solution with multiple providers and session management",
    },
    {
      name: "Prisma",
      description:
        "Type-safe database ORM for PostgreSQL with migrations and schema management",
    },
    {
      name: "React Hook Form",
      description:
        "Performant forms with easy validation and excellent user experience",
    },
    {
      name: "Zustand",
      description: "Lightweight state management for global application state",
    },
    {
      name: "React Query",
      description:
        "Data fetching and caching library for optimal API interactions",
    },
  ];

  const challenges = [
    {
      title: "Complex Role-Based Permissions",
      problem:
        "Implementing a flexible permission system that could handle different user roles with varying access levels across multiple features.",
      solution:
        "Created a hierarchical permission system using middleware and custom hooks, with role-based route protection and component-level access control.",
    },
    {
      title: "Real-Time Updates",
      problem:
        "Users needed to see ticket updates and notifications in real-time without manual page refreshes.",
      solution:
        "Implemented WebSocket connections with fallback to polling, using React Query for optimistic updates and cache invalidation.",
    },
    {
      title: "Document Generation",
      problem:
        "Generating PDF and Excel reports with complex formatting and dynamic content based on user data.",
      solution:
        "Built a flexible template system using React-PDF and ExcelJS with customizable layouts and automated generation workflows.",
    },
  ];

  return (
    <div ref={pageRef} className="min-h-screen py-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/6 w-64 h-64 bg-primary/3 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/6 w-96 h-96 bg-secondary/3 rounded-full blur-3xl animate-float-delayed" />
      </div>

      <div className="container relative">
        {/* Back Navigation */}
        <Link
          href="/projects"
          className={`group inline-flex items-center text-muted-foreground hover:text-foreground transition-all duration-300 mb-8 hover:translate-x-1 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
          }`}
        >
          <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Projects
        </Link>

        {/* Header */}
        <div
          className={`max-w-4xl mx-auto mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="inline-flex items-center rounded-full bg-primary/10 text-primary px-4 py-2 text-sm font-medium hover:bg-primary/20 hover:scale-105 transition-all duration-300">
              Featured Project
            </span>
            <div className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors">
              <Calendar className="h-4 w-4 mr-1" />
              2023-2024
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold mb-6 hover:text-primary transition-colors">
            Web3 Platform: GemX Network
          </h1>

          <p className="text-xl text-muted-foreground leading-relaxed mb-8 hover:text-foreground transition-colors">
            Research and develop a crypto market analytics dashboard with
            real-time data visualization and interactive reporting features
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="https://gemx.io"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              View Live Demo
              <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Project Overview */}
        <section className="mb-20">
          <div className="bg-card rounded-2xl border p-8 lg:p-12">
            <h2 className="text-2xl font-bold mb-8">Project Overview</h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              <div>
                <h3 className="font-semibold mb-2">Role</h3>
                <p className="text-muted-foreground">Frontend Developer</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Duration</h3>
                <p className="text-muted-foreground">In progress</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Team Size</h3>
                <p className="text-muted-foreground">3 people</p>
              </div>
            </div>

            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p>
                This web3 platform: GemX Network was designed to demonstrate my
                ability to build complex, enterprise-level web applications. The
                project showcases advanced frontend development skills including
                authentication systems, role-based access control, real-time
                features, and document generation capabilities.
              </p>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-8">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-card rounded-xl border p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Technology Stack */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-8">Technology Stack</h2>
          <div className="bg-card rounded-xl border p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {techStack.map((tech, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">{tech.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {tech.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Challenges & Solutions */}
        {/* <section className="mb-20">
          <h2 className="text-2xl font-bold mb-8">Challenges & Solutions</h2>
          <div className="space-y-8">
            {challenges.map((challenge, index) => (
              <div key={index} className="bg-card rounded-xl border p-8">
                <h3 className="text-xl font-bold mb-4">{challenge.title}</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-destructive mb-2">
                      Challenge
                    </h4>
                    <p className="text-muted-foreground">{challenge.problem}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-600 dark:text-green-400 mb-2">
                      Solution
                    </h4>
                    <p className="text-muted-foreground">
                      {challenge.solution}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section> */}

        {/* Results & Impact */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-8">Results & Impact</h2>
          <div className="bg-card rounded-xl border p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <p className="text-muted-foreground">Type Safety Coverage</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">95+</div>
                <p className="text-muted-foreground">Lighthouse Score</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">2</div>
                <p className="text-muted-foreground">User Roles Supported</p>
              </div>
            </div>

            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p>
                The web3 platform: GemX Network successfully demonstrates
                advanced frontend development capabilities and serves as a
                comprehensive showcase of modern web application architecture.
                The project highlights proficiency in complex crypto price
                management, authentication systems, and user experience.
              </p>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section>
          <div className="bg-muted/30 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">
              Interested in Similar Work?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              This project demonstrates my ability to build complex, scalable
              web applications. I'm available for similar customer portal,
              dashboard, or SaaS development projects.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Get In Touch
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center justify-center rounded-lg border border-input bg-background px-6 py-3 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                View More Projects
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
