"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/data/navigation";

export function Navigation(): React.ReactElement {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string): boolean => {
    return pathname === path;
  };

  return (
    <header>
      <nav className="fixed w-full z-50 transition-all duration-300 py-5 bg-dark-bg/80 backdrop-blur-md">
        <div className="container mx-auto px-4 lg:px-8 flex justify-between items-center">
          <Link href="/" className="flex items-center cursor-pointer">
            <span
              className="text-2xl text-purple-400"
              style={{ fontWeight: 700 }}
            >
              MN.
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                <Link
                  href={item.path}
                  className={`block px-4 py-2 transition-colors cursor-pointer ${
                    isActive(item.path)
                      ? "text-white"
                      : "text-gray-300 hover:text-white"
                  }`}
                  style={{ fontWeight: 500 }}
                >
                  {item.name}
                </Link>
                {isActive(item.path) && (
                  <div className="absolute bottom-0 left-4 right-4 h-[2px] bg-purple-400"></div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden relative z-[70]">
            <button
              aria-label="Menu"
              className="p-2 text-white relative z-[70] cursor-pointer"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 bottom-0 w-[280px] h-screen bg-card-bg lg:hidden transition-transform duration-300 z-[60] ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full pt-24 px-8 pb-6">
            <div className="flex flex-col space-y-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`transition-colors cursor-pointer ${
                    isActive(item.path)
                      ? "text-purple-400"
                      : "text-white hover:text-purple-400"
                  }`}
                  style={{
                    fontWeight: 500,
                    fontSize: "1.125rem",
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
