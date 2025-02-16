"use client";
import { ReactNode, useState } from "react";
import Sidebar from "./Sidebar";
import {
  SunIcon,
  MoonIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useTheme } from "next-themes";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const { theme, setTheme } = useTheme();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className='flex min-h-screen bg-gray-100 dark:bg-gray-900'>
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} />

      {/* Main Content */}
      <div
        className={`flex-1 flex flex-col transition-all duration-300 ${
          sidebarOpen ? "ml-64" : "ml-0"
        }`}
      >
        {/* Header - Sticky at top */}
        <header className='bg-white dark:bg-gray-800 shadow p-4 flex justify-between items-center fixed top-0 w-full z-50'>
          {/* Sidebar Toggle */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className='text-gray-900 dark:text-white'
          >
            {sidebarOpen ? (
              <XMarkIcon className='h-6 w-6' />
            ) : (
              <Bars3Icon className='h-6 w-6' />
            )}
          </button>

          <h1 className='text-xl font-bold text-gray-900 dark:text-white'>
            Dashboard
          </h1>

          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className='bg-blue-500 text-white px-4 py-2 rounded flex items-center me-1'
          >
            {theme === "dark" ? (
              <SunIcon className='h-5 w-5' />
            ) : (
              <MoonIcon className='h-5 w-5' />
            )}
            <span className='ml-2'>
              {theme === "dark" ? "Light Mode" : "Dark Mode"}
            </span>
          </button>
        </header>

        {/* Page Content */}
        <main className='p-4 pt-16'>{children}</main>
      </div>
    </div>
  );
}
