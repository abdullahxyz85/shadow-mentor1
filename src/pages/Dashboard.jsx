import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Users,
  TrendingUp,
  Calendar,
  Award,
  AlertCircle,
  CheckCircle,
  Clock,
  ArrowRight,
  Menu,
  X,
  Settings,
  LogOut,
  Home,
  BarChart3,
  UserPlus,
} from "lucide-react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const onboardingData = [
    { name: "Week 1", completed: 45, pending: 15 },
    { name: "Week 2", completed: 55, pending: 10 },
    { name: "Week 3", completed: 70, pending: 8 },
    { name: "Week 4", completed: 85, pending: 5 },
  ];

  const roleDistribution = [
    { name: "Software Engineer", value: 25, color: "#3B82F6" },
    { name: "Data Scientist", value: 15, color: "#8B5CF6" },
    { name: "HR Manager", value: 8, color: "#F59E0B" },
    { name: "DevOps", value: 12, color: "#10B981" },
  ];

  const recentEmployees = [
    {
      id: 1,
      name: "Karim Boujida",
      role: "Software Engineer",
      level: "Senior",
      status: "On Track",
      progress: 85,
      hireDate: "2024-11-01",
    },
    {
      id: 2,
      name: "Emma Johnson",
      role: "Data Scientist",
      level: "Junior",
      status: "Needs Attention",
      progress: 45,
      hireDate: "2024-11-05",
    },
    {
      id: 3,
      name: "Santiago Lopez",
      role: "HR Manager",
      level: "Senior",
      status: "On Track",
      progress: 90,
      hireDate: "2024-10-28",
    },
    {
      id: 4,
      name: "Ananya Gupta",
      role: "DevOps Engineer",
      level: "Junior",
      status: "On Track",
      progress: 70,
      hireDate: "2024-11-10",
    },
  ];

  const integrationGaps = [
    {
      employee: "Emma Johnson",
      issue: "No 1:1 with manager in 10 days",
      priority: "High",
      action: "Meeting scheduled",
    },
    {
      employee: "Rohan Singh",
      issue: "401k not configured",
      priority: "Medium",
      action: "Slack reminder sent",
    },
    {
      employee: "Diana Vargas",
      issue: "Code repository not accessed",
      priority: "High",
      action: "Setup guide sent",
    },
  ];

  const stats = [
    {
      title: "Active Employees",
      value: "60",
      change: "+8 this month",
      icon: <Users className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      trend: "up",
    },
    {
      title: "Avg. Integration Time",
      value: "10 Days",
      change: "-2 days from last month",
      icon: <Clock className="w-8 h-8" />,
      color: "from-primary to-orange-600",
      trend: "down",
    },
    {
      title: "Success Rate",
      value: "95%",
      change: "+5% improvement",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      trend: "up",
    },
    {
      title: "Gaps Detected",
      value: "12",
      change: "3 resolved today",
      icon: <AlertCircle className="w-8 h-8" />,
      color: "from-red-500 to-rose-500",
      trend: "neutral",
    },
  ];

  const sidebarItems = [
    {
      icon: <Home className="w-5 h-5" />,
      label: "Dashboard",
      active: true,
      path: "/dashboard",
    },
    {
      icon: <Users className="w-5 h-5" />,
      label: "Employees",
      active: false,
      path: "/employees",
    },
    {
      icon: <BarChart3 className="w-5 h-5" />,
      label: "Analytics",
      active: false,
      path: "/analytics",
    },
    {
      icon: <Calendar className="w-5 h-5" />,
      label: "Schedule",
      active: false,
      path: "/schedule",
    },
    {
      icon: <Award className="w-5 h-5" />,
      label: "Certifications",
      active: false,
      path: "/certifications",
    },
    {
      icon: <Settings className="w-5 h-5" />,
      label: "Settings",
      active: false,
      path: "/dashboard",
    },
  ];

  return (
    <div className="min-h-screen bg-dark flex">
      {/* Sidebar */}
      <motion.aside
        className={`fixed lg:static inset-y-0 left-0 z-50 glass-card border-r border-white/10 transition-all duration-300 ${
          sidebarOpen ? "w-64" : "w-20"
        }`}
        initial={{ x: -100 }}
        animate={{ x: 0 }}
      >
        <div className="flex flex-col h-full p-4">
          {/* Logo */}
          <div className="flex items-center justify-between mb-8">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-orange-600 rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-black" />
              </div>
              {sidebarOpen && (
                <span className="text-xl font-bold">ShadowMentor</span>
              )}
            </Link>
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden text-gray-400 hover:text-white"
            >
              {sidebarOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-2">
            {sidebarItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${
                  item.active
                    ? "bg-primary text-black font-semibold"
                    : "text-gray-400 hover:bg-dark-tertiary hover:text-white"
                }`}
              >
                {item.icon}
                {sidebarOpen && <span>{item.label}</span>}
              </Link>
            ))}
          </nav>

          {/* User Profile */}
          <div className="border-t border-white/10 pt-4 mt-4">
            <div className="flex items-center space-x-3 px-4 py-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <span className="text-sm font-bold">HR</span>
              </div>
              {sidebarOpen && (
                <div className="flex-1">
                  <div className="text-sm font-semibold">HR Admin</div>
                  <div className="text-xs text-gray-400">admin@company.com</div>
                </div>
              )}
            </div>
            {sidebarOpen && (
              <Link
                to="/"
                className="flex items-center space-x-3 px-4 py-3 text-gray-400 hover:text-white transition"
              >
                <LogOut className="w-5 h-5" />
                <span>Back to Home</span>
              </Link>
            )}
          </div>
        </div>
      </motion.aside>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <header className="glass-card border-b border-white/10 sticky top-0 z-40">
          <div className="px-8 py-6">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-3xl font-bold mb-2">Dashboard Overview</h1>
                <p className="text-gray-400">
                  Monitor your team's onboarding progress in real-time
                </p>
              </div>
              <button className="btn-primary flex items-center space-x-2">
                <UserPlus className="w-5 h-5" />
                <span>Add Employee</span>
              </button>
            </div>
          </div>
        </header>

        <div className="p-8 space-y-8">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="glass-card p-6 hover:border-primary/50 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`w-14 h-14 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center`}
                  >
                    {stat.icon}
                  </div>
                  <span
                    className={`text-xs font-semibold px-2 py-1 rounded-full ${
                      stat.trend === "up"
                        ? "bg-green-500/20 text-green-500"
                        : stat.trend === "down"
                        ? "bg-red-500/20 text-red-500"
                        : "bg-gray-500/20 text-gray-400"
                    }`}
                  >
                    {stat.change}
                  </span>
                </div>
                <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
                <p className="text-gray-400 text-sm">{stat.title}</p>
              </motion.div>
            ))}
          </div>

          {/* Charts Row */}
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Onboarding Progress */}
            <motion.div
              className="glass-card p-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-xl font-bold mb-6 flex items-center">
                <TrendingUp className="w-6 h-6 mr-2 text-primary" />
                Onboarding Progress
              </h2>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={onboardingData}>
                  <XAxis dataKey="name" stroke="#666" />
                  <YAxis stroke="#666" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#1A1A1A",
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: "8px",
                    }}
                  />
                  <Legend />
                  <Bar
                    dataKey="completed"
                    fill="#10B981"
                    radius={[8, 8, 0, 0]}
                  />
                  <Bar dataKey="pending" fill="#F59E0B" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </motion.div>

            {/* Role Distribution */}
            <motion.div
              className="glass-card p-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-xl font-bold mb-6 flex items-center">
                <Users className="w-6 h-6 mr-2 text-primary" />
                Role Distribution
              </h2>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={roleDistribution}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) =>
                      `${name} ${(percent * 100).toFixed(0)}%`
                    }
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {roleDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#1A1A1A",
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: "8px",
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </motion.div>
          </div>

          {/* Integration Gaps Alert */}
          <motion.div
            className="glass-card p-6 border-l-4 border-red-500"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-xl font-bold mb-4 flex items-center text-red-500">
              <AlertCircle className="w-6 h-6 mr-2" />
              Integration Gaps Detected
            </h2>
            <div className="space-y-3">
              {integrationGaps.map((gap, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-dark-tertiary rounded-xl"
                >
                  <div className="flex-1">
                    <div className="font-semibold">{gap.employee}</div>
                    <div className="text-sm text-gray-400">{gap.issue}</div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        gap.priority === "High"
                          ? "bg-red-500/20 text-red-500"
                          : "bg-yellow-500/20 text-yellow-500"
                      }`}
                    >
                      {gap.priority}
                    </span>
                    <span className="text-sm text-green-500 flex items-center">
                      <CheckCircle className="w-4 h-4 mr-1" />
                      {gap.action}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Recent Employees */}
          <motion.div
            className="glass-card p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold flex items-center">
                <Users className="w-6 h-6 mr-2 text-primary" />
                Recent New Hires
              </h2>
              <button className="text-primary hover:text-primary-dark transition flex items-center">
                View All <ArrowRight className="w-4 h-4 ml-1" />
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-3 px-4 text-gray-400 font-semibold">
                      Name
                    </th>
                    <th className="text-left py-3 px-4 text-gray-400 font-semibold">
                      Role
                    </th>
                    <th className="text-left py-3 px-4 text-gray-400 font-semibold">
                      Level
                    </th>
                    <th className="text-left py-3 px-4 text-gray-400 font-semibold">
                      Hire Date
                    </th>
                    <th className="text-left py-3 px-4 text-gray-400 font-semibold">
                      Progress
                    </th>
                    <th className="text-left py-3 px-4 text-gray-400 font-semibold">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {recentEmployees.map((employee) => (
                    <tr
                      key={employee.id}
                      className="border-b border-white/5 hover:bg-dark-tertiary/50 transition"
                    >
                      <td className="py-4 px-4 font-semibold">
                        {employee.name}
                      </td>
                      <td className="py-4 px-4 text-gray-400">
                        {employee.role}
                      </td>
                      <td className="py-4 px-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            employee.level === "Senior"
                              ? "bg-purple-500/20 text-purple-500"
                              : "bg-blue-500/20 text-blue-500"
                          }`}
                        >
                          {employee.level}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-gray-400">
                        {employee.hireDate}
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center space-x-2">
                          <div className="flex-1 bg-dark-tertiary rounded-full h-2">
                            <div
                              className="bg-gradient-to-r from-primary to-orange-600 h-2 rounded-full transition-all duration-500"
                              style={{ width: `${employee.progress}%` }}
                            ></div>
                          </div>
                          <span className="text-sm font-semibold">
                            {employee.progress}%
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            employee.status === "On Track"
                              ? "bg-green-500/20 text-green-500"
                              : "bg-red-500/20 text-red-500"
                          }`}
                        >
                          {employee.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
