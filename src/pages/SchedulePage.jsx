import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  CheckCircle,
  Activity,
  Zap,
  ArrowLeft,
  Video,
  Users,
  TrendingUp,
} from "lucide-react";
import {
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
  CartesianGrid,
} from "recharts";

const SchedulePage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [activeScheduling, setActiveScheduling] = useState(true);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    } else {
      navigate("/login");
    }
  }, [navigate]);

  if (!user) return null;

  const scheduledMeetings = [
    { title: "1:1 with Mentor", time: "Today, 2:00 PM", type: "Mentorship" },
    {
      title: "Code Review Session",
      time: "Tomorrow, 10:00 AM",
      type: "Review",
    },
    { title: "Team Standup", time: "Mon, 9:00 AM", type: "Meeting" },
    { title: "Training Workshop", time: "Wed, 3:00 PM", type: "Learning" },
  ];

  const dailyTasks = [
    { task: "Complete initial project setup", completed: true },
    { task: "Review onboarding documentation", completed: true },
    { task: "Set up development environment", completed: true },
    { task: "Schedule 1:1 with mentor", completed: false },
    { task: "Complete security training module", completed: false },
    { task: "Join team Slack channels", completed: false },
  ];

  // Weekly Activity Data
  const weeklyActivityData = [
    { day: "Mon", meetings: 3, tasks: 8, hours: 7 },
    { day: "Tue", meetings: 2, tasks: 6, hours: 8 },
    { day: "Wed", meetings: 4, tasks: 5, hours: 6 },
    { day: "Thu", meetings: 1, tasks: 9, hours: 8 },
    { day: "Fri", meetings: 3, tasks: 7, hours: 7 },
  ];

  // Time Distribution Data
  const timeDistributionData = [
    { name: "Meetings", value: 30, color: "#fb923c" },
    { name: "Coding", value: 45, color: "#60a5fa" },
    { name: "Learning", value: 15, color: "#34d399" },
    { name: "Breaks", value: 10, color: "#a78bfa" },
  ];

  const upcomingEvents = [
    {
      title: "Project Kickoff Meeting",
      date: "Nov 25, 2025",
      time: "11:00 AM - 12:00 PM",
      attendees: 8,
      type: "project",
    },
    {
      title: "Technical Skills Workshop",
      date: "Nov 27, 2025",
      time: "2:00 PM - 4:00 PM",
      attendees: 15,
      type: "training",
    },
    {
      title: "Monthly All-Hands",
      date: "Nov 30, 2025",
      time: "10:00 AM - 11:00 AM",
      attendees: 60,
      type: "company",
    },
  ];

  return (
    <div className="min-h-screen bg-dark p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link
            to="/employee-dashboard"
            className="inline-flex items-center text-primary hover:text-orange-400 transition-colors mb-4"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Dashboard
          </Link>
          <h1 className="text-4xl font-bold mb-2">
            My <span className="gradient-text">Schedule</span>
          </h1>
          <p className="text-gray-400">
            Manage your calendar and track daily tasks
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Smart Calendar */}
          <motion.div
            className="glass-card p-8 border border-cyan-900/30 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-semibold flex items-center">
                <Calendar className="w-6 h-6 mr-3 text-cyan-400" />
                Smart Calendar
              </h3>
              <div className="flex items-center space-x-3">
                <span className="text-sm text-gray-400">
                  {activeScheduling ? "Active" : "Manual"}
                </span>
                <button
                  onClick={() => setActiveScheduling(!activeScheduling)}
                  className={`relative w-14 h-7 rounded-full transition-all duration-300 ${
                    activeScheduling
                      ? "bg-gradient-to-r from-primary to-orange-600"
                      : "bg-gray-600"
                  }`}
                >
                  <div
                    className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform duration-300 shadow-lg ${
                      activeScheduling ? "translate-x-7" : ""
                    }`}
                  ></div>
                </button>
              </div>
            </div>
            <div className="space-y-4">
              {scheduledMeetings.map((meeting, i) => (
                <motion.div
                  key={i}
                  className="flex items-start justify-between p-4 bg-gray-900/50 rounded-lg hover:bg-gray-800/50 transition-colors border border-gray-800 hover:border-cyan-500/30"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="mt-1 p-2 bg-cyan-500/20 rounded-lg">
                      <Clock className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-white font-medium text-lg">
                        {meeting.title}
                      </p>
                      <p className="text-sm text-gray-400 mt-1">
                        {meeting.time}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs px-3 py-1 bg-primary/20 text-primary rounded-full border border-primary/30">
                    {meeting.type}
                  </span>
                </motion.div>
              ))}
              <div className="pt-4 border-t border-gray-700">
                <div className="flex items-center justify-between p-4 bg-green-950/30 rounded-lg border border-green-900/50">
                  <div className="flex items-center text-green-400">
                    <CheckCircle className="w-5 h-5 mr-3" />
                    <span className="font-medium">
                      On track - No delays detected
                    </span>
                  </div>
                  <Zap className="w-5 h-5 text-yellow-400" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Daily Tasks */}
          <motion.div
            className="glass-card p-8 border border-pink-900/30 hover:border-pink-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/20"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <CheckCircle className="w-6 h-6 mr-3 text-pink-400" />
              Daily Tasks
            </h3>
            <div className="space-y-3">
              {dailyTasks.map((item, i) => (
                <motion.div
                  key={i}
                  className={`flex items-center justify-between p-4 rounded-lg transition-all duration-300 ${
                    item.completed
                      ? "bg-green-500/10 border border-green-500/30 hover:border-green-500/50"
                      : "bg-gray-900/50 border border-gray-700 hover:border-gray-600"
                  }`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  <div className="flex items-center space-x-4">
                    {item.completed ? (
                      <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                    ) : (
                      <div className="w-6 h-6 border-2 border-gray-600 rounded-full flex-shrink-0"></div>
                    )}
                    <span
                      className={`text-base ${
                        item.completed
                          ? "text-gray-400 line-through"
                          : "text-white"
                      }`}
                    >
                      {item.task}
                    </span>
                  </div>
                </motion.div>
              ))}
              <div className="pt-4 border-t border-gray-700">
                <div className="flex items-center justify-between text-base">
                  <span className="text-gray-400">
                    Completed: {dailyTasks.filter((t) => t.completed).length}/
                    {dailyTasks.length}
                  </span>
                  <div className="flex items-center space-x-2">
                    <Activity className="w-5 h-5 text-pink-400" />
                    <span className="text-primary font-semibold">
                      {Math.round(
                        (dailyTasks.filter((t) => t.completed).length /
                          dailyTasks.length) *
                          100
                      )}
                      %
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Weekly Activity Chart */}
        <motion.div
          className="mt-8 glass-card p-8 border border-blue-900/30 hover:border-blue-500/50 transition-all duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-2xl font-semibold mb-6 flex items-center">
            <TrendingUp className="w-6 h-6 mr-3 text-blue-400" />
            Weekly Activity Overview
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={weeklyActivityData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="day" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#1F2937",
                  border: "1px solid #374151",
                  borderRadius: "8px",
                }}
              />
              <Legend />
              <Bar
                dataKey="meetings"
                fill="#fb923c"
                name="Meetings"
                radius={[8, 8, 0, 0]}
              />
              <Bar
                dataKey="tasks"
                fill="#60a5fa"
                name="Tasks Completed"
                radius={[8, 8, 0, 0]}
              />
              <Bar
                dataKey="hours"
                fill="#34d399"
                name="Work Hours"
                radius={[8, 8, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Time Distribution */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          <motion.div
            className="glass-card p-8 border border-purple-900/30 hover:border-purple-500/50 transition-all duration-300"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <Activity className="w-6 h-6 mr-3 text-purple-400" />
              Time Distribution
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={timeDistributionData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) =>
                    `${name} ${(percent * 100).toFixed(0)}%`
                  }
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {timeDistributionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1F2937",
                    border: "1px solid #374151",
                    borderRadius: "8px",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </motion.div>

          <motion.div
            className="glass-card p-8 border border-emerald-900/30 hover:border-emerald-500/50 transition-all duration-300"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <Zap className="w-6 h-6 mr-3 text-emerald-400" />
              Productivity Insights
            </h3>
            <div className="space-y-6">
              <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400">Average Daily Tasks</span>
                  <span className="text-2xl font-bold text-white">7.2</span>
                </div>
                <div className="w-full bg-dark-lighter rounded-full h-2 mt-3">
                  <div
                    className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full h-2"
                    style={{ width: "72%" }}
                  ></div>
                </div>
              </div>
              <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400">Meeting Efficiency</span>
                  <span className="text-2xl font-bold text-white">85%</span>
                </div>
                <div className="w-full bg-dark-lighter rounded-full h-2 mt-3">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full h-2"
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </div>
              <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400">Focus Time</span>
                  <span className="text-2xl font-bold text-white">92%</span>
                </div>
                <div className="w-full bg-dark-lighter rounded-full h-2 mt-3">
                  <div
                    className="bg-gradient-to-r from-primary to-orange-600 rounded-full h-2"
                    style={{ width: "92%" }}
                  ></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Upcoming Events */}
        <motion.div
          className="mt-8 glass-card p-8 border border-yellow-900/30 hover:border-yellow-500/50 transition-all duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h3 className="text-2xl font-semibold mb-6 flex items-center">
            <Video className="w-6 h-6 mr-3 text-yellow-400" />
            Upcoming Events
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                className="bg-gray-900/50 p-6 rounded-lg hover:bg-gray-800/50 transition-all border border-gray-800 hover:border-purple-500/30 hover:scale-105 duration-300"
              >
                <div
                  className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 ${
                    event.type === "project"
                      ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                      : event.type === "training"
                      ? "bg-green-500/20 text-green-400 border border-green-500/30"
                      : "bg-purple-500/20 text-purple-400 border border-purple-500/30"
                  }`}
                >
                  {event.type.toUpperCase()}
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  {event.title}
                </h4>
                <div className="space-y-2 text-sm text-gray-400">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {event.date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    {event.time}
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2" />
                    {event.attendees} attendees
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SchedulePage;
