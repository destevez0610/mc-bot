import React from 'react';
import { Bell, Settings } from 'lucide-react';

export function DashboardHeader() {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-800">Dashboard</h1>
        <div className="flex items-center space-x-4">
          <button className="text-gray-600 hover:text-gray-900">
            <Bell className="h-6 w-6" />
          </button>
          <button className="text-gray-600 hover:text-gray-900">
            <Settings className="h-6 w-6" />
          </button>
          <div className="h-8 w-8 rounded-full bg-yellow-600 text-white flex items-center justify-center">
            JD
          </div>
        </div>
      </div>
    </header>
  );
}