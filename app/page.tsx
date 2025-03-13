"use client";

import { BarChart, Users, Calendar, Building2, Settings, HelpCircle, Menu } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Men", value: 6 },
  { name: "Women", value: 10 },
];
const dataEmployees = [
  { name: "Men", value: 120 },
  { name: "Women", value: 96 },
];

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div  className={`fixed left-0 top-0 h-full w-64 bg-white border-r border-gray-200 p-6 transition-transform duration-300 z-50
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}>
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-2">
            <Users className="h-8 w-8 text-red-500" />
            <h1 className="text-2xl font-bold">WeHR</h1>
          </div>
          {/* Close Button for Mobile */}
          <button
            className="md:hidden text-gray-600"
            onClick={() => setSidebarOpen(false)}
          >
            ✖
          </button>
        </div>
        
        <div className="space-y-6">
          <div>
            <p className="text-xs text-gray-400 mb-4 uppercase">Main Menu</p>
            <nav className="space-y-1">
              {[
                { name: "Dashboard", icon: BarChart, active: true },
                { name: "Recruitment", icon: Users },
                { name: "Schedule", icon: Calendar },
                { name: "Employee", icon: Users },
                { name: "Department", icon: Building2 },
              ].map((item) => (
                <button
                  key={item.name}
                  className={`flex items-center gap-3 w-full px-4 py-2 rounded-lg text-left ${
                    item.active
                      ? "bg-red-50 text-red-500"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  <item.icon className="h-5 w-5" />
                  {item.name}
                </button>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-xs text-gray-400 mb-4 uppercase">Other</p>
            <nav className="space-y-1">
              {[
                { name: "Support", icon: HelpCircle },
                { name: "Settings", icon: Settings },
              ].map((item) => (
                <button
                  key={item.name}
                  className="flex items-center gap-3 w-full px-4 py-2 rounded-lg text-left text-gray-600 hover:bg-gray-50"
                >
                  <item.icon className="h-5 w-5" />
                  {item.name}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 md:ml-64 p-4 md:p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-600"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>

          
            <h1 className="text-2xl font-bold mb-1">Dashboard</h1>
          
          <div className="flex items-center gap-4 md:gap-6">
             {/* Search Bar */}
            <div className="relative hidden sm:block">
              <input
                type="text"
                placeholder="Search..."
                className="w-40 sm:w-64 pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <svg
                className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <button className="relative p-2 text-gray-400 hover:text-gray-600">
              <svg
                className="h-5 w-5 sm:h-6 sm:w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="flex items-center gap-3">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="Profile"
                 className="h-8 w-8 sm:h-10 sm:w-10 rounded-full"
              />
              <div>
                <p className="text-sm md:font-medium">Admira John</p>
                <p className="hidden sm:block text-sm text-gray-500">HR Manager</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-8 lg:grid-cols-12 gap-6">
           {/* Main Cards Section */}
           <div className="col-span-1 md:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
             <Card className="p-6 bg-red-50/30">
               <div className="flex justify-between items-start">
                 <div>
                   <p className="text-lg font-medium mb-1">Available Position</p>
                   <h3 className="text-3xl font-bold">24</h3>
                   <p className="text-sm text-red-500">4 Urgently needed</p>
                 </div>
               </div>
             </Card>
             <Card className="p-6 bg-blue-50/30">
               <div className="flex justify-between items-start">
                 <div>
                   <p className="text-lg font-medium mb-1">Job Open</p>
                   <h3 className="text-3xl font-bold">10</h3>
                   <p className="text-sm text-blue-500">4 Active hiring</p>
                 </div>
               </div>
             </Card>
             <Card className="p-6 bg-purple-50/30">
               <div className="flex justify-between items-start">
                 <div>
                   <p className="text-lg font-medium mb-1">New Employees</p>
                   <h3 className="text-3xl font-bold">24</h3>
                   <p className="text-sm text-purple-500">4 Department</p>
                 </div>
               </div>
             </Card>
           </div>
         
           {/* Recent Activity Card */}
           <Card className="hidden sm:block col-span-1 sm:col-span-6 md:col-span-4 row-span-2 bg-[#14183E] text-white p-6">
             <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-semibold">Recently Activity</h2>
               <p className="text-xs text-gray-400">10:45 AM, 12 Sept 2021</p>
             </div>
             <div className="mb-6">
               <h3 className="text-lg font-medium mb-2">You Posted a New Job</h3>
               <p className="text-sm text-gray-400">
                 Kindly check the requirements and terms of work and make sure everything is right.
               </p>
             </div>
             <div className="flex justify-between items-center">
               <p className="text-sm text-gray-400">Today you made 12 Activities</p>
               <Button
                  variant="outline"
                  className="bg-red-500 text-white hover:bg-red-600 border-red-500 hover:border-red-600"
                >
                 See All Activity
               </Button>

             </div>
           </Card>

           {/* Stats with Graphs */}
           <Card className="col-span-1 sm:col-span-6 md:col-span-4 p-6">
             <div className="flex justify-between items-start mb-4">
               <div>
                 <h3 className="text-lg font-medium">Total Employees</h3>
                 <div className="flex items-baseline gap-2">
                   <p className="text-3xl font-bold">216</p>
                   <span className="text-sm text-green-500">+2% Past month</span>
                 </div>
                 <div className="mt-2 text-sm text-gray-500">
                   <p>120 Men</p>
                   <p>96 Women</p>
                 </div>
               </div>

               <div className="h-32 w-48 bg-red-50 rounded-lg overflow-hidden">
                 <ResponsiveContainer width="100%" height="100%">
                   <LineChart data={dataEmployees}>
                     <Tooltip />
                     <Line type="monotone" dataKey="value" stroke="#DC2626" strokeWidth={2} dot={false} />
                   </LineChart>
                 </ResponsiveContainer>
               </div>
             </div>
           </Card>
         
           <Card className="col-span-1 sm:col-span-6 md:col-span-4 p-6">
             <div className="flex justify-between items-start mb-4">
               <div>
                 <h3 className="text-lg font-medium">Talent Request</h3>
                 <div className="flex items-baseline gap-2">
                   <p className="text-3xl font-bold">16</p>
                   <span className="text-sm text-green-500">+5% Past month</span>
                 </div>
                 <div className="mt-2 text-sm text-gray-500">
                   <p>6 Men</p>
                   <p>10 Women</p>
                 </div>
               </div>
       
               <div className="h-32 w-48 bg-blue-50 rounded-lg overflow-hidden">
                 <ResponsiveContainer width="100%" height="100%">
                   <LineChart data={data}>
                     <XAxis dataKey="name" hide />
                     <YAxis hide />
                     <Tooltip />
                     <Line type="monotone" dataKey="value" stroke="#2563EB" strokeWidth={2} dot={false} />
                   </LineChart>
                 </ResponsiveContainer>
               </div>
             </div>
           </Card>          
    </div>


{/* Bottom Grid */}
<div className="grid grid-cols-1 md:grid-cols-8 lg:grid-cols-12 gap-6 mt-6">
  {/* Announcements */}
  <Card className="col-span-1 md:col-span-8 p-6">
    <div className="flex justify-between items-center mb-6">
      <div className="flex items-center justify-between w-full">
        <h2 className="text-xl font-bold">Announcement</h2>
        <div className="flex items-center gap-2">
          <p className="hidden sm:block text-sm text-gray-500">Today, 13 Sep 2021</p>
          <Button variant="outline">See All</Button>
        </div>
      </div>
    </div>
    <ScrollArea className="h-[300px]">
      <div className="space-y-4">
        {[
          { title: "Outing schedule for every department", time: "1 Month ago" },
          { title: "Meeting HR Department", time: "Yesterday, 12:30 PM" },
          { title: "IT Department needs two more talents for UX/UI Designer position", time: "Yesterday, 09:15 AM" },
        ].map((item, index) => (
          <div key={index} className="flex items-start gap-4 p-4 rounded-lg border border-gray-100">
            <div className="flex-1">
              <h3 className="font-medium mb-1">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.time}</p>
            </div>
            <button className="text-gray-400 hover:text-gray-600">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </ScrollArea>
  </Card>

  <Card className="block sm:hidden col-span-1 sm:col-span-6 md:col-span-4 row-span-2 bg-[#14183E] text-white p-6">
             <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-semibold">Recently Activity</h2>
               <p className="text-xs text-gray-400">10:45 AM, 12 Sept 2021</p>
             </div>
             <div className="mb-6">
               <h3 className="text-lg font-medium mb-2">You Posted a New Job</h3>
               <p className="text-sm text-gray-400">
                 Kindly check the requirements and terms of work and make sure everything is right.
               </p>
             </div>
             <div className="flex justify-between items-center">
               <p className="text-sm text-gray-400">Today you made 12 Activities</p>
               <Button  variant="outline"
                  className="bg-red-500 text-white hover:bg-red-600 border-red-500 hover:border-red-600">
                 See All Activity
               </Button>
             </div>
           </Card>

  {/* Upcoming Schedule */}
  <Card className="col-span-1 md:col-span-8 lg:col-span-4 p-6">
    <div className="flex justify-between items-center mb-6">
      <div className="flex items-center justify-between w-full">
        <h2 className="text-xl font-bold">Upcoming Schedule</h2>
        <div className="flex items-center gap-2">
          <p className="hidden sm:text-sm text-gray-500">Today, 13 Sep 2021</p>
          <Button variant="outline">Create New</Button>
        </div>
      </div>
    </div>
    <ScrollArea className="h-[300px]">
      <div className="space-y-4">
        {[
          { title: "Review candidate applications", time: "Today, 11:30 AM", priority: "High" },
          { title: "Interview with candidates", time: "Today, 09:30 AM", priority: "Medium" },
          { title: "Short meeting with product designer from IT Department", time: "Today, 09:15 AM", priority: "Low" },
        ].map((item, index) => (
          <div key={index} className="flex items-start gap-4 p-4 rounded-lg border border-gray-100">
            <div className="flex-1">
              <h3 className="font-medium mb-1">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.time}</p>
            </div>
            <button className="text-gray-400 hover:text-gray-600">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </ScrollArea>
  </Card>
</div>

      </div>
    </div>
  );
}