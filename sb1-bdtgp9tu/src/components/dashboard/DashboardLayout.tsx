import React from 'react';
import { Layout } from '../layout/Layout';
import { Sidebar } from './Sidebar';
import { DashboardHeader } from './DashboardHeader';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <Layout>
      <div className="flex h-screen bg-gray-50">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <DashboardHeader />
          <main className="flex-1 overflow-y-auto p-6">
            {children}
          </main>
        </div>
      </div>
    </Layout>
  );
}