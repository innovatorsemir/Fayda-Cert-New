import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { DashboardMobileNav } from "@/components/DashboardMobileNav";
import {
  FileCheck,
  Bell,
  Settings,
  LogOut,
  GraduationCap,
  Building2,
  Briefcase,
  Shield,
} from "lucide-react";

interface DashboardHeaderProps {
  userType: "student" | "institution" | "employer" | "admin";
  userName: string;
  portalName: string;
}

const userTypeConfig = {
  student: {
    icon: GraduationCap,
    color: "text-green-600",
    navItems: [
      { label: "Dashboard", href: "/student-dashboard" },
      { label: "Certificates", href: "/student-dashboard#certificates" },
      { label: "Activity", href: "/student-dashboard#activity" },
      { label: "Settings", href: "/student-dashboard#settings" },
    ],
  },
  institution: {
    icon: Building2,
    color: "text-blue-600",
    navItems: [
      { label: "Dashboard", href: "/institution-dashboard" },
      { label: "Certificates", href: "/institution-dashboard#certificates" },
      { label: "Students", href: "/institution-dashboard#students" },
      { label: "Reports", href: "/institution-dashboard#reports" },
    ],
  },
  employer: {
    icon: Briefcase,
    color: "text-purple-600",
    navItems: [
      { label: "Dashboard", href: "/employer-dashboard" },
      { label: "Verify", href: "/employer-dashboard#verify" },
      { label: "History", href: "/employer-dashboard#history" },
      { label: "Reports", href: "/employer-dashboard#reports" },
    ],
  },
  admin: {
    icon: Shield,
    color: "text-red-600",
    navItems: [
      { label: "Dashboard", href: "/admin-dashboard" },
      { label: "Institutions", href: "/admin-dashboard#institutions" },
      { label: "Users", href: "/admin-dashboard#users" },
      { label: "System", href: "/admin-dashboard#system" },
    ],
  },
};

export function DashboardHeader({
  userType,
  userName,
  portalName,
}: DashboardHeaderProps) {
  const config = userTypeConfig[userType];
  const IconComponent = config.icon;

  return (
    <header className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-white/20 dark:border-slate-700/20 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
              <FileCheck className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                Fayda
              </h1>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                {portalName}
              </p>
            </div>
          </Link>
          <div className="h-6 w-px bg-slate-300 dark:bg-slate-600 hidden md:block"></div>
          <div className="hidden md:flex items-center gap-2">
            <IconComponent className={`h-5 w-5 ${config.color}`} />
            <span className="font-medium text-slate-900 dark:text-slate-100">
              {userName}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" size="sm">
              <Bell className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <Settings className="h-4 w-4" />
            </Button>
            <ThemeToggle />
            <Link to="/login">
              <Button variant="outline" size="sm">
                <LogOut className="mr-2 h-4 w-4" />
                Sign Out
              </Button>
            </Link>
          </div>

          <div className="md:hidden">
            <DashboardMobileNav
              navItems={[
                ...config.navItems,
                { label: "Home", href: "/" },
              ]}
              userName={userName}
              userIcon={IconComponent}
              userIconColor={config.color}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
