import React from 'react';
import { CreditScore } from './dashboard/CreditScore';
import { AccountSummary } from './dashboard/AccountSummary';
import { ActionPlan } from './dashboard/ActionPlan';
import { DisputeOpportunities } from './dashboard/DisputeOpportunities';
import { CreditFactors } from './dashboard/CreditFactors';
import { RecommendedActions } from './dashboard/RecommendedActions';

export function CreditAnalysisDashboard() {
  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Your Credit Analysis</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <CreditScore />
        <AccountSummary />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <ActionPlan />
        </div>
        <div>
          <DisputeOpportunities />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <CreditFactors />
        <RecommendedActions />
      </div>
    </div>
  );
}