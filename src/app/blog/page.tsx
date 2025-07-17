"use client";

import { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";
import { useEffect, useState, useRef } from "react";

// export const metadata: Metadata = {
//   title: "Blog",
//   description:
//     "Technical articles about web development, Next.js, TypeScript, and modern frontend practices.",
// };

export default function BlogPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [visiblePosts, setVisiblePosts] = useState<boolean[]>([]);
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);
  const posts = [
    {
      id: "authentication-nextauth",
      title: "Building Secure Authentication with NextAuth.js",
      excerpt:
        "A comprehensive guide to implementing authentication in Next.js applications using NextAuth.js, including OAuth providers, session management, and security best practices.",
      content: "Learn how to set up robust authentication systems...",
      date: "2024-01-15",
      readTime: "8 min read",
      tags: ["Next.js", "Authentication", "Security"],
      featured: true,
    },
    {
      id: "tailwind-dashboard",
      title: "Building Responsive Dashboards with Tailwind CSS",
      excerpt:
        "Design patterns and techniques for creating beautiful, responsive admin dashboards using Tailwind CSS utility classes and component composition.",
      content: "Discover the best practices for dashboard design...",
      date: "2024-01-10",
      readTime: "6 min read",
      tags: ["Tailwind CSS", "UI Design", "Responsive Design"],
      featured: false,
    },
    {
      id: "typescript-best-practices",
      title: "TypeScript Best Practices for React Applications",
      excerpt:
        "Essential TypeScript patterns, type definitions, and development practices that will make your React applications more maintainable and bug-free.",
      content:
        "TypeScript has become essential for modern React development...",
      date: "2024-01-05",
      readTime: "10 min read",
      tags: ["TypeScript", "React", "Best Practices"],
      featured: false,
    },
    {
      id: "performance-optimization",
      title: "Web Performance Optimization Techniques",
      excerpt:
        "Practical strategies for improving web application performance, including code splitting, lazy loading, image optimization, and Core Web Vitals.",
      content: "Performance is crucial for user experience...",
      date: "2023-12-28",
      readTime: "12 min read",
      tags: ["Performance", "Optimization", "Web Vitals"],
      featured: false,
    },
    {
      id: "api-integration-patterns",
      title: "Modern API Integration Patterns in React",
      excerpt:
        "Explore different approaches to API integration in React applications, including React Query, SWR, and custom hooks for data fetching.",
      content:
        "API integration is a fundamental part of modern web applications...",
      date: "2023-12-20",
      readTime: "9 min read",
      tags: ["React", "API", "Data Fetching"],
      featured: false,
    },
    {
      id: "deployment-strategies",
      title: "Next.js Deployment Strategies and Best Practices",
      excerpt:
        "Complete guide to deploying Next.js applications on various platforms including Vercel, Netlify, and custom servers with CI/CD pipelines.",
      content: "Deploying Next.js applications efficiently...",
      date: "2023-12-15",
      readTime: "7 min read",
      tags: ["Next.js", "Deployment", "DevOps"],
      featured: false,
    },
  ];

  const featuredPosts = posts.filter((post) => post.featured);
  const recentPosts = posts.filter((post) => !post.featured);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(
              entry.target.getAttribute("data-index") || "0"
            );
            setVisiblePosts((prev) => {
              const newState = [...prev];
              newState[index] = true;
              return newState;
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all post elements
    const postElements = document.querySelectorAll("[data-index]");
    postElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

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
            Technical Blog
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Insights, tutorials, and best practices for modern web development.
            Sharing knowledge about Next.js, TypeScript, and building scalable
            applications.
          </p>
        </div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <section
            className={`mb-20 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <h2 className="text-2xl font-bold mb-8 hover:text-primary transition-colors">
              Featured Articles
            </h2>
            <div className="space-y-8">
              {featuredPosts.map((post, index) => (
                <article
                  key={post.id}
                  data-index={index}
                  className={`group bg-card rounded-2xl border overflow-hidden shadow-lg hover:shadow-xl hover:border-primary/20 transition-all duration-500 hover:scale-[1.02] ${
                    visiblePosts[index]
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${400 + index * 200}ms` }}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    <div className="aspect-video lg:aspect-auto bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center group-hover:from-primary/15 group-hover:to-secondary/15 transition-all duration-500">
                      <div className="text-center p-8">
                        <div className="w-20 h-20 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                          <span className="text-3xl group-hover:animate-bounce">
                            📝
                          </span>
                        </div>
                        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                          Featured Article
                        </h3>
                        <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                          In-depth technical guide
                        </p>
                      </div>
                    </div>

                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="inline-flex items-center rounded-full bg-primary/10 text-primary px-3 py-1 text-sm font-medium group-hover:bg-primary/20 transition-colors">
                          Featured
                        </span>
                        <div className="flex items-center text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                          <Calendar className="h-4 w-4 mr-1" />
                          {formatDate(post.date)}
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                          <Clock className="h-4 w-4 mr-1" />
                          {post.readTime}
                        </div>
                      </div>

                      <h3 className="text-2xl lg:text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>

                      <p className="text-muted-foreground mb-6 leading-relaxed group-hover:text-foreground transition-colors">
                        {post.excerpt}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {post.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="inline-flex items-center px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                            style={{ transitionDelay: `${tagIndex * 50}ms` }}
                          >
                            <Tag className="h-3 w-3 mr-1" />
                            {tag}
                          </span>
                        ))}
                      </div>

                      <Link
                        href={`/blog/${post.id}`}
                        className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-all duration-300 w-fit hover:scale-105 hover:shadow-lg group"
                      >
                        Read Article
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* Recent Posts */}
        <section
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "600ms" }}
        >
          <h2 className="text-2xl font-bold mb-8 hover:text-primary transition-colors">
            Recent Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post, index) => (
              <article
                key={post.id}
                data-index={featuredPosts.length + index}
                className={`group bg-card rounded-xl border overflow-hidden hover:shadow-lg hover:border-primary/20 transition-all duration-500 hover:scale-105 hover:-translate-y-2 ${
                  visiblePosts[featuredPosts.length + index]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${800 + index * 100}ms` }}
              >
                <div className="aspect-video bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center justify-center group-hover:from-primary/10 group-hover:to-secondary/10 transition-all duration-500">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      <span className="text-2xl group-hover:animate-bounce">
                        📄
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                      Technical Article
                    </p>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3 text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {formatDate(post.date)}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed line-clamp-3 group-hover:text-foreground transition-colors">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 2).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="inline-flex items-center px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                      >
                        <Tag className="h-3 w-3 mr-1" />
                        {tag}
                      </span>
                    ))}
                    {post.tags.length > 2 && (
                      <span className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                        +{post.tags.length - 2} more
                      </span>
                    )}
                  </div>

                  <Link
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center text-sm font-medium text-primary hover:underline group-hover:translate-x-1 transition-all duration-300"
                  >
                    Read More
                    <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section
          className={`mt-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "1000ms" }}
        >
          <div className="bg-muted/30 rounded-2xl p-8 lg:p-12 text-center hover:bg-muted/40 transition-all duration-500 hover:scale-[1.02]">
            <h2 className="text-2xl font-bold mb-4 hover:text-primary transition-colors">
              Stay Updated
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto hover:text-foreground transition-colors">
              Get notified when I publish new articles about web development,
              Next.js tutorials, and frontend best practices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent hover:border-primary/50 transition-all duration-300"
              />
              <button className="group px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-muted-foreground mt-4 hover:text-foreground transition-colors">
              No spam, unsubscribe at any time.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
