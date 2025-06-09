"use client"
import React from 'react';
import Dashboard from '../pages/dashboard/Dashboard';
import ProtectedRoute from '../pages/components/ProtectedRoute';

export default function LoginPage() {
  return (
    <ProtectedRoute>
      <main>
        <Dashboard />
      </main>
    </ProtectedRoute>
  );
} 