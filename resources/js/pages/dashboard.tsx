import React from 'react';
import { Head } from '@inertiajs/react';
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

const summaryData = [
  { label: 'User', value: 42 },
  { label: 'Backup', value: 8 },
  { label: 'Log Aktifitas', value: 157 },
];

const monthlyData = [
  { name: 'Jan', value: 5 },
  { name: 'Feb', value: 12 },
  { name: 'Mar', value: 8 },
  { name: 'Apr', value: 15 },
  { name: 'Mei', value: 9 },
  { name: 'Jun', value: 17 },
];

const pieData = [
  { name: 'Admin', value: 20 },
  { name: 'User', value: 80 },
];

const areaData = [
  { month: 'Jan', data: 400 },
  { month: 'Feb', data: 300 },
  { month: 'Mar', data: 500 },
  { month: 'Apr', data: 700 },
];

const radialData = [
  { name: 'A', value: 100, fill: '#8884d8' },
  { name: 'B', value: 80, fill: '#83a6ed' },
  { name: 'C', value: 50, fill: '#8dd1e1' },
];

const COLORS = ['#0ea5e9', '#14b8a6'];

export default function Dashboard() {
  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Dashboard" />
      <div className="flex flex-col gap-6 p-4">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {summaryData.map((item, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-lg">{item.label}</CardTitle>
              </CardHeader>
              <CardContent className="text-3xl font-bold">{item.value}</CardContent>
            </Card>
          ))}
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Bar Chart */}
          <Card>
            <CardHeader><CardTitle>Bar Chart</CardTitle></CardHeader>
            <CardContent className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={monthlyData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#0ea5e9" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Line Chart */}
          <Card>
            <CardHeader><CardTitle>Line Chart</CardTitle></CardHeader>
            <CardContent className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={monthlyData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="value" stroke="#0ea5e9" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Pie Chart */}
          <Card>
            <CardHeader><CardTitle>Pie Chart</CardTitle></CardHeader>
            <CardContent className="h-[300px] flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={pieData} dataKey="value" nameKey="name" outerRadius={80} fill="#0ea5e9" label>
                    {pieData.map((_, i) => (
                      <Cell key={i} fill={COLORS[i % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Area Chart */}
          <Card>
            <CardHeader><CardTitle>Area Chart</CardTitle></CardHeader>
            <CardContent className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={areaData}>
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Area type="monotone" dataKey="data" stroke="#0ea5e9" fill="#bae6fd" />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Radial Bar Chart */}
          <Card className="md:col-span-2">
            <CardHeader><CardTitle>Radial Bar Chart</CardTitle></CardHeader>
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
