import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
}

interface MobileNavProps {
  navItems?: NavItem[];
  showSignIn?: boolean;
}

const defaultNavItems: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "How it Works", href: "/how-it-works" },
  { label: "Contact", href: "/contact" },
];

export function MobileNav({
  navItems = defaultNavItems,
  showSignIn = true,
}: MobileNavProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="sm" className="px-2">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-80 sm:w-96 px-0">
          <div className="flex flex-col h-full">
            <div className="px-6 py-4 border-b">
              <SheetTitle className="text-lg font-semibold">
                Navigation
              </SheetTitle>
            </div>

            <nav className="flex-1 px-6 py-4">
              <div className="space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="block px-3 py-2 text-base text-slate-700 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-300 dark:hover:text-slate-100 dark:hover:bg-slate-800 rounded-md transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600 dark:text-slate-300">
                    Theme
                  </span>
                  <ThemeToggle />
                </div>

                {showSignIn && (
                  <Link to="/login" onClick={() => setOpen(false)}>
                    <Button variant="outline" className="w-full">
                      Sign In
                    </Button>
                  </Link>
                )}
              </div>
            </nav>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
