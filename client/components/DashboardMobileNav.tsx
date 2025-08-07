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
import { Menu, Bell, Settings, LogOut, User } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
}

interface DashboardMobileNavProps {
  navItems: NavItem[];
  userName: string;
  userIcon: React.ComponentType<{ className?: string }>;
  userIconColor: string;
}

export function DashboardMobileNav({
  navItems,
  userName,
  userIcon: UserIcon,
  userIconColor,
}: DashboardMobileNavProps) {
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
        <SheetContent side="right" className="w-80 px-0">
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="px-6 py-4 border-b">
              <SheetTitle className="text-lg font-semibold">Menu</SheetTitle>
            </div>

            {/* User Info */}
            <div className="px-6 py-4 bg-slate-50 dark:bg-slate-800/50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-full flex items-center justify-center">
                  <UserIcon className={`h-5 w-5 ${userIconColor}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-slate-900 dark:text-slate-100 truncate">
                    {userName}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Dashboard</p>
                </div>
              </div>
            </div>

            {/* Navigation */}
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
            </nav>

            {/* Bottom Actions */}
            <div className="px-6 py-4 border-t space-y-4">
              {/* Quick Actions */}
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm" className="flex-1">
                  <Bell className="h-4 w-4 mr-2" />
                  Notifications
                </Button>
                <Button variant="ghost" size="sm" className="flex-1">
                  <Settings className="h-4 w-4 mr-2" />
                  Settings
                </Button>
              </div>

              {/* Theme Toggle */}
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600 dark:text-slate-300">Theme</span>
                <ThemeToggle />
              </div>

              {/* Sign Out */}
              <Link to="/login" onClick={() => setOpen(false)} className="block">
                <Button variant="outline" className="w-full">
                  <LogOut className="mr-2 h-4 w-4" />
                  Sign Out
                </Button>
              </Link>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
