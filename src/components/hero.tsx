"use client";

import Link from "next/link";
import { ArrowRight, Download, Github, Linkedin } from "lucide-react";
import { useEffect, useState } from "react";

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background gradient with animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 animate-pulse" />

      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-float-delayed" />
      </div>

      <div className="container relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge with slide-in animation */}
          <div
            className={`inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium mb-8 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <span className="mr-2 animate-wave">👋</span>
            Available for new opportunities
          </div>

          {/* Main heading with staggered animation */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            <span
              className={`block transition-all duration-1000 delay-200 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              Frontend Developer
            </span>
            <span
              className={`block text-primary transition-all duration-1000 delay-400 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              Building Modern
            </span>
            <span
              className={`block transition-all duration-1000 delay-600 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              Web Applications
            </span>
          </h1>

          {/* Description with fade-in */}
          <p
            className={`text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed transition-all duration-1000 delay-800 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            Specialized in creating scalable customer portals and SaaS
            dashboards using
            <span className="text-foreground font-medium hover:text-primary transition-colors">
              {" "}
              Next.js
            </span>
            ,
            <span className="text-foreground font-medium hover:text-primary transition-colors">
              {" "}
              TypeScript
            </span>
            , and
            <span className="text-foreground font-medium hover:text-primary transition-colors">
              {" "}
              Tailwind CSS
            </span>
            .
          </p>

          {/* CTA Buttons with staggered animation */}
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center mb-12 transition-all duration-1000 delay-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <Link
              href="/projects"
              className="group inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              View My Work
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/contact"
              className="group inline-flex items-center justify-center rounded-lg border border-input bg-background px-8 py-3 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Get In Touch
            </Link>
          </div>

          {/* Social Links with hover animations */}
          <div
            className={`flex justify-center space-x-6 transition-all duration-1000 delay-1200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <a
              href="https://github.com/hungsieuhay"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110 hover:-translate-y-1"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/h%C6%B0ng-nguy%E1%BB%85n-42900216b/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110 hover:-translate-y-1"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* Featured project preview with enhanced animations */}
        <div
          className={`mt-20 max-w-5xl mx-auto transition-all duration-1000 delay-1400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2 hover:text-primary transition-colors">
              Featured Project
            </h2>
            <p className="text-muted-foreground">
              Avita Diving Dasboard Web Application
            </p>
          </div>

          <div className="group relative rounded-xl border bg-card overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]">
            <div className="aspect-video bg-[url(/images/gemx-img.jpg)] bg-cover flex items-center justify-center group-hover:from-primary/15 group-hover:to-secondary/15 transition-all duration-500">
              <div className="text-center text-white transition-all duration-500 opacity-0 group-hover:opacity-100">
                <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <span className="text-2xl group-hover:animate-bounce">
                    🚀
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  Avita Diving Dasboard
                </h3>
                <p className="text-sm mb-4">
                  Full-stack web application with role-based access, ticket
                  management, and document generation
                </p>
                <Link
                  href="/projects/customer-portal"
                  className="inline-flex items-center text-sm font-medium hover:underline group-hover:translate-x-1 transition-all duration-300"
                >
                  View Project Details
                  <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
