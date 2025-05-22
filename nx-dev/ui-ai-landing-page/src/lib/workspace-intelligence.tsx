import React from 'react';

export interface WorkspaceIntelligenceProps {
  className?: string;
}

export function WorkspaceIntelligence({
  className,
}: WorkspaceIntelligenceProps): JSX.Element {
  return (
    <div
      className={`rounded-xl border border-slate-200 bg-white p-6 shadow-lg dark:border-slate-700 dark:bg-slate-800 ${
        className || ''
      }`}
    >
      <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-8 w-8"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
        </svg>
      </div>

      <h3 className="mb-4 text-center text-2xl font-bold text-slate-900 dark:text-white">
        Complete Workspace Intelligence
      </h3>

      <p className="mx-auto mb-8 max-w-2xl text-center text-lg text-slate-600 dark:text-slate-300">
        Nx gives AI assistants a complete understanding of your workspace
        structure, including project dependencies, build configurations, and
        more. This allows the AI to navigate your codebase like an experienced
        team member rather than a new hire seeing your code for the first time.
      </p>

      <div className="overflow-hidden rounded-xl border border-slate-200 shadow-md dark:border-slate-700">
        <div className="border-b border-slate-200 bg-slate-100 p-3 dark:border-slate-600 dark:bg-slate-700">
          <div className="flex">
            <div className="rounded-t-lg bg-white px-4 py-2 font-medium text-slate-900 dark:bg-slate-800 dark:text-white">
              Workspace Overview
            </div>
          </div>
        </div>
        <div className="bg-white p-6 dark:bg-slate-800">
          <div className="relative mb-6 min-h-[300px] rounded-lg bg-slate-50 p-4 dark:bg-slate-900">
            {/* Workspace visualization placeholder */}
            <div className="h-full w-full"></div>
            <div className="absolute inset-0">
              <div
                className="absolute rounded-lg bg-white px-3 py-1 shadow-md dark:bg-slate-800"
                style={{ top: '20%', left: '30%' }}
              >
                <span className="text-sm font-medium text-slate-900 dark:text-white">
                  Project Dependencies
                </span>
              </div>
              <div
                className="absolute rounded-lg bg-white px-3 py-1 shadow-md dark:bg-slate-800"
                style={{ top: '60%', left: '70%' }}
              >
                <span className="text-sm font-medium text-slate-900 dark:text-white">
                  Build Tasks
                </span>
              </div>
              <div
                className="absolute rounded-lg bg-white px-3 py-1 shadow-md dark:bg-slate-800"
                style={{ top: '40%', left: '50%' }}
              >
                <span className="text-sm font-medium text-slate-900 dark:text-white">
                  Module Structure
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-lg bg-slate-100 p-4 dark:bg-slate-700">
              <span className="mb-2 inline-block rounded bg-slate-200 px-2 py-1 text-xs font-medium text-slate-700 dark:bg-slate-600 dark:text-slate-300">
                User Query
              </span>
              <p className="text-slate-900 dark:text-white">
                How is the UI component library connected to the main app?
              </p>
            </div>
            <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
              <span className="mb-2 inline-block rounded bg-blue-200 px-2 py-1 text-xs font-medium text-blue-700 dark:bg-blue-800 dark:text-blue-300">
                AI with Nx Knowledge
              </span>
              <pre className="overflow-auto rounded bg-slate-800 p-4 text-sm text-white dark:bg-black">
                <code>{`// The UI library is imported by these 3 applications:
// - main-app (direct dependency)
// - admin-portal (direct dependency)
// - marketing-site (indirect dependency)

import { Button } from '@company/ui-components';

// Build chain: ui-components → main-app
// For more details, see nx.json configuration`}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
