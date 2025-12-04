"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const Footer = () => {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const footerLinks = [
    { label: "Home", href: "/" },
    { label: "Events", href: "/events" },
    { label: "Create Event", href: "/events/create" },
  ];

  const socialLinks = [
    { icon: "𝕏", label: "Twitter", href: "https://twitter.com" },
    { icon: <Github />, label: "GitHub", href: "https://github.com" },
    { icon: <Linkedin />, label: "LinkedIn", href: "https://linkedin.com" },
    { icon: <Mail />, label: "Gmail", href: "https://gmail.com" },
  ];

  const resources = [
    { label: "Documentation", href: "#" },
    { label: "API Reference", href: "#" },
    { label: "Community", href: "#" },
    { label: "Support", href: "#" },
  ];

  return (
    <footer className="relative bg-linear-to-t from-dark-100 to-dark-200 border-t border-dark-100 pt-16 pb-8 overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-color-blue rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8 mb-12">
          {/* Brand Section */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-linear-to-br from-color-blue to-primary flex items-center justify-center font-bold text-black">
                D
              </div>
              <h3 className="text-xl font-bold text-gradient">DevEvent</h3>
            </div>
            <p className="text-color-light-200 text-sm leading-relaxed">
              The ultimate hub for tech conferences, hackathons, and developer
              meetups. Never miss an event.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">
              Navigation
            </h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    onMouseEnter={() => setHoveredLink(link.label)}
                    onMouseLeave={() => setHoveredLink(null)}
                    className={`relative text-sm transition-all duration-300 inline-block ${
                      hoveredLink === link.label
                        ? "text-color-blue"
                        : "text-color-light-200 hover:text-color-blue"
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute bottom-0 left-0 h-0.5 bg-linear-to-r from-color-blue to-primary transition-all duration-300 ${
                        hoveredLink === link.label ? "w-full" : "w-0"
                      }`}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Resources</h4>
            <ul className="flex flex-col gap-3">
              {resources.map((resource) => (
                <li key={resource.label}>
                  <Link
                    href={resource.href}
                    onMouseEnter={() => setHoveredLink(resource.label)}
                    onMouseLeave={() => setHoveredLink(null)}
                    className={`relative text-sm transition-all duration-300 inline-block ${
                      hoveredLink === resource.label
                        ? "text-color-blue"
                        : "text-color-light-200 hover:text-color-blue"
                    }`}
                  >
                    {resource.label}
                    <span
                      className={`absolute bottom-0 left-0 h-0.5 bg-linear-to-r from-color-blue to-primary transition-all duration-300 ${
                        hoveredLink === resource.label ? "w-full" : "w-0"
                      }`}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Connect</h4>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={social.label}
                  className="group relative w-10 h-10 rounded-lg bg-linear-to-br from-dark-200 to-border-dark border border-dark-100 flex items-center justify-center text-lg transition-all duration-300 hover:from-color-blue hover:to-primary hover:shadow-lg hover:scale-110"
                >
                  <span className="transition-all duration-300 group-hover:scale-125">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-linear-to-r from-transparent via-dark-100 to-transparent mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col mb-4 sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <p className="text-color-light-200 text-sm">
            © {new Date().getFullYear()} DevEvent. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-color-light-200">
            <Link href="#" className="hover:text-color-blue transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-color-blue transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-color-blue transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
