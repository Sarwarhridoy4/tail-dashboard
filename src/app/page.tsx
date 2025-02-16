"use client";

import DashboardLayout from "../components/DashboardLayout";

export default function Home() {
  return (
    <DashboardLayout>
      <main className="flex-1 p-8 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
        <h2 className="text-2xl font-semibold mb-4">Welcome to the Dashboard</h2>
        <p>This is your main content area.</p>
        {/* Add more content here */}
      </main>

      <footer className="bg-white dark:bg-gray-800 shadow p-4 text-center text-gray-900 dark:text-white">
        <p>© 2023 Your Company</p>
      </footer>
    </DashboardLayout>
  );
}
