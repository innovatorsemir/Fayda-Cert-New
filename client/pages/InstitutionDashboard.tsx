import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { DashboardHeader } from "@/components/DashboardHeader";
import {
  FileCheck,
  LogOut,
  Upload,
  CheckCircle,
  AlertCircle,
  Clock,
  Users,
  Settings,
  History,
  Shield,
  Bell,
  Building2,
  Calendar,
  Plus,
  Eye,
  TrendingUp,
} from "lucide-react";

export default function InstitutionDashboard() {
  const certificates = [
    {
      id: "cert-001",
      studentName: "Sarah Johnson",
      faydaId: "FYD-2023-001234",
      program: "Bachelor of Science in Computer Science",
      gpa: "3.85",
      issueDate: "2023-06-15",
      status: "signed",
      verificationCount: 5,
    },
    {
      id: "cert-002",
      studentName: "Ahmed Hassan",
      faydaId: "FYD-2023-005678",
      program: "Master of Engineering",
      gpa: "3.92",
      issueDate: "2023-12-10",
      status: "pending_signature",
      verificationCount: 0,
    },
    {
      id: "cert-003",
      studentName: "Maria Rodriguez",
      faydaId: "FYD-2024-001122",
      program: "Bachelor of Arts in Design",
      gpa: "3.78",
      issueDate: "2024-01-20",
      status: "draft",
      verificationCount: 0,
    },
  ];

  const verificationRequests = [
    {
      id: 1,
      requestor: "TechCorp HR Department",
      studentName: "Sarah Johnson",
      certificate: "Bachelor of Science in Computer Science",
      purpose: "Employment verification",
      date: "2024-01-15",
      status: "approved",
    },
    {
      id: 2,
      requestor: "Innovation Labs",
      studentName: "Ahmed Hassan",
      certificate: "Master of Engineering",
      purpose: "Job application",
      date: "2024-01-18",
      status: "pending",
    },
    {
      id: 3,
      requestor: "Graduate School XYZ",
      studentName: "Sarah Johnson",
      certificate: "Bachelor of Science in Computer Science",
      purpose: "Graduate admission",
      date: "2024-01-12",
      status: "approved",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-blue-900 dark:to-indigo-900">
      <DashboardHeader
        userType="institution"
        userName="University of Technology"
        portalName="Institution Portal"
      />

      <div className="container mx-auto px-4 md:px-6 py-8">
        {/* Welcome Section */}
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">
              Institution Dashboard
            </h1>
            <p className="text-slate-600 dark:text-slate-300">
              Manage certificates and monitor verification requests
            </p>
          </div>
          <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 w-full sm:w-auto">
            <Plus className="mr-2 h-4 w-4" />
            Issue New Certificate
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8">
          <Card className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-white/40 dark:border-slate-700/40">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                    {certificates.length}
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Total Certificates
                  </p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <FileCheck className="h-6 w-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-white/40 dark:border-slate-700/40">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                    {certificates.filter((c) => c.status === "signed").length}
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Digitally Signed</p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-white/40 dark:border-slate-700/40">
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
                  <TrendingUp className="h-6 w-6 text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-white/40 dark:border-slate-700/40">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold text-slate-900">
                    {
                      verificationRequests.filter((r) => r.status === "pending")
                        .length
                    }
                  </p>
                  <p className="text-sm text-slate-600">Pending Requests</p>
                </div>
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                  <Clock className="h-6 w-6 text-orange-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
          {/* Certificate Management */}
          <div className="lg:col-span-2">
            <Card className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-white/40 dark:border-slate-700/40">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-xl">
                  Certificate Management
                </CardTitle>
                <Button variant="outline" size="sm">
                  <Upload className="mr-2 h-4 w-4" />
                  Bulk Upload
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
                            {cert.studentName}
                          </h3>
                          <p className="text-sm text-slate-600 mb-1">
                            {cert.program}
                          </p>
                          <p className="text-xs text-slate-500 mb-2">
                            Fayda ID: {cert.faydaId}
                          </p>
                          <div className="flex items-center gap-4 text-xs text-slate-500">
                            <span className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              Issued: {cert.issueDate}
                            </span>
                            <span>GPA: {cert.gpa}</span>
                            <span>{cert.verificationCount} verifications</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge
                            variant="secondary"
                            className={
                              cert.status === "signed"
                                ? "bg-green-100 text-green-700 border-green-200"
                                : cert.status === "pending_signature"
                                  ? "bg-orange-100 text-orange-700 border-orange-200"
                                  : "bg-gray-100 text-gray-700 border-gray-200"
                            }
                          >
                            {cert.status === "signed" ? (
                              <CheckCircle className="mr-1 h-3 w-3" />
                            ) : cert.status === "pending_signature" ? (
                              <Clock className="mr-1 h-3 w-3" />
                            ) : (
                              <AlertCircle className="mr-1 h-3 w-3" />
                            )}
                            {cert.status
                              .replace("_", " ")
                              .charAt(0)
                              .toUpperCase() +
                              cert.status.replace("_", " ").slice(1)}
                          </Badge>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button size="sm" variant="outline">
                          <Eye className="mr-2 h-3 w-3" />
                          View Details
                        </Button>
                        {cert.status === "draft" && (
                          <Button size="sm" variant="outline">
                            <Upload className="mr-2 h-3 w-3" />
                            Upload
                          </Button>
                        )}
                        {cert.status === "pending_signature" && (
                          <Button
                            size="sm"
                            className="bg-blue-600 hover:bg-blue-700 text-white"
                          >
                            <Shield className="mr-2 h-3 w-3" />
                            Sign Certificate
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Verification Requests */}
          <div>
            <Card className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-white/40 dark:border-slate-700/40">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-xl">Verification Requests</CardTitle>
                <Button variant="ghost" size="sm">
                  <History className="h-4 w-4" />
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {verificationRequests.map((request) => (
                    <div
                      key={request.id}
                      className="border-l-2 border-blue-200 pl-4 pb-4"
                    >
                      <div className="flex items-start justify-between mb-1">
                        <p className="text-sm font-medium text-slate-900">
                          {request.requestor}
                        </p>
                        <Badge
                          variant="secondary"
                          className={
                            request.status === "approved"
                              ? "bg-green-100 text-green-700 border-green-200"
                              : "bg-orange-100 text-orange-700 border-orange-200"
                          }
                        >
                          {request.status}
                        </Badge>
                      </div>
                      <p className="text-xs text-slate-600 mb-1">
                        {request.studentName}
                      </p>
                      <p className="text-xs text-slate-500 mb-1">
                        {request.certificate}
                      </p>
                      <p className="text-xs text-slate-500">
                        {request.purpose} • {request.date}
                      </p>
                    </div>
                  ))}
                </div>
                <Button variant="outline" size="sm" className="w-full mt-4">
                  View All Requests
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
                    <Plus className="mr-2 h-4 w-4" />
                    Create New Certificate
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full justify-start"
                  >
                    <Users className="mr-2 h-4 w-4" />
                    Link Student Fayda ID
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full justify-start"
                  >
                    <Shield className="mr-2 h-4 w-4" />
                    Digital Signing Tool
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full justify-start"
                  >
                    <TrendingUp className="mr-2 h-4 w-4" />
                    View Analytics
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
