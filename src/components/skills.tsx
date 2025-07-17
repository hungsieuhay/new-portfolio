"use client";

import { useEffect, useRef, useState } from "react";

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend Technologies",
      icon: "💻",
      skills: [
        { name: "Next.js", proficiency: "Expert" },
        { name: "React", proficiency: "Expert" },
        { name: "TypeScript", proficiency: "Advanced" },
        { name: "Tailwind CSS", proficiency: "Expert" },
        { name: "JavaScript (ES6+)", proficiency: "Advanced" },
        { name: "HTML5 & CSS3", proficiency: "Expert" },
      ],
    },
    {
      title: "Backend & Tools",
      icon: "⚙️",
      skills: [
        { name: "Node.js", proficiency: "Intermediate" },
        { name: "API Integration", proficiency: "Advanced" },
        { name: "Authentication", proficiency: "Advanced" },
        { name: "Git & GitHub", proficiency: "Advanced" },
        { name: "Vercel", proficiency: "Advanced" },
        { name: "Database (SQL)", proficiency: "Intermediate" },
      ],
    },
    {
      title: "Design & UX",
      icon: "🎨",
      skills: [
        { name: "Responsive Design", proficiency: "Expert" },
        { name: "UI/UX Principles", proficiency: "Advanced" },
        { name: "Figma", proficiency: "Intermediate" },
        { name: "Accessibility", proficiency: "Advanced" },
        { name: "Performance Optimization", proficiency: "Advanced" },
        { name: "SEO Best Practices", proficiency: "Advanced" },
      ],
    },
  ];

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

  const getProficiencyColor = (proficiency: string) => {
    switch (proficiency) {
      case "Expert":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "Advanced":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
      case "Intermediate":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
    }
  };

  return (
    <section ref={sectionRef} className="py-20">
      <div className="container">
        <div
          className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground">
            A comprehensive toolkit for building modern web applications
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className={`bg-card rounded-xl p-6 border hover:shadow-lg transition-all duration-500 hover:scale-[1.02] group ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: isVisible
                  ? `${300 + categoryIndex * 200}ms`
                  : "0ms",
              }}
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <span className="text-2xl">{category.icon}</span>
                </div>
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center justify-between p-3 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-all duration-300 hover:scale-[1.02]"
                  >
                    <span className="font-medium text-sm">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional certifications or achievements */}
        <div
          className={`mt-16 max-w-4xl mx-auto transition-all duration-1000 delay-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h3 className="text-2xl font-bold text-center mb-8">
            Certifications & Achievements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-card rounded-lg p-6 border text-center hover:shadow-lg transition-all duration-300 hover:scale-[1.05] group">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                <span className="text-2xl">🏆</span>
              </div>
              <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                React Certification
              </h4>
              <p className="text-sm text-muted-foreground">
                Advanced React Development
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 border text-center hover:shadow-lg transition-all duration-300 hover:scale-[1.05] group">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                <span className="text-2xl">⚡</span>
              </div>
              <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                Performance Expert
              </h4>
              <p className="text-sm text-muted-foreground">
                Web Performance Optimization
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 border text-center hover:shadow-lg transition-all duration-300 hover:scale-[1.05] group">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                <span className="text-2xl">🎨</span>
              </div>
              <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                UI/UX Design
              </h4>
              <p className="text-sm text-muted-foreground">
                User Experience Design
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
