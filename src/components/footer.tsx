"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const footerSections = [
    {
      title: "Navigation",
      links: [
        { name: "Home", href: "/" },
        { name: "Projects", href: "/projects" },
        { name: "Blog", href: "/blog" },
        { name: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Featured Projects",
      links: [
        { name: "Customer Portal App", href: "/projects/customer-portal" },
        { name: "View All Projects", href: "/projects" },
      ],
    },
  ];

  return (
    <footer
      ref={footerRef}
      className="border-t bg-background relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/6 w-32 h-32 bg-primary/2 rounded-full blur-2xl animate-float" />
        <div className="absolute bottom-1/4 right-1/6 w-48 h-48 bg-secondary/2 rounded-full blur-2xl animate-float-delayed" />
      </div>

      <div className="container py-12 relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div
            className={`space-y-4 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="group flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <span className="text-primary-foreground font-bold text-lg group-hover:scale-110 transition-transform">
                  P
                </span>
              </div>
              <span className="font-bold text-xl group-hover:text-primary transition-colors">
                Portfolio
              </span>
            </div>
            <p className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Frontend developer specializing in modern web applications with
              Next.js, TypeScript, and Tailwind CSS.
            </p>
          </div>

          {/* Navigation & Projects */}
          {footerSections.map((section, sectionIndex) => (
            <div
              key={section.title}
              className={`space-y-4 transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${(sectionIndex + 1) * 200}ms` }}
            >
              <h3 className="font-semibold hover:text-primary transition-colors">
                {section.title}
              </h3>
              <ul className="space-y-2 text-sm">
                {section.links.map((link, linkIndex) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground hover:translate-x-1 transition-all duration-300 inline-block"
                      style={{ transitionDelay: `${linkIndex * 50}ms` }}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Connect */}
          <div
            className={`space-y-4 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            <h3 className="font-semibold hover:text-primary transition-colors">
              Connect
            </h3>
            <div className="flex space-x-4">
              {[
                {
                  icon: Github,
                  href: "https://github.com/yourusername",
                  label: "GitHub",
                },
                {
                  icon: Linkedin,
                  href: "https://linkedin.com/in/yourusername",
                  label: "LinkedIn",
                },
                {
                  icon: Mail,
                  href: "mailto:your.email@example.com",
                  label: "Email",
                },
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target={
                      social.href.startsWith("mailto:") ? undefined : "_blank"
                    }
                    rel={
                      social.href.startsWith("mailto:")
                        ? undefined
                        : "noopener noreferrer"
                    }
                    className="text-muted-foreground hover:text-foreground hover:scale-110 hover:-translate-y-1 transition-all duration-300"
                    aria-label={social.label}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
            <div className="text-sm text-muted-foreground space-y-2">
              <p className="hover:text-foreground transition-colors">
                Available for freelance work
              </p>
              <a
                href="mailto:your.email@example.com"
                className="text-primary hover:underline inline-flex items-center gap-1 hover:translate-x-1 transition-all duration-300 group"
              >
                Get in touch
                <ExternalLink className="h-3 w-3 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        <div
          className={`mt-8 pt-8 border-t text-center text-sm text-muted-foreground transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "800ms" }}
        >
          <p className="hover:text-foreground transition-colors">
            &copy; {currentYear} Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
