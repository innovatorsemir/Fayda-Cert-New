import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
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
  Search
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
      verificationLevel: "pending"
    },
    {
      id: "inst-002", 
      name: "International Tech Academy",
      contactEmail: "registrar@ita.edu",
      registrationDate: "2024-01-12",
      documentsSubmitted: 12,
      status: "approved",
      verificationLevel: "verified"
    },
    {
      id: "inst-003",
      name: "Metropolitan College",
      contactEmail: "admin@metro.edu",
      registrationDate: "2024-01-18",
      documentsSubmitted: 6,
      status: "requires_documents",
      verificationLevel: "incomplete"
    }
  ];

  const fraudAlerts = [
    {
      id: "alert-001",
      type: "multiple_failed_otp",
      description: "Multiple failed OTP attempts from IP 192.168.1.100",
      faydaId: "FYD-2024-999999",
      timestamp: "2024-01-15 14:30",
      severity: "high",
      status: "investigating"
    },
    {
      id: "alert-002",
      type: "suspicious_verification",
      description: "Verification request for non-existent certificate",
      employerId: "EMP-2024-001",
      timestamp: "2024-01-14 09:15",
      severity: "medium", 
      status: "resolved"
    },
    {
      id: "alert-003",
      type: "duplicate_certificate",
      description: "Potential duplicate certificate detected",
      institutionId: "INST-2024-055",
      timestamp: "2024-01-13 16:45",
      severity: "low",
      status: "under_review"
    }
  ];

  const platformStats = {
    totalUsers: 52847,
    totalInstitutions: 234,
    totalEmployers: 892,
    totalCertificates: 1205674,
    monthlyVerifications: 45623,
    activeDisputes: 12,
    systemUptime: 99.97
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-white/20">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                <FileCheck className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900">Fayda</h1>
                <p className="text-xs text-slate-600">Admin Portal</p>
              </div>
            </Link>
            <div className="h-6 w-px bg-slate-300"></div>
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-red-600" />
              <span className="font-medium text-slate-900">Platform Administrator</span>
              <Badge variant="secondary" className="bg-red-100 text-red-700 border-red-200">
                <Shield className="mr-1 h-3 w-3" />
                Admin Access
              </Badge>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" className="relative">
              <Bell className="h-4 w-4" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </Button>
            <Button variant="ghost" size="sm">
              <Settings className="h-4 w-4" />
            </Button>
            <Link to="/login">
              <Button variant="outline" size="sm">
                <LogOut className="mr-2 h-4 w-4" />
                Sign Out
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Platform Administration</h1>
          <p className="text-slate-600">Monitor operations, manage users, and oversee platform security</p>
        </div>

        {/* Platform Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white/70 backdrop-blur-sm border-white/40">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold text-slate-900">{platformStats.totalUsers.toLocaleString()}</p>
                  <p className="text-sm text-slate-600">Total Users</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white/70 backdrop-blur-sm border-white/40">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold text-slate-900">{platformStats.totalInstitutions}</p>
                  <p className="text-sm text-slate-600">Verified Institutions</p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <Building2 className="h-6 w-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white/70 backdrop-blur-sm border-white/40">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold text-slate-900">{platformStats.totalCertificates.toLocaleString()}</p>
                  <p className="text-sm text-slate-600">Total Certificates</p>
                </div>
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <FileCheck className="h-6 w-6 text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white/70 backdrop-blur-sm border-white/40">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold text-slate-900">{platformStats.systemUptime}%</p>
                  <p className="text-sm text-slate-600">System Uptime</p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <Activity className="h-6 w-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Institution Approvals */}
          <div className="lg:col-span-2">
            <Card className="bg-white/70 backdrop-blur-sm border-white/40 mb-8">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-xl">Institution Approval Queue</CardTitle>
                <Badge variant="secondary" className="bg-orange-100 text-orange-700 border-orange-200">
                  {pendingInstitutions.filter(i => i.status === "under_review").length} Pending
                </Badge>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {pendingInstitutions.map((institution) => (
                    <div key={institution.id} className="border border-slate-200 rounded-lg p-4 bg-white/50">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <h3 className="font-semibold text-slate-900 mb-1">{institution.name}</h3>
                          <p className="text-sm text-slate-600 mb-1">{institution.contactEmail}</p>
                          <div className="flex items-center gap-4 text-xs text-slate-500">
                            <span>Registered: {institution.registrationDate}</span>
                            <span>{institution.documentsSubmitted} documents submitted</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge 
                            variant="secondary"
                            className={
                              institution.status === "approved" ? "bg-green-100 text-green-700 border-green-200" :
                              institution.status === "under_review" ? "bg-orange-100 text-orange-700 border-orange-200" :
                              "bg-gray-100 text-gray-700 border-gray-200"
                            }
                          >
                            {institution.status === "approved" ? (
                              <CheckCircle className="mr-1 h-3 w-3" />
                            ) : institution.status === "under_review" ? (
                              <Clock className="mr-1 h-3 w-3" />
                            ) : (
                              <AlertCircle className="mr-1 h-3 w-3" />
                            )}
                            {institution.status.replace("_", " ").charAt(0).toUpperCase() + institution.status.replace("_", " ").slice(1)}
                          </Badge>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button size="sm" variant="outline">
                          <Eye className="mr-2 h-3 w-3" />
                          Review Documents
                        </Button>
                        {institution.status === "under_review" && (
                          <>
                            <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white">
                              <CheckCircle className="mr-2 h-3 w-3" />
                              Approve
                            </Button>
                            <Button size="sm" variant="destructive">
                              <UserX className="mr-2 h-3 w-3" />
                              Reject
                            </Button>
                          </>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Fraud Alerts */}
            <Card className="bg-white/70 backdrop-blur-sm border-white/40">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-xl">Security Alerts</CardTitle>
                <Badge variant="destructive" className="bg-red-100 text-red-700 border-red-200">
                  {fraudAlerts.filter(a => a.status === "investigating").length} Active
                </Badge>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {fraudAlerts.map((alert) => (
                    <div key={alert.id} className="border border-slate-200 rounded-lg p-4 bg-white/50">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <AlertTriangle className={`h-4 w-4 ${
                              alert.severity === "high" ? "text-red-500" :
                              alert.severity === "medium" ? "text-orange-500" :
                              "text-yellow-500"
                            }`} />
                            <span className="font-semibold text-slate-900 capitalize">
                              {alert.type.replace("_", " ")}
                            </span>
                            <Badge 
                              variant="secondary"
                              className={
                                alert.severity === "high" ? "bg-red-100 text-red-700 border-red-200" :
                                alert.severity === "medium" ? "bg-orange-100 text-orange-700 border-orange-200" :
                                "bg-yellow-100 text-yellow-700 border-yellow-200"
                              }
                            >
                              {alert.severity}
                            </Badge>
                          </div>
                          <p className="text-sm text-slate-600 mb-2">{alert.description}</p>
                          <div className="flex items-center gap-4 text-xs text-slate-500">
                            <span>{alert.timestamp}</span>
                            <span className="capitalize">{alert.status.replace("_", " ")}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button size="sm" variant="outline">
                          <Eye className="mr-2 h-3 w-3" />
                          Investigate
                        </Button>
                        {alert.status === "investigating" && (
                          <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                            <CheckCircle className="mr-2 h-3 w-3" />
                            Mark Resolved
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
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <UserCheck className="mr-2 h-4 w-4" />
                    Review Pending Users
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <Building2 className="mr-2 h-4 w-4" />
                    Manage Institutions
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <BarChart3 className="mr-2 h-4 w-4" />
                    Generate Analytics
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <Search className="mr-2 h-4 w-4" />
                    Advanced Search
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start">
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
                    <span className="text-sm text-slate-600">Verifications</span>
                    <span className="font-semibold text-slate-900">{platformStats.monthlyVerifications.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">New Certificates</span>
                    <span className="font-semibold text-slate-900">8,247</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">New Users</span>
                    <span className="font-semibold text-slate-900">1,532</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">Active Disputes</span>
                    <span className="font-semibold text-slate-900">{platformStats.activeDisputes}</span>
                  </div>
                  <div className="pt-2 border-t border-slate-200">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-green-600" />
                      <span className="text-sm text-green-600 font-medium">+15% from last month</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/70 backdrop-blur-sm border-white/40">
              <CardHeader>
                <CardTitle className="text-xl">System Health</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">API Response Time</span>
                    <Badge variant="secondary" className="bg-green-100 text-green-700 border-green-200">
                      <CheckCircle className="mr-1 h-3 w-3" />
                      85ms
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">Database Status</span>
                    <Badge variant="secondary" className="bg-green-100 text-green-700 border-green-200">
                      <CheckCircle className="mr-1 h-3 w-3" />
                      Healthy
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">Blockchain Sync</span>
                    <Badge variant="secondary" className="bg-green-100 text-green-700 border-green-200">
                      <CheckCircle className="mr-1 h-3 w-3" />
                      Synced
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">Security Alerts</span>
                    <Badge variant="secondary" className="bg-orange-100 text-orange-700 border-orange-200">
                      <AlertTriangle className="mr-1 h-3 w-3" />
                      3 Active
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
