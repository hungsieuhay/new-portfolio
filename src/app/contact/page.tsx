"use client";

import { Metadata } from "next";
import { useState, useEffect, useRef } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Calendar,
} from "lucide-react";

// Note: This would normally be in a separate file, but including here for completeness
// export const metadata: Metadata = {
//   title: 'Contact',
//   description: 'Get in touch for web development projects, collaborations, or job opportunities. Available for Next.js, React, and TypeScript development work.',
// }

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    projectType: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [isVisible, setIsVisible] = useState(false);
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission (replace with actual implementation)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        projectType: "",
      });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "hungng1810@gmail.com",
      href: "mailto:hungng1810@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+84 1653036110",
      href: "tel:+841653036110",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Hanoi, Vietnam",
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/hungsieuhay",
      username: "@hungsieuhay",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/h%C6%B0ng-nguy%E1%BB%85n-42900216b/",
      username: "/in/hungnguyen",
    },
  ];

  const projectTypes = [
    "Customer Portal Development",
    "SaaS Dashboard",
    "E-commerce Platform",
    "Landing Page",
    "Full-Stack Application",
    "Consultation",
    "Other",
  ];

  return (
    <div ref={pageRef} className="min-h-screen py-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/6 w-64 h-64 bg-primary/3 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/6 w-96 h-96 bg-secondary/3 rounded-full blur-3xl animate-float-delayed" />
      </div>

      <div className="container relative">
        {/* Header */}
        <div
          className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 hover:text-primary transition-colors">
            Let's Work Together
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            I'm available for freelance projects, full-time opportunities, and
            collaborations. Let's discuss how I can help bring your web
            application ideas to life.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div
              className={`bg-card rounded-2xl border p-8 hover:shadow-lg hover:border-primary/20 transition-all duration-500 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-8"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <h2 className="text-2xl font-bold mb-6 hover:text-primary transition-colors">
                Send a Message
              </h2>

              {submitStatus === "success" && (
                <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg animate-fade-in">
                  <p className="text-green-800 dark:text-green-200">
                    Thank you for your message! I'll get back to you within 24
                    hours.
                  </p>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg animate-fade-in">
                  <p className="text-red-800 dark:text-red-200">
                    Sorry, there was an error sending your message. Please try
                    again or contact me directly.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="group">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2 group-focus-within:text-primary transition-colors"
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent hover:border-primary/50 transition-all duration-300"
                      placeholder="Your full name"
                    />
                  </div>

                  <div className="group">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2 group-focus-within:text-primary transition-colors"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent hover:border-primary/50 transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="group">
                  <label
                    htmlFor="projectType"
                    className="block text-sm font-medium mb-2 group-focus-within:text-primary transition-colors"
                  >
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent hover:border-primary/50 transition-all duration-300"
                  >
                    <option value="">Select a project type</option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="group">
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium mb-2 group-focus-within:text-primary transition-colors"
                  >
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent hover:border-primary/50 transition-all duration-300"
                    placeholder="Brief description of your project"
                  />
                </div>

                <div className="group">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2 group-focus-within:text-primary transition-colors"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-3 py-2 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none hover:border-primary/50 transition-all duration-300"
                    placeholder="Tell me more about your project, timeline, and requirements..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group w-full inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 hover:shadow-lg"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary-foreground mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div
              className={`space-y-8 transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-8"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              {/* Contact Details */}
              <div className="bg-card rounded-2xl border p-8 hover:shadow-lg hover:border-primary/20 transition-all duration-500">
                <h2 className="text-2xl font-bold mb-6 hover:text-primary transition-colors">
                  Contact Information
                </h2>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    const content = (
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                          <Icon className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                        </div>
                        <div>
                          <p className="font-medium group-hover:text-primary transition-colors">
                            {info.label}
                          </p>
                          <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                            {info.value}
                          </p>
                        </div>
                      </div>
                    );

                    return info.href ? (
                      <a
                        key={index}
                        href={info.href}
                        className="group block hover:bg-accent rounded-lg p-3 -m-3 transition-all duration-300 hover:translate-x-2"
                        style={{ transitionDelay: `${index * 100}ms` }}
                      >
                        {content}
                      </a>
                    ) : (
                      <div
                        key={index}
                        className="group p-3 -m-3"
                        style={{ transitionDelay: `${index * 100}ms` }}
                      >
                        {content}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-card rounded-2xl border p-8 hover:shadow-lg hover:border-primary/20 transition-all duration-500">
                <h2 className="text-2xl font-bold mb-6 hover:text-primary transition-colors">
                  Connect Online
                </h2>
                <div className="space-y-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center space-x-4 hover:bg-accent rounded-lg p-3 -m-3 transition-all duration-300 hover:translate-x-2"
                        style={{ transitionDelay: `${index * 100}ms` }}
                      >
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                          <Icon className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                        </div>
                        <div>
                          <p className="font-medium group-hover:text-primary transition-colors">
                            {social.label}
                          </p>
                          <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                            {social.username}
                          </p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Availability */}
              <div className="bg-card rounded-2xl border p-8 hover:shadow-lg hover:border-primary/20 transition-all duration-500">
                <h2 className="text-2xl font-bold mb-6 hover:text-primary transition-colors">
                  Availability
                </h2>
                <div className="space-y-4">
                  <div className="group flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                      <Calendar className="h-5 w-5 text-green-600 dark:text-green-400 group-hover:scale-110 transition-transform" />
                    </div>
                    <div>
                      <p className="font-medium text-green-600 dark:text-green-400 group-hover:scale-105 transition-transform">
                        Available for New Projects
                      </p>
                      <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                        Starting January 2024
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 p-4 bg-muted/50 rounded-lg hover:bg-muted/70 transition-colors">
                    <p className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      I typically respond to inquiries within 24 hours. For
                      urgent projects, please mention "URGENT" in your subject
                      line.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div
          className={`max-w-4xl mx-auto mt-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "600ms" }}
        >
          <h2 className="text-2xl font-bold text-center mb-12 hover:text-primary transition-colors">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "What's your typical project timeline?",
                answer:
                  "Project timelines vary based on complexity. A simple landing page takes 1-2 weeks, while a full customer portal can take 2-3 months. I'll provide a detailed timeline during our initial consultation.",
              },
              {
                question: "Do you work with existing teams?",
                answer:
                  "Absolutely! I'm comfortable working as part of existing development teams, following established workflows, coding standards, and using your preferred project management tools.",
              },
              {
                question: "What's included in your development service?",
                answer:
                  "I provide complete frontend development including UI/UX implementation, responsive design, performance optimization, testing, and deployment. I also offer ongoing maintenance and support.",
              },
              {
                question: "Can you help with existing projects?",
                answer:
                  "Yes! I can help with bug fixes, feature additions, performance improvements, or complete redesigns of existing applications. I'm experienced with legacy code refactoring and modernization.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className={`group bg-card rounded-xl border p-6 hover:shadow-lg hover:border-primary/20 hover:scale-105 transition-all duration-500 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${800 + index * 100}ms` }}
              >
                <h3 className="font-bold mb-3 group-hover:text-primary transition-colors">
                  {faq.question}
                </h3>
                <p className="text-muted-foreground text-sm group-hover:text-foreground transition-colors">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
