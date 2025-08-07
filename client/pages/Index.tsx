import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";
import { MobileNav } from "@/components/MobileNav";
import {
  GraduationCap,
  Building2,
  Briefcase,
  Shield,
  CheckCircle,
  Lock,
  Clock,
  ArrowRight,
  Scan,
  FileCheck,
  Users,
  TrendingUp,
} from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-blue-900 dark:to-indigo-900">
      {/* Header */}
      <header className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-white/20 dark:border-slate-700/20 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F987903e727814500a3234fea1ca42e5a%2Fc87c10551bf74737a0acb97e7d337256?format=webp&width=800"
              alt="FaydaCert Logo"
              className="w-10 h-10 object-contain rounded-full"
            />
            <div>
              <h1 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                FaydaCert
              </h1>
              <p className="text-xs text-slate-600">Certificate Verification</p>
            </div>
          </div>
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
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <Badge
            variant="secondary"
            className="mb-4 bg-blue-100 text-blue-700 border-blue-200"
          >
            Blockchain-Secured Certificate Verification
          </Badge>
          <h1 className="text-5xl font-bold text-slate-900 dark:text-slate-100 mb-6 leading-tight">
            Secure Academic Certificate
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              {" "}
              Verification
            </span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
            A trusted platform connecting students, institutions, employers, and
            verifiers through blockchain-secured certificate authentication with
            Fayda ID integration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/get-started">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
              >
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/demo">
              <Button size="lg" variant="outline">
                Watch Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            Why Choose Fayda?
          </h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Our platform ensures authenticity, security, and instant
            verification for academic credentials
          </p>
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          <Card className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm border-white/40 dark:border-slate-700/40 hover:bg-white/80 dark:hover:bg-slate-800/80 transition-all">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                Instant Verification
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Real-time certificate authentication in seconds
              </p>
            </CardContent>
          </Card>
          <Card className="bg-white/60 backdrop-blur-sm border-white/40 hover:bg-white/80 transition-all">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Lock className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">
                Blockchain Secured
              </h3>
              <p className="text-sm text-slate-600">
                Tamper-proof certificates with cryptographic verification
              </p>
            </CardContent>
          </Card>
          <Card className="bg-white/60 backdrop-blur-sm border-white/40 hover:bg-white/80 transition-all">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Scan className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">
                Fayda ID Integration
              </h3>
              <p className="text-sm text-slate-600">
                Seamless integration with national identity system
              </p>
            </CardContent>
          </Card>
          <Card className="bg-white/60 backdrop-blur-sm border-white/40 hover:bg-white/80 transition-all">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Clock className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">
                Complete Audit Trail
              </h3>
              <p className="text-sm text-slate-600">
                Full transparency with detailed verification history
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* User Types */}
      <section className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            Built for Everyone
          </h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Comprehensive solution serving all stakeholders in the certificate
            verification ecosystem
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="bg-white/70 backdrop-blur-sm border-white/40 hover:shadow-lg transition-all">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <div>
                  <CardTitle className="text-xl">Students</CardTitle>
                  <p className="text-sm text-slate-600">
                    Manage and control your credentials
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  View and manage all certificates
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Control verification permissions
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Track verification history
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Request certificate corrections
                </li>
              </ul>
              <Link to="/student-dashboard" className="mt-4 inline-block">
                <Button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700">
                  Student Portal <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="bg-white/70 backdrop-blur-sm border-white/40 hover:shadow-lg transition-all">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                  <Building2 className="h-6 w-6 text-white" />
                </div>
                <div>
                  <CardTitle className="text-xl">Institutions</CardTitle>
                  <p className="text-sm text-slate-600">
                    Issue and manage certificates
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-500" />
                  Upload and digitally sign certificates
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-500" />
                  Link certificates to Fayda IDs
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-500" />
                  Monitor verification requests
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-500" />
                  Manage institutional credentials
                </li>
              </ul>
              <Link to="/institution-dashboard" className="mt-4 inline-block">
                <Button className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700">
                  Institution Portal <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="bg-white/70 backdrop-blur-sm border-white/40 hover:shadow-lg transition-all">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-600 rounded-xl flex items-center justify-center">
                  <Briefcase className="h-6 w-6 text-white" />
                </div>
                <div>
                  <CardTitle className="text-xl">Employers</CardTitle>
                  <p className="text-sm text-slate-600">
                    Verify candidate credentials
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-purple-500" />
                  Scan Fayda ID for verification
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-purple-500" />
                  Secure OTP authentication
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-purple-500" />
                  View verified credentials
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-purple-500" />
                  Download verification reports
                </li>
              </ul>
              <Link to="/employer-dashboard" className="mt-4 inline-block">
                <Button className="w-full bg-gradient-to-r from-purple-500 to-violet-600 hover:from-purple-600 hover:to-violet-700">
                  Employer Portal <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="bg-white/70 backdrop-blur-sm border-white/40 hover:shadow-lg transition-all">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-600 rounded-xl flex items-center justify-center">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <div>
                  <CardTitle className="text-xl">Platform Admins</CardTitle>
                  <p className="text-sm text-slate-600">
                    Oversee platform operations
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-red-500" />
                  Approve institution registrations
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-red-500" />
                  Monitor platform activity
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-red-500" />
                  Handle dispute resolution
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-red-500" />
                  Generate analytics reports
                </li>
              </ul>
              <Link to="/admin-dashboard" className="mt-4 inline-block">
                <Button className="w-full bg-gradient-to-r from-red-500 to-orange-600 hover:from-red-600 hover:to-orange-700">
                  Admin Portal <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-white/40">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Platform Statistics
            </h2>
            <p className="text-slate-600">
              Trusted by institutions and employers nationwide
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-slate-900">50,000+</div>
              <div className="text-sm text-slate-600">Verified Students</div>
            </div>
            <div>
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Building2 className="h-6 w-6 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-slate-900">200+</div>
              <div className="text-sm text-slate-600">Partner Institutions</div>
            </div>
            <div>
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <FileCheck className="h-6 w-6 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-slate-900">1M+</div>
              <div className="text-sm text-slate-600">
                Certificates Verified
              </div>
            </div>
            <div>
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="h-6 w-6 text-orange-600" />
              </div>
              <div className="text-3xl font-bold text-slate-900">99.9%</div>
              <div className="text-sm text-slate-600">Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-16 text-center">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-blue-100 mb-8 text-lg max-w-2xl mx-auto">
            Join thousands of institutions and students already using Fayda for
            secure certificate verification
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                Register Your Institution
              </Button>
            </Link>
            <Link to="/verify">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white/20 text-white border-white hover:bg-white hover:text-blue-600"
              >
                Verify a Certificate
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white">
        <div className="container mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                  <FileCheck className="h-4 w-4 text-white" />
                </div>
                <span className="font-bold text-lg">Fayda</span>
              </div>
              <p className="text-slate-400 text-sm">
                Secure, blockchain-powered certificate verification for the
                modern world.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Platform</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <Link to="/how-it-works" className="hover:text-white">
                    How it Works
                  </Link>
                </li>
                <li>
                  <Link to="/security" className="hover:text-white">
                    Security
                  </Link>
                </li>
                <li>
                  <Link to="/pricing" className="hover:text-white">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link to="/api" className="hover:text-white">
                    API
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <Link to="/help" className="hover:text-white">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-white">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link to="/status" className="hover:text-white">
                    System Status
                  </Link>
                </li>
                <li>
                  <Link to="/docs" className="hover:text-white">
                    Documentation
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <Link to="/privacy" className="hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="hover:text-white">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link to="/compliance" className="hover:text-white">
                    Compliance
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm text-slate-400">
            © 2025 Fayda Certificate Verification Platform. All rights
            reserved. By Semir-X Projects
          </div>
        </div>
      </footer>
    </div>
  );
}
