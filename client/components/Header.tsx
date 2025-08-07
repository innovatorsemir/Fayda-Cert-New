import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { MobileNav } from "@/components/MobileNav";
import { ArrowLeft, FileCheck } from "lucide-react";

interface HeaderProps {
  variant?: "default" | "minimal";
  showBackButton?: boolean;
  backButtonText?: string;
  backButtonHref?: string;
  className?: string;
}

export function Header({
  variant = "default",
  showBackButton = false,
  backButtonText = "Back to Home",
  backButtonHref = "/",
  className = "",
}: HeaderProps) {
  return (
    <header
      className={`bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-white/20 dark:border-slate-700/20 sticky top-0 z-50 ${className}`}
    >
      <div className="container mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 md:gap-3 min-w-0 flex-1">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F987903e727814500a3234fea1ca42e5a%2Fc87c10551bf74737a0acb97e7d337256?format=webp&width=800"
            alt="FaydaCert Logo"
            className="w-8 h-8 md:w-10 md:h-10 object-contain rounded-full shrink-0"
          />
          <div className="min-w-0">
            <h1 className="text-lg md:text-xl font-bold text-slate-900 dark:text-slate-100 truncate">
              FaydaCert
            </h1>
            <p className="text-xs text-slate-600 dark:text-slate-400 truncate">
              Certificate Verification
            </p>
          </div>
        </Link>

        {variant === "default" ? (
          <div className="flex items-center gap-4">
            <nav className="hidden md:flex items-center gap-6">
              <Link
                to="/about"
                className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100 transition-colors"
              >
                About
              </Link>
              <Link
                to="/how-it-works"
                className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100 transition-colors"
              >
                How it Works
              </Link>
              <Link
                to="/contact"
                className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100 transition-colors"
              >
                Contact
              </Link>
              <ThemeToggle />
              <Link to="/login">
                <Button variant="outline" size="sm">
                  Sign In
                </Button>
              </Link>
            </nav>
            <MobileNav />
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <div className="hidden md:block">
              <ThemeToggle />
            </div>
            {showBackButton && (
              <Link to={backButtonHref}>
                <Button variant="outline" size="sm">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  {backButtonText}
                </Button>
              </Link>
            )}
            <div className="md:hidden">
              <MobileNav
                navItems={[
                  { label: "Home", href: "/" },
                  { label: "About", href: "/about" },
                  { label: "Contact", href: "/contact" },
                ]}
                showSignIn={false}
              />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
