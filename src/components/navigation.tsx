"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon, Monitor } from "lucide-react";
import { useTheme } from "./theme-provider";
import { clsx } from "clsx";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  const ThemeIcon = theme === "dark" ? Sun : theme === "light" ? Moon : Monitor;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm"
          : "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      }`}
    >
      <nav className="container flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="group flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
              <span className="text-primary-foreground font-bold text-lg group-hover:scale-110 transition-transform">
                P
              </span>
            </div>
            <span className="font-bold text-xl group-hover:text-primary transition-colors">
              Portfolio
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navigation.map((item, index) => (
            <Link
              key={item.name}
              href={item.href}
              className={clsx(
                "relative text-sm font-medium transition-all duration-300 hover:text-primary hover:scale-105 hover:-translate-y-0.5",
                pathname === item.href
                  ? "text-foreground"
                  : "text-muted-foreground"
              )}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {item.name}
              {pathname === item.href && (
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full animate-scale-in" />
              )}
            </Link>
          ))}
        </div>

        {/* Theme Toggle & Mobile Menu Button */}
        <div className="flex items-center space-x-4">
          <button
            onClick={() => {
              if (theme === "light") setTheme("dark");
              else if (theme === "dark") setTheme("system");
              else setTheme("light");
            }}
            className="p-2 rounded-md hover:bg-accent hover:scale-110 transition-all duration-300"
            aria-label="Toggle theme"
          >
            <ThemeIcon className="h-5 w-5 hover:rotate-12 transition-transform duration-300" />
          </button>

          <button
            className="md:hidden p-2 rounded-md hover:bg-accent hover:scale-110 transition-all duration-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="relative w-5 h-5">
              <Menu
                className={`absolute inset-0 h-5 w-5 transition-all duration-300 ${
                  mobileMenuOpen
                    ? "opacity-0 rotate-90"
                    : "opacity-100 rotate-0"
                }`}
              />
              <X
                className={`absolute inset-0 h-5 w-5 transition-all duration-300 ${
                  mobileMenuOpen
                    ? "opacity-100 rotate-0"
                    : "opacity-0 -rotate-90"
                }`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden border-t bg-background overflow-hidden transition-all duration-300 ${
          mobileMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container py-4 space-y-4">
          {navigation.map((item, index) => (
            <Link
              key={item.name}
              href={item.href}
              className={clsx(
                "block text-sm font-medium transition-all duration-300 hover:text-primary hover:translate-x-2",
                pathname === item.href
                  ? "text-foreground"
                  : "text-muted-foreground",
                mobileMenuOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-2"
              )}
              style={{
                transitionDelay: mobileMenuOpen ? `${index * 100}ms` : "0ms",
              }}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
