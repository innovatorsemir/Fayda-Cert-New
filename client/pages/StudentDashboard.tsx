import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { DashboardHeader } from "@/components/DashboardHeader";
import {
  FileCheck,
  LogOut,
  Eye,
  CheckCircle,
  AlertCircle,
  Clock,
  Download,
  Settings,
  History,
  Shield,
  Bell,
  GraduationCap,
  Calendar,
} from "lucide-react";

export default function StudentDashboard() {
  const certificates = [
    {
      id: "cert-001",
      title: "Bachelor of Science in Computer Science",
      institution: "University of Technology",
      date: "2023-06-15",
      status: "verified",
      verificationCount: 5,
      lastAccessed: "2024-01-15",
    },
    {
      id: "cert-002",
      title: "Advanced Web Development Certificate",
      institution: "Tech Institute",
      date: "2023-12-10",
      status: "pending",
      verificationCount: 2,
      lastAccessed: "2024-01-10",
    },
    {
      id: "cert-003",
      title: "Data Science Specialization",
      institution: "Data Academy",
      date: "2024-01-20",
      status: "verified",
      verificationCount: 1,
      lastAccessed: "2024-01-18",
    },
  ];

  const recentActivity = [
    {
      id: 1,
      action: "Certificate viewed",
      entity: "TechCorp HR Department",
      certificate: "Bachelor of Science in Computer Science",
      date: "2024-01-15",
      type: "view",
    },
    {
      id: 2,
      action: "Verification request",
      entity: "Innovation Labs",
      certificate: "Data Science Specialization",
      date: "2024-01-18",
      type: "request",
    },
    {
      id: 3,
      action: "Certificate updated",
      entity: "University of Technology",
      certificate: "Bachelor of Science in Computer Science",
      date: "2024-01-12",
      type: "update",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-blue-900 dark:to-indigo-900">
      <DashboardHeader
        userType="student"
        userName="Sarah Johnson"
        portalName="Student Portal"
      />

      <div className="container mx-auto px-6 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">
            Welcome back, Sarah!
          </h1>
          <p className="text-slate-600 dark:text-slate-300">
            Manage your certificates and track verification requests
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8">
          <Card className="bg-white/70 backdrop-blur-sm border-white/40">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold text-slate-900">
                    {certificates.length}
                  </p>
                  <p className="text-sm text-slate-600">Total Certificates</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <FileCheck className="h-6 w-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white/70 backdrop-blur-sm border-white/40">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold text-slate-900">
                    {certificates.filter((c) => c.status === "verified").length}
                  </p>
                  <p className="text-sm text-slate-600">Verified</p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white/70 backdrop-blur-sm border-white/40">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold text-slate-900">
                    {certificates.reduce(
                      (sum, cert) => sum + cert.verificationCount,
                      0,
                    )}
                  </p>
                  <p className="text-sm text-slate-600">Total Verifications</p>
                </div>
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <Eye className="h-6 w-6 text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white/70 backdrop-blur-sm border-white/40">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold text-slate-900">
                    {certificates.filter((c) => c.status === "pending").length}
                  </p>
                  <p className="text-sm text-slate-600">Pending</p>
                </div>
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                  <Clock className="h-6 w-6 text-orange-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {/* My Certificates */}
          <div className="lg:col-span-2 w-full min-w-0">
            <Card className="bg-white/70 backdrop-blur-sm border-white/40">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-xl">My Certificates</CardTitle>
                <Button variant="outline" size="sm">
                  <Download className="mr-2 h-4 w-4" />
                  Export All
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {certificates.map((cert) => (
                    <div
                      key={cert.id}
                      className="border border-slate-200 rounded-lg p-4 bg-white/50"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <h3 className="font-semibold text-slate-900 mb-1">
                            {cert.title}
                          </h3>
                          <p className="text-sm text-slate-600 mb-2">
                            {cert.institution}
                          </p>
                          <div className="flex items-center gap-4 text-xs text-slate-500">
                            <span className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              Issued: {cert.date}
                            </span>
                            <span>Verified {cert.verificationCount} times</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge
                            variant={
                              cert.status === "verified"
                                ? "default"
                                : "secondary"
                            }
                            className={
                              cert.status === "verified"
                                ? "bg-green-100 text-green-700 border-green-200"
                                : ""
                            }
                          >
                            {cert.status === "verified" ? (
                              <CheckCircle className="mr-1 h-3 w-3" />
                            ) : (
                              <Clock className="mr-1 h-3 w-3" />
                            )}
                            {cert.status.charAt(0).toUpperCase() +
                              cert.status.slice(1)}
                          </Badge>
                        </div>
                      </div>
                      <div className="flex flex-wrap items-center gap-2">
                        <Button size="sm" variant="outline" className="flex-1 min-w-fit">
                          <Eye className="mr-1 h-3 w-3" />
                          <span className="hidden sm:inline">View Details</span>
                          <span className="sm:hidden">View</span>
                        </Button>
                        <Button size="sm" variant="outline" className="flex-1 min-w-fit">
                          <Shield className="mr-1 h-3 w-3" />
                          <span className="hidden sm:inline">Privacy Settings</span>
                          <span className="sm:hidden">Privacy</span>
                        </Button>
                        <Button size="sm" variant="outline" className="flex-1 min-w-fit">
                          <Download className="mr-1 h-3 w-3" />
                          <span className="hidden sm:inline">Download</span>
                          <span className="sm:hidden">Download</span>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Activity */}
          <div>
            <Card className="bg-white/70 backdrop-blur-sm border-white/40">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-xl">Recent Activity</CardTitle>
                <Button variant="ghost" size="sm">
                  <History className="h-4 w-4" />
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity) => (
                    <div
                      key={activity.id}
                      className="border-l-2 border-blue-200 pl-4 pb-4"
                    >
                      <div className="flex items-start justify-between mb-1">
                        <p className="text-sm font-medium text-slate-900">
                          {activity.action}
                        </p>
                        <span className="text-xs text-slate-500">
                          {activity.date}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 mb-1">
                        {activity.entity}
                      </p>
                      <p className="text-xs text-slate-500">
                        {activity.certificate}
                      </p>
                    </div>
                  ))}
                </div>
                <Button variant="outline" size="sm" className="w-full mt-4">
                  View Full History
                </Button>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="bg-white/70 backdrop-blur-sm border-white/40 mt-6">
              <CardHeader>
                <CardTitle className="text-xl">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full justify-start"
                  >
                    <Shield className="mr-2 h-4 w-4" />
                    Update Privacy Settings
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full justify-start"
                  >
                    <AlertCircle className="mr-2 h-4 w-4" />
                    Report Certificate Error
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full justify-start"
                  >
                    <Settings className="mr-2 h-4 w-4" />
                    Update Contact Info
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full justify-start"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download Verification Report
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
