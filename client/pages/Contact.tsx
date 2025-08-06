import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  ArrowLeft, 
  FileCheck, 
  Mail, 
  Phone, 
  Github, 
  Linkedin, 
  MessageCircle,
  MapPin,
  Clock,
  Send
} from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-white/20">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img 
              src="https://cdn.builder.io/api/v1/image/assets%2F987903e727814500a3234fea1ca42e5a%2Fc87c10551bf74737a0acb97e7d337256?format=webp&width=800"
              alt="FaydaCert Logo"
              className="w-10 h-10 object-contain rounded-full"
            />
            <div>
              <h1 className="text-xl font-bold text-slate-900">FaydaCert</h1>
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

      {/* Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Get in Touch</h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Have questions about FaydaCert? Need support or want to discuss a partnership? 
              We'd love to hear from you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div>
              <Card className="bg-white/70 backdrop-blur-sm border-white/40 mb-6">
                <CardHeader>
                  <CardTitle className="text-2xl text-slate-900 flex items-center gap-2">
                    <Mail className="h-6 w-6 text-blue-600" />
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Email */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      <Mail className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">Email</h3>
                      <a 
                        href="mailto:semir.nesredin.1238@gmail.com"
                        className="text-blue-600 hover:underline"
                      >
                        semir.nesredin.1238@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                      <Phone className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">Phone</h3>
                      <a 
                        href="tel:+251993848707"
                        className="text-green-600 hover:underline"
                      >
                        +251 993 848 707
                      </a>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">Location</h3>
                      <p className="text-slate-600">Ethiopia</p>
                    </div>
                  </div>

                  {/* Response Time */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                      <Clock className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">Response Time</h3>
                      <p className="text-slate-600">Within 24 hours</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media Links */}
              <Card className="bg-white/70 backdrop-blur-sm border-white/40">
                <CardHeader>
                  <CardTitle className="text-2xl text-slate-900 flex items-center gap-2">
                    <Send className="h-6 w-6 text-indigo-600" />
                    Connect with Us
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    {/* GitHub */}
                    <a
                      href="https://github.com/innovatorsemir"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-4 bg-slate-900 rounded-xl hover:bg-slate-800 transition-colors group"
                    >
                      <Github className="h-6 w-6 text-white" />
                      <div className="text-white">
                        <p className="font-semibold">GitHub</p>
                        <p className="text-sm text-slate-300">@innovatorsemir</p>
                      </div>
                    </a>

                    {/* LinkedIn */}
                    <a
                      href="https://linkedin.com/in/innovatorsemir"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-4 bg-blue-600 rounded-xl hover:bg-blue-700 transition-colors group"
                    >
                      <Linkedin className="h-6 w-6 text-white" />
                      <div className="text-white">
                        <p className="font-semibold">LinkedIn</p>
                        <p className="text-sm text-blue-100">@innovatorsemir</p>
                      </div>
                    </a>

                    {/* Telegram */}
                    <a
                      href="https://t.me/innovatorsemir"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-4 bg-blue-500 rounded-xl hover:bg-blue-600 transition-colors group col-span-2"
                    >
                      <MessageCircle className="h-6 w-6 text-white" />
                      <div className="text-white">
                        <p className="font-semibold">Telegram</p>
                        <p className="text-sm text-blue-100">@innovatorsemir</p>
                      </div>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* About Section */}
            <div>
              <Card className="bg-white/70 backdrop-blur-sm border-white/40">
                <CardHeader>
                  <CardTitle className="text-2xl text-slate-900">About FaydaCert</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-600">
                    FaydaCert is a cutting-edge certificate verification platform that leverages 
                    blockchain technology to ensure the authenticity and security of academic credentials.
                  </p>
                  <p className="text-slate-600">
                    Built by <span className="font-semibold text-slate-900">Semir-X Projects</span>, 
                    our platform serves students, institutions, employers, and administrators with 
                    a comprehensive solution for certificate management and verification.
                  </p>
                  
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                    <h3 className="font-semibold text-slate-900 mb-2">Why Choose FaydaCert?</h3>
                    <ul className="space-y-1 text-sm text-slate-600">
                      <li>• Blockchain-secured certificate verification</li>
                      <li>• Seamless Fayda ID integration</li>
                      <li>• Real-time authentication in seconds</li>
                      <li>• Complete audit trail and transparency</li>
                      <li>• Multi-stakeholder ecosystem support</li>
                    </ul>
                  </div>

                  <div className="pt-4 space-y-3">
                    <h3 className="font-semibold text-slate-900">Ready to Get Started?</h3>
                    <div className="space-y-2">
                      <Link to="/login" className="block">
                        <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                          Access Your Dashboard
                        </Button>
                      </Link>
                      <Link to="/register" className="block">
                        <Button variant="outline" className="w-full">
                          Register Your Institution
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Additional Support Section */}
          <div className="mt-12">
            <Card className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
              <CardContent className="p-8 text-center">
                <h2 className="text-2xl font-bold mb-4">Need Technical Support?</h2>
                <p className="mb-6 text-blue-100">
                  Our technical team is available to help with platform integration, 
                  API documentation, and any technical questions you might have.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="mailto:semir.nesredin.1238@gmail.com?subject=Technical Support Request">
                    <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                      <Mail className="mr-2 h-4 w-4" />
                      Email Support
                    </Button>
                  </a>
                  <a href="tel:+251993848707">
                    <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                      <Phone className="mr-2 h-4 w-4" />
                      Call Support
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
