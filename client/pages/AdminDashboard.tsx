import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { DashboardHeader } from "@/components/DashboardHeader";
import {
  FileCheck,
  LogOut,
  Users,
  CheckCircle,
  AlertTriangle,
  Clock,
  TrendingUp,
  Settings,
  History,
  Shield,
  Bell,
  Building2,
  UserCheck,
  Activity,
  BarChart3,
  AlertCircle,
  Eye,
  UserX,
  FileX,
  Search,
} from "lucide-react";

export default function AdminDashboard() {
  const pendingInstitutions = [
    {
      id: "inst-001",
      name: "Global Business Institute",
      contactEmail: "admin@gbi.edu",
      registrationDate: "2024-01-15",
      documentsSubmitted: 8,
      status: "under_review",
      verificationLevel: "pending",
    },
    {
      id: "inst-002",
      name: "International Tech Academy",
      contactEmail: "registrar@ita.edu",
      registrationDate: "2024-01-12",
      documentsSubmitted: 12,
      status: "approved",
      verificationLevel: "verified",
    },
    {
      id: "inst-003",
      name: "Metropolitan College",
      contactEmail: "admin@metro.edu",
      registrationDate: "2024-01-18",
      documentsSubmitted: 6,
      status: "requires_documents",
      verificationLevel: "incomplete",
    },
  ];

  const fraudAlerts = [
    {
      id: "alert-001",
      type: "multiple_failed_otp",
      description: "Multiple failed OTP attempts from IP 192.168.1.100",
      faydaId: "FYD-2024-999999",
      timestamp: "2024-01-15 14:30",
      severity: "high",
      status: "investigating",
    },
    {
      id: "alert-002",
      type: "suspicious_verification",
      description: "Verification request for non-existent certificate",
      employerId: "EMP-2024-001",
      timestamp: "2024-01-14 09:15",
      severity: "medium",
      status: "resolved",
    },
    {
      id: "alert-003",
      type: "duplicate_certificate",
      description: "Potential duplicate certificate detected",
      institutionId: "INST-2024-055",
      timestamp: "2024-01-13 16:45",
      severity: "low",
      status: "under_review",
    },
  ];

  const platformStats = {
    totalUsers: 52847,
    totalInstitutions: 234,
    totalEmployers: 892,
    totalCertificates: 1205674,
    monthlyVerifications: 45623,
    activeDisputes: 12,
    systemUptime: 99.97,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-blue-900 dark:to-indigo-900">
      <DashboardHeader
        userType="admin"
        userName="Platform Administrator"
        portalName="Admin Portal"
      />

      <div className="container mx-auto px-4 md:px-6 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">
            Platform Administration
          </h1>
          <p className="text-slate-600 dark:text-slate-300">
            Monitor operations, manage users, and oversee platform security
          </p>
        </div>

        {/* Platform Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8">
          <Card className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-white/40 dark:border-slate-700/40">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                    {platformStats.totalUsers.toLocaleString()}
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Total Users
                  </p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-white/40 dark:border-slate-700/40">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                    {platformStats.totalInstitutions}
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Verified Institutions
                  </p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <Building2 className="h-6 w-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-white/40 dark:border-slate-700/40">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold text-slate-900">
                    {platformStats.totalCertificates.toLocaleString()}
                  </p>
                  <p className="text-sm text-slate-600">Total Certificates</p>
                </div>
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <FileCheck className="h-6 w-6 text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-white/40 dark:border-slate-700/40">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold text-slate-900">
                    {platformStats.systemUptime}%
                  </p>
                  <p className="text-sm text-slate-600">System Uptime</p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <Activity className="h-6 w-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Institution Approvals */}
          <div className="lg:col-span-2 w-full min-w-0">
            <Card className="bg-white/70 backdrop-blur-sm border-white/40 mb-8">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-xl">
                  Institution Approval Queue
                </CardTitle>
                <Badge
                  variant="secondary"
                  className="bg-orange-100 text-orange-700 border-orange-200"
                >
                  {
                    pendingInstitutions.filter(
                      (i) => i.status === "under_review",
                    ).length
                  }{" "}
                  Pending
                </Badge>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {pendingInstitutions.map((institution) => (
                    <div
                      key={institution.id}
                      className="border border-slate-200 dark:border-slate-700 rounded-lg p-4 bg-white/50 dark:bg-slate-800/50"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <h3 className="font-semibold text-slate-900 mb-1">
                            {institution.name}
                          </h3>
                          <p className="text-sm text-slate-600 mb-1">
                            {institution.contactEmail}
                          </p>
                          <div className="flex items-center gap-4 text-xs text-slate-500">
                            <span>
                              Registered: {institution.registrationDate}
                            </span>
                            <span>
                              {institution.documentsSubmitted} documents
                              submitted
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge
                            variant="secondary"
                            className={
                              institution.status === "approved"
                                ? "bg-green-100 text-green-700 border-green-200"
                                : institution.status === "under_review"
                                  ? "bg-orange-100 text-orange-700 border-orange-200"
                                  : "bg-gray-100 text-gray-700 border-gray-200"
                            }
                          >
                            {institution.status === "approved" ? (
                              <CheckCircle className="mr-1 h-3 w-3" />
                            ) : institution.status === "under_review" ? (
                              <Clock className="mr-1 h-3 w-3" />
                            ) : (
                              <AlertCircle className="mr-1 h-3 w-3" />
                            )}
                            {institution.status
                              .replace("_", " ")
                              .charAt(0)
                              .toUpperCase() +
                              institution.status.replace("_", " ").slice(1)}
                          </Badge>
                        </div>
                      </div>
                      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                        <Button size="sm" variant="outline" className="w-full sm:w-auto">
                          <Eye className="mr-2 h-3 w-3" />
                          Review Documents
                        </Button>
                        {institution.status === "under_review" && (
                          <div className="flex gap-2 w-full sm:w-auto">
                            <Button
                              size="sm"
                              className="bg-green-600 hover:bg-green-700 text-white flex-1 sm:flex-none"
                            >
                              <CheckCircle className="mr-1 h-3 w-3" />
                              <span className="hidden sm:inline">Approve</span>
                              <span className="sm:hidden">✓</span>
                            </Button>
                            <Button size="sm" variant="destructive" className="flex-1 sm:flex-none">
                              <UserX className="mr-1 h-3 w-3" />
                              <span className="hidden sm:inline">Reject</span>
                              <span className="sm:hidden">✗</span>
                            </Button>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Fraud Alerts */}
            <Card className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-white/40 dark:border-slate-700/40">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-xl">Security Alerts</CardTitle>
                <Badge
                  variant="destructive"
                  className="bg-red-100 text-red-700 border-red-200"
                >
                  {
                    fraudAlerts.filter((a) => a.status === "investigating")
                      .length
                  }{" "}
                  Active
                </Badge>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {fraudAlerts.map((alert) => (
                    <div
                      key={alert.id}
                      className="border border-slate-200 dark:border-slate-700 rounded-lg p-4 bg-white/50 dark:bg-slate-800/50"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <AlertTriangle
                              className={`h-4 w-4 ${
                                alert.severity === "high"
                                  ? "text-red-500"
                                  : alert.severity === "medium"
                                    ? "text-orange-500"
                                    : "text-yellow-500"
                              }`}
                            />
                            <span className="font-semibold text-slate-900 capitalize">
                              {alert.type.replace("_", " ")}
                            </span>
                            <Badge
                              variant="secondary"
                              className={
                                alert.severity === "high"
                                  ? "bg-red-100 text-red-700 border-red-200"
                                  : alert.severity === "medium"
                                    ? "bg-orange-100 text-orange-700 border-orange-200"
                                    : "bg-yellow-100 text-yellow-700 border-yellow-200"
                              }
                            >
                              {alert.severity}
                            </Badge>
                          </div>
                          <p className="text-sm text-slate-600 mb-2">
                            {alert.description}
                          </p>
                          <div className="flex items-center gap-4 text-xs text-slate-500">
                            <span>{alert.timestamp}</span>
                            <span className="capitalize">
                              {alert.status.replace("_", " ")}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                        <Button size="sm" variant="outline" className="w-full sm:w-auto">
                          <Eye className="mr-2 h-3 w-3" />
                          Investigate
                        </Button>
                        {alert.status === "investigating" && (
                          <Button
                            size="sm"
                            className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto"
                          >
                            <CheckCircle className="mr-2 h-3 w-3" />
                            <span className="hidden sm:inline">Mark Resolved</span>
                            <span className="sm:hidden">Resolve</span>
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions & Analytics */}
          <div>
            <Card className="bg-white/70 backdrop-blur-sm border-white/40 mb-6">
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
                    <UserCheck className="mr-2 h-4 w-4" />
                    Review Pending Users
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full justify-start"
                  >
                    <Building2 className="mr-2 h-4 w-4" />
                    Manage Institutions
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full justify-start"
                  >
                    <BarChart3 className="mr-2 h-4 w-4" />
                    Generate Analytics
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full justify-start"
                  >
                    <Search className="mr-2 h-4 w-4" />
                    Advanced Search
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full justify-start"
                  >
                    <Settings className="mr-2 h-4 w-4" />
                    Platform Settings
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/70 backdrop-blur-sm border-white/40 mb-6">
              <CardHeader>
                <CardTitle className="text-xl">Monthly Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">
                      Verifications
                    </span>
                    <span className="font-semibold text-slate-900">
                      {platformStats.monthlyVerifications.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">
                      New Certificates
                    </span>
                    <span className="font-semibold text-slate-900">8,247</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">New Users</span>
                    <span className="font-semibold text-slate-900">1,532</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">
                      Active Disputes
                    </span>
                    <span className="font-semibold text-slate-900">
                      {platformStats.activeDisputes}
                    </span>
                  </div>
                  <div className="pt-2 border-t border-slate-200">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-green-600" />
                      <span className="text-sm text-green-600 font-medium">
                        +15% from last month
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-white/40 dark:border-slate-700/40">
              <CardHeader>
                <CardTitle className="text-xl">System Health</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">
                      API Response Time
                    </span>
                    <Badge
                      variant="secondary"
                      className="bg-green-100 text-green-700 border-green-200"
                    >
                      <CheckCircle className="mr-1 h-3 w-3" />
                      85ms
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">
                      Database Status
                    </span>
                    <Badge
                      variant="secondary"
                      className="bg-green-100 text-green-700 border-green-200"
                    >
                      <CheckCircle className="mr-1 h-3 w-3" />
                      Healthy
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">
                      Blockchain Sync
                    </span>
                    <Badge
                      variant="secondary"
                      className="bg-green-100 text-green-700 border-green-200"
                    >
                      <CheckCircle className="mr-1 h-3 w-3" />
                      Synced
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">
                      Security Alerts
                    </span>
                    <Badge
                      variant="secondary"
                      className="bg-orange-100 text-orange-700 border-orange-200"
                    >
                      <AlertTriangle className="mr-1 h-3 w-3" />3 Active
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
