"use client"

import React from "react"
import { Bell, ChevronDown, Search, Users } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function HRDashboard() {
  const navItems = ["Dashboard", "Employees", "Jobs", "Candidates", "Leave"]

  return (
    <div className="min-h-screen bg-[#fbfbfb] text-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-4 bg-[#b4bbbb]">
        <div className="flex items-center space-x-8">
          <span className="text-2xl font-bold text-orange-400">MAGIX</span>
          {navItems.map((item, index) => (
            <span key={index} className={`${index === 0 ? "text-orange-400" : "text-gray-400"}`}>
              {item}
            </span>
          ))}
        </div>
        <div className="flex items-center space-x-4">
          <Search className="text-gray-400" />
          <Bell className="text-gray-400" />
          <Avatar>
            <AvatarImage src="/placeholder-avatar.jpg" />
            <AvatarFallback>AN</AvatarFallback>
          </Avatar>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center text-gray-400">
              Andrew Neel <ChevronDown className="ml-1" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>

      {/* Main Content */}
      <main className="p-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <p className="text-gray-400">Hello Andrew,</p>
            <h1 className="text-3xl font-bold">Good Morning</h1>
          </div>
          <Button className="bg-orange-400 hover:bg-orange-500">+ Add Employee</Button>
        </div>

        {/* Metrics Cards */}
        <div className="grid grid-cols-5 gap-4 mb-6">
          {[
            { title: "Total Employees", value: "200", total: "200", color: "bg-purple-400" },
            { title: "On Leave", value: "12", total: "200", color: "bg-orange-300" },
            { title: "New Joiner", value: "15", total: "200", color: "bg-teal-400" },
            { title: "Happiness Rate", value: "80%", color: "bg-orange-400" },
          ].map((metric, index) => (
            <Card key={index} className="bg-[#243435]">
              <CardHeader className="pb-2">
                <div className={`w-8 h-8 rounded-full ${metric.color} flex items-center justify-center mb-2`}>
                  <Users className="w-4 h-4 text-white" />
                </div>
                <CardTitle className="text-sm font-normal text-gray-400">{metric.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">
                  {metric.value}
                  {metric.total && <span className="text-sm text-gray-400">/{metric.total}</span>}
                </p>
              </CardContent>
            </Card>
          ))}
          <Card className="bg-[#243435]">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-normal text-gray-400">Project Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between mb-2">
                <span className="text-2xl font-bold">200</span>
                <span className="text-sm text-gray-400">+28%</span>
              </div>
              <Progress value={70} className="h-2 bg-gray-700" indicatorClassName="bg-purple-400" />
            </CardContent>
          </Card>
        </div>

        {/* Charts and Tables */}
        <div className="grid grid-cols-3 gap-6">
          {/* Attendance Overview */}
          <Card className="col-span-2 bg-[#243435]">
            <CardHeader>
              <CardTitle>Attendance Overview</CardTitle>
            </CardHeader>
            <CardContent>
              {/* Placeholder for chart */}
              <div className="h-64 bg-[#1c2a2b] rounded-lg"></div>
            </CardContent>
          </Card>

          {/* News & Events */}
          <Card className="bg-[#243435]">
            <CardHeader>
              <CardTitle>News & Events</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {["Board meeting", "Updated company policy", "Team meeting", "Updated leave policy"].map(
                  (event, index) => (
                    <li key={index} className="flex justify-between items-center">
                      <span>{event}</span>
                      <span className="text-xs bg-[#1c2a2b] px-2 py-1 rounded">14 Feb</span>
                    </li>
                  )
                )}
              </ul>
            </CardContent>
          </Card>

          {/* Recent Job Applications */}
          <Card className="bg-[#243435]">
            <CardHeader>
              <CardTitle>Recent Job Applications</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {[
                  { name: "Guy Hawkins", role: "UX Designer" },
                  { name: "Floyd Miles", role: "Product Designer" },
                  { name: "Robert Fox", role: "Senior Developer" },
                  { name: "Kristin Jones", role: "Product Designer" },
                ].map((applicant, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <Avatar>
                      <AvatarImage src={`/placeholder-avatar-${index + 1}.jpg`} />
                      <AvatarFallback>{applicant.name.split(" ").map((n) => n[0]).join("")}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p>{applicant.name}</p>
                      <p className="text-sm text-gray-400">{applicant.role}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Upcoming Interviews */}
          <Card className="bg-[#243435]">
            <CardHeader>
              <CardTitle>Upcoming Interviews</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {[
                  { name: "Guy Hawkins", time: "09:00 - 10:00" },
                  { name: "Floyd Miles", time: "10:00 - 11:00" },
                  { name: "Robert Fox", time: "13:00 - 14:00" },
                  { name: "Kristin Jones", time: "15:00 - 16:00" },
                ].map((interview, index) => (
                  <li key={index} className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                      <Avatar>
                        <AvatarImage src={`/placeholder-avatar-${index + 1}.jpg`} />
                        <AvatarFallback>{interview.name.split(" ").map((n) => n[0]).join("")}</AvatarFallback>
                      </Avatar>
                      <span>{interview.name}</span>
                    </div>
                    <span className="text-xs bg-purple-400 px-2 py-1 rounded">{interview.time}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Project Overview */}
          <Card className="bg-[#243435]">
            <CardHeader>
              <CardTitle>Project Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {[
                  { label: "Total Projects", value: "125", color: "bg-purple-400" },
                  { label: "Projects on Hold", value: "13", color: "bg-orange-400" },
                  { label: "Projects Completed", value: "13", color: "bg-teal-400" },
                ].map((project, index) => (
                  <li key={index} className={`${project.color} p-2 rounded flex justify-between items-center`}>
                    <span>{project.label}</span>
                    <span className="font-bold">{project.value}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
