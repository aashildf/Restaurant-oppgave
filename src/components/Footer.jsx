

// import React from "react";

import { Facebook, Instagram, Twitter, Youtube, Linkedin } from "lucide-react";

export function Footer({ scrollToSection }) {
  return (
    <footer className="w-full bg-[#493927] text-white py-8 border-t border-white/10">
      <div className=" px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3
              className="text-2xl mb-4 tracking-tight text-[#F3E8D8]"
              style={{ fontFamily: "serif" }}
            >
              La Maison Joblòp
            </h3>
            <p className="text-[#E9DFCF] mb-6 leading-relaxed">
              Crafting exceptional dining experiences since 1998. Where culinary
              excellence meets refined elegance.
            </p>
            {/* Social Media Links */}
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#D1793E] transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#D1793E] transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#D1793E] transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#D1793E] transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={18} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#D1793E] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-[#F3E8D8]">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-[#E9DFCF] hover:text-[#D1793E] transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-[#E9DFCF] hover:text-[#D1793E] transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("menu")}
                  className="text-[#E9DFCF] hover:text-[#D1793E] transition-colors"
                >
                  Our Menu
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("blog")}
                  className="text-[#E9DFCF] hover:text-[#D1793E] transition-colors"
                >
                  Blog & Recipes
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-[#E9DFCF] hover:text-[#D1793E] transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 text-[#F3E8D8]">Services</h4>
            <ul className="space-y-3 text-[#E9DFCF]">
              <li>
                <a href="#" className="hover:text-[#D1793E] transition-colors">
                  Private Dining
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#D1793E] transition-colors">
                  Event Catering
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#D1793E] transition-colors">
                  Wedding Packages
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#D1793E] transition-colors">
                  Corporate Events
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#D1793E] transition-colors">
                  Cooking Classes
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Resources */}
          <div>
            <h4 className="mb-4 text-[#F3E8D8]">Legal & Info</h4>
            <ul className="space-y-3 text-[#E9DFCF]">
              <li>
                <a href="#" className="hover:text-[#D1793E] transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#D1793E] transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#D1793E] transition-colors">
                  Accessibility
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#D1793E] transition-colors">
                  Dietary Information
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#D1793E] transition-colors">
                  Career Opportunities
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#D1793E] transition-colors">
                  Style Guide
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#E9DFCF] text-sm">
            &copy; 2025 La Maison Joblòp All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-[#E9DFCF]">
            <a href="#" className="hover:text-[#D1793E] transition-colors">
              License Info
            </a>
            <span>|</span>
            <a href="#" className="hover:text-[#D1793E] transition-colors">
              Site Map
            </a>
            <span>|</span>
            <a href="#" className="hover:text-[#D1793E] transition-colors">
              Credits
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}