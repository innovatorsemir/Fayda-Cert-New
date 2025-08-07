import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { useState } from "react";
import { DashboardHeader } from "@/components/DashboardHeader";
import {
  FileCheck,
  LogOut,
  Scan,
  CheckCircle,
  AlertCircle,
  Clock,
  Download,
  Settings,
  History,
  Shield,
  Bell,
  Briefcase,
  Search,
  Eye,
  FileText,
  QrCode,
  Hash,
  Lock,
} from "lucide-react";

export default function EmployerDashboard() {
  const [faydaId, setFaydaId] = useState("");
  const [otpCode, setOtpCode] = useState("");
  const [verificationStep, setVerificationStep] = useState<
    "input" | "otp" | "result"
  >("input");

  const verificationHistory = [
    {
      id: "ver-001",
      candidateName: "Sarah Johnson",
      faydaId: "FYD-2023-001234",
      certificate: "Bachelor of Science in Computer Science",
      institution: "University of Technology",
      verificationDate: "2024-01-15",
      purpose: "Employment verification",
      status: "verified",
      blockchainHash:
        "0x7d865e959b2466918c9863afca942d0fb89d7c9ac0c99bafc3749504ded97730",
    },
    {
      id: "ver-002",
      candidateName: "Ahmed Hassan",
      faydaId: "FYD-2023-005678",
      certificate: "Master of Engineering",
      institution: "Tech Institute",
      verificationDate: "2024-01-12",
      purpose: "Job application review",
      status: "verified",
      blockchainHash:
        "0x2a865e959b2466918c9863afca942d0fb89d7c9ac0c99bafc3749504ded97730",
    },
    {
      id: "ver-003",
      candidateName: "Maria Rodriguez",
      faydaId: "FYD-2024-001122",
      certificate: "Bachelor of Arts in Design",
      institution: "Design Academy",
      verificationDate: "2024-01-10",
      purpose: "Contract position verification",
      status: "pending_consent",
      blockchainHash: null,
    },
  ];

  const handleVerification = (e: React.FormEvent) => {
    e.preventDefault();
    if (verificationStep === "input") {
      setVerificationStep("otp");
    } else if (verificationStep === "otp") {
      setVerificationStep("result");
    }
  };

  const resetVerification = () => {
    setVerificationStep("input");
    setFaydaId("");
    setOtpCode("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-blue-900 dark:to-indigo-900">
      <DashboardHeader
        userType="employer"
        userName="TechCorp Industries"
        portalName="Employer Portal"
      />

      <div className="container mx-auto px-4 md:px-6 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">
            Employer Dashboard
          </h1>
          <p className="text-slate-600 dark:text-slate-300">
            Verify candidate credentials securely and instantly
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8">
          <Card className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-white/40 dark:border-slate-700/40">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                    {verificationHistory.length}
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Total Verifications
                  </p>
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
                  <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                    {
                      verificationHistory.filter((v) => v.status === "verified")
                        .length
                    }
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Verified</p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-white/40 dark:border-slate-700/40">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                    {
                      verificationHistory.filter(
                        (v) => v.status === "pending_consent",
                      ).length
                    }
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Pending Consent</p>
                </div>
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                  <Clock className="h-6 w-6 text-orange-600" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-white/40 dark:border-slate-700/40">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">98.5%</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Success Rate</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
          {/* Certificate Verification Tool */}
          <div className="lg:col-span-2">
            <Card className="bg-white/70 backdrop-blur-sm border-white/40 mb-8">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <Scan className="h-5 w-5" />
                  Certificate Verification
                </CardTitle>
              </CardHeader>
              <CardContent>
                {verificationStep === "input" && (
                  <form onSubmit={handleVerification} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="faydaId">Fayda ID</Label>
                      <div className="flex gap-2">
                        <Input
                          id="faydaId"
                          placeholder="Enter Fayda ID (e.g., FYD-2023-001234)"
                          value={faydaId}
                          onChange={(e) => setFaydaId(e.target.value)}
                          className="flex-1"
                          required
                        />
                        <Button type="button" variant="outline">
                          <QrCode className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="purpose">Verification Purpose</Label>
                      <Input
                        id="purpose"
                        placeholder="Employment verification, background check, etc."
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700"
                    >
                      <Search className="mr-2 h-4 w-4" />
                      Request Verification
                    </Button>
                  </form>
                )}

                {verificationStep === "otp" && (
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto">
                      <Shield className="h-8 w-8 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">
                        OTP Verification Required
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
                        We've sent an OTP to your registered phone number ending
                        in ****67
                      </p>
                    </div>
                    <form onSubmit={handleVerification} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="otp">Enter OTP Code</Label>
                        <Input
                          id="otp"
                          placeholder="Enter 6-digit OTP"
                          value={otpCode}
                          onChange={(e) => setOtpCode(e.target.value)}
                          maxLength={6}
                          className="text-center text-lg tracking-widest"
                          required
                        />
                      </div>
                      <div className="flex gap-2">
                        <Button
                          type="button"
                          variant="outline"
                          onClick={resetVerification}
                          className="flex-1"
                        >
                          Cancel
                        </Button>
                        <Button
                          type="submit"
                          className="flex-1 bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700"
                        >
                          Verify OTP
                        </Button>
                      </div>
                    </form>
                  </div>
                )}

                {verificationStep === "result" && (
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="h-8 w-8 text-green-600" />
                      </div>
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">
                        Certificate Verified Successfully
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-300">
                        Student has granted consent for this verification
                      </p>
                    </div>

                    <div className="bg-white/60 dark:bg-slate-800/60 rounded-lg p-4 space-y-3">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-slate-500">Student Name:</span>
                          <p className="font-medium">Sarah Johnson</p>
                        </div>
                        <div>
                          <span className="text-slate-500">Fayda ID:</span>
                          <p className="font-medium">FYD-2023-001234</p>
                        </div>
                        <div>
                          <span className="text-slate-500">Certificate:</span>
                          <p className="font-medium">
                            Bachelor of Science in Computer Science
                          </p>
                        </div>
                        <div>
                          <span className="text-slate-500">Institution:</span>
                          <p className="font-medium">
                            University of Technology
                          </p>
                        </div>
                        <div>
                          <span className="text-slate-500">Issue Date:</span>
                          <p className="font-medium">June 15, 2023</p>
                        </div>
                        <div>
                          <span className="text-slate-500">GPA:</span>
                          <p className="font-medium">3.85/4.0</p>
                        </div>
                      </div>
                      <div className="pt-2 border-t border-slate-200">
                        <span className="text-slate-500 text-sm">
                          Blockchain Hash:
                        </span>
                        <p className="font-mono text-xs text-slate-700 break-all flex items-center gap-2">
                          <Hash className="h-3 w-3" />
                          0x7d865e959b2466918c9863afca942d0fb89d7c9ac0c99bafc3749504ded97730
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        onClick={resetVerification}
                        className="flex-1"
                      >
                        New Verification
                      </Button>
                      <Button className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                        <Download className="mr-2 h-4 w-4" />
                        Download Report
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Verification History */}
            <Card className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-white/40 dark:border-slate-700/40">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-xl">Verification History</CardTitle>
                <Button variant="outline" size="sm">
                  <Download className="mr-2 h-4 w-4" />
                  Export History
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {verificationHistory.map((verification) => (
                    <div
                      key={verification.id}
                      className="border border-slate-200 rounded-lg p-4 bg-white/50"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <h3 className="font-semibold text-slate-900 mb-1">
                            {verification.candidateName}
                          </h3>
                          <p className="text-sm text-slate-600 mb-1">
                            {verification.certificate}
                          </p>
                          <p className="text-xs text-slate-500 mb-2">
                            {verification.institution}
                          </p>
                          <div className="flex items-center gap-4 text-xs text-slate-500">
                            <span>
                              Verified: {verification.verificationDate}
                            </span>
                            <span>Purpose: {verification.purpose}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge
                            variant="secondary"
                            className={
                              verification.status === "verified"
                                ? "bg-green-100 text-green-700 border-green-200"
                                : "bg-orange-100 text-orange-700 border-orange-200"
                            }
                          >
                            {verification.status === "verified" ? (
                              <CheckCircle className="mr-1 h-3 w-3" />
                            ) : (
                              <Clock className="mr-1 h-3 w-3" />
                            )}
                            {verification.status
                              .replace("_", " ")
                              .charAt(0)
                              .toUpperCase() +
                              verification.status.replace("_", " ").slice(1)}
                          </Badge>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button size="sm" variant="outline">
                          <Eye className="mr-2 h-3 w-3" />
                          View Details
                        </Button>
                        <Button size="sm" variant="outline">
                          <Download className="mr-2 h-3 w-3" />
                          Download Report
                        </Button>
                        {verification.blockchainHash && (
                          <Button size="sm" variant="outline">
                            <Hash className="mr-2 h-3 w-3" />
                            Verify Hash
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions & Info */}
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
                    <Scan className="mr-2 h-4 w-4" />
                    Quick Scan QR Code
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full justify-start"
                  >
                    <Search className="mr-2 h-4 w-4" />
                    Bulk Verification
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full justify-start"
                  >
                    <FileText className="mr-2 h-4 w-4" />
                    Generate Report
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full justify-start"
                  >
                    <Settings className="mr-2 h-4 w-4" />
                    Verification Settings
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-white/40 dark:border-slate-700/40">
              <CardHeader>
                <CardTitle className="text-xl">Security Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-sm">
                  <div className="flex items-start gap-3">
                    <Shield className="h-4 w-4 text-green-600 mt-0.5" />
                    <div>
                      <p className="font-medium text-slate-900">
                        Blockchain Verified
                      </p>
                      <p className="text-xs text-slate-600">
                        All certificates are cryptographically secured
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Lock className="h-4 w-4 text-blue-600 mt-0.5" />
                    <div>
                      <p className="font-medium text-slate-900">
                        OTP Authentication
                      </p>
                      <p className="text-xs text-slate-600">
                        Two-factor verification for secure access
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-purple-600 mt-0.5" />
                    <div>
                      <p className="font-medium text-slate-900">
                        Student Consent
                      </p>
                      <p className="text-xs text-slate-600">
                        Access only with explicit student permission
                      </p>
                    </div>
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
