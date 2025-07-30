import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { useState } from "react";
import { 
  FileCheck, 
  ArrowLeft, 
  GraduationCap, 
  Building2, 
  Briefcase, 
  Shield,
  Mail,
  Lock
} from "lucide-react";

export default function LoginPage() {
  const [selectedRole, setSelectedRole] = useState<string>("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const roles = [
    {
      id: "student",
      title: "Student",
      description: "Access your certificates and verification history",
      icon: GraduationCap,
      color: "from-green-500 to-emerald-600",
      route: "/student-dashboard"
    },
    {
      id: "institution",
      title: "Institution",
      description: "Manage and issue student certificates",
      icon: Building2,
      color: "from-blue-500 to-indigo-600",
      route: "/institution-dashboard"
    },
    {
      id: "employer",
      title: "Employer",
      description: "Verify candidate credentials",
      icon: Briefcase,
      color: "from-purple-500 to-violet-600",
      route: "/employer-dashboard"
    },
    {
      id: "admin",
      title: "Platform Admin",
      description: "Manage platform operations and oversight",
      icon: Shield,
      color: "from-red-500 to-orange-600",
      route: "/admin-dashboard"
    }
  ];

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedRole) {
      const role = roles.find(r => r.id === selectedRole);
      if (role) {
        window.location.href = role.route;
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-white/20">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
              <FileCheck className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900">Fayda</h1>
              <p className="text-xs text-slate-600">Certificate Verification</p>
            </div>
          </Link>
          <Link to="/">
            <Button variant="outline" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-slate-900 mb-4">Sign In to Fayda</h1>
            <p className="text-slate-600">Select your role and sign in to access your dashboard</p>
          </div>

          {!selectedRole ? (
            /* Role Selection */
            <div className="grid md:grid-cols-2 gap-6">
              {roles.map((role) => (
                <Card 
                  key={role.id}
                  className="bg-white/70 backdrop-blur-sm border-white/40 hover:shadow-lg transition-all cursor-pointer group"
                  onClick={() => setSelectedRole(role.id)}
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${role.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <role.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-xl text-slate-900">{role.title}</CardTitle>
                        <p className="text-sm text-slate-600">{role.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <Button className={`w-full bg-gradient-to-r ${role.color} hover:opacity-90 text-white`}>
                      Continue as {role.title}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            /* Login Form */
            <div className="max-w-md mx-auto">
              <Card className="bg-white/70 backdrop-blur-sm border-white/40">
                <CardHeader className="text-center pb-6">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    {(() => {
                      const role = roles.find(r => r.id === selectedRole);
                      if (role) {
                        return (
                          <>
                            <div className={`w-12 h-12 bg-gradient-to-br ${role.color} rounded-xl flex items-center justify-center`}>
                              <role.icon className="h-6 w-6 text-white" />
                            </div>
                            <div className="text-left">
                              <CardTitle className="text-xl text-slate-900">{role.title} Login</CardTitle>
                              <p className="text-sm text-slate-600">Enter your credentials</p>
                            </div>
                          </>
                        );
                      }
                      return null;
                    })()}
                  </div>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleLogin} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                        <Input
                          id="email"
                          type="email"
                          placeholder="Enter your email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                        <Input
                          id="password"
                          type="password"
                          placeholder="Enter your password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <label className="flex items-center gap-2">
                        <input type="checkbox" className="rounded" />
                        Remember me
                      </label>
                      <Link to="/forgot-password" className="text-blue-600 hover:underline">
                        Forgot password?
                      </Link>
                    </div>
                    <Button 
                      type="submit" 
                      className={`w-full bg-gradient-to-r ${roles.find(r => r.id === selectedRole)?.color} hover:opacity-90 text-white`}
                    >
                      Sign In
                    </Button>
                  </form>
                  <div className="mt-6 text-center">
                    <Button 
                      variant="ghost" 
                      onClick={() => setSelectedRole("")}
                      className="text-slate-600 hover:text-slate-900"
                    >
                      ← Choose a different role
                    </Button>
                  </div>
                  <div className="mt-4 text-center text-sm text-slate-600">
                    Don't have an account?{" "}
                    <Link to="/register" className="text-blue-600 hover:underline">
                      Register here
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
