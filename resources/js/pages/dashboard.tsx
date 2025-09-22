import React from 'react';
import { Head, usePage } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  BarChart, Bar, LineChart, Line, PieChart, Pie, Cell,
  XAxis, YAxis, Tooltip, ResponsiveContainer, AreaChart, Area,
  RadialBarChart, RadialBar, Legend
} from 'recharts';

const breadcrumbs: BreadcrumbItem[] = [
  { title: 'Dashboard', href: '/dashboard' },
];

interface DashboardProps {
  summaryData: { label: string; value: number; color: string }[];
  monthlyData: { name: string; Users: number; Backups: number }[];
  pieData: { name: string; value: number; color: string }[];
  areaData: { month: string; users: number; backups: number }[];
  radialData: { name: string; value: number; fill: string }[];
}

// const pieData = [
//   { name: 'Admin', value: 20, color: '#fbbf24' },
//   { name: 'User', value: 80, color: '#a78bfa' },
// ];

const areaData = [
  { month: 'Jan', users: 400, backups: 100 },
  { month: 'Feb', users: 300, backups: 150 },
  { month: 'Mar', users: 500, backups: 200 },
  { month: 'Apr', users: 700, backups: 250 },
];

const radialData = [
  { name: 'A', value: 100, fill: '#8884d8' },
  { name: 'B', value: 80, fill: '#83a6ed' },
  { name: 'C', value: 50, fill: '#8dd1e1' },
];

const COLORS = ['#0ea5e9', '#14b8a6', '#f97316', '#9333ea'];

export default function Dashboard() {
  const { props } = usePage<DashboardProps>();
  const { summaryData, monthlyData, rolePercentData } = props;

  const pieData = Object.entries(rolePercentData.percentages).map(
    ([role, percentage], index) => ({
      name: role,
      value: percentage,
      color: COLORS[index % COLORS.length],
    })
  );

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Dashboard" />
      <div className="flex flex-col gap-6 p-4">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {summaryData.map((item, index) => (
            <Card key={index} className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden">
              <CardHeader className="px-4 py-3">
                <CardTitle className="text-lg font-semibold text-gray-800 dark:text-white">{item.label}</CardTitle>
              </CardHeader>
              <CardContent className="px-4 py-2 text-3xl font-bold text-gray-900 dark:text-gray-100">{item.value}</CardContent>
            </Card>
          ))}
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Bar Chart */}
          <Card className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden">
            <CardHeader className="px-4 py-3">
              <CardTitle className="text-lg font-semibold text-gray-800 dark:text-white">Monthly Activity</CardTitle>
            </CardHeader>
            <CardContent className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={monthlyData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <XAxis dataKey="name" stroke="#6b7280" />
                  <YAxis stroke="#6b7280" />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="Users" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="Backups" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Line Chart */}
          <Card className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden">
            <CardHeader className="px-4 py-3">
              <CardTitle className="text-lg font-semibold text-gray-800 dark:text-white">Monthly Trends</CardTitle>
            </CardHeader>
            <CardContent className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={monthlyData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <XAxis dataKey="name" stroke="#6b7280" />
                  <YAxis stroke="#6b7280" />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="Users" stroke="#22c55e" strokeWidth={2} />
                  <Line type="monotone" dataKey="Backups" stroke="#f43f5e" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Pie Chart */}
          <Card className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden">
            <CardHeader className="px-4 py-3">
              <CardTitle className="text-lg font-semibold text-gray-800 dark:text-white">User Roles</CardTitle>
            </CardHeader>
            <CardContent className="h-[300px] flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    label
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Area Chart */}
          <Card className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden">
            <CardHeader className="px-4 py-3">
              <CardTitle className="text-lg font-semibold text-gray-800 dark:text-white">Resource Usage</CardTitle>
            </CardHeader>
            <CardContent className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={areaData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                  <XAxis dataKey="month" stroke="#6b7280" />
                  <YAxis stroke="#6b7280" />
                  <Tooltip />
                  <Area type="monotone" dataKey="users" stroke="#8884d8" fill="#c6dae7" />
                  <Area type="monotone" dataKey="backups" stroke="#82ca9d" fill="#b7e4c7" />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Radial Bar Chart */}
          <Card className="md:col-span-2 bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden">
            <CardHeader className="px-4 py-3">
              <CardTitle className="text-lg font-semibold text-gray-800 dark:text-white">Performance Metrics</CardTitle>
            </CardHeader>
            <CardContent className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <RadialBarChart
                  innerRadius="30%"
                  outerRadius="80%"
                  data={radialData}
                  startAngle={180}
                  endAngle={0}
                >
                  <RadialBar
                    dataKey="value"
                    cornerRadius={10}
                    label={{ fill: '#fff', position: 'insideStart' }}
                  />
                  <Legend iconSize={10} layout="horizontal" verticalAlign="bottom" align="center" />
                  <Tooltip />
                </RadialBarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </div>
    </AppLayout>
  );
}
