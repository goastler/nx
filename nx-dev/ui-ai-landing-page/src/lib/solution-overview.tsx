import React from 'react';

export interface SolutionOverviewProps {
  className?: string;
}

export function SolutionOverview({
  className,
}: SolutionOverviewProps): JSX.Element {
  return (
    <section
      className={`bg-gradient-to-b from-white to-slate-50 py-16 dark:from-slate-900 dark:to-slate-800 ${
        className || ''
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="mb-12 text-center text-3xl font-bold text-slate-900 md:text-4xl dark:text-white">
          Nx Provides the Missing Context Your AI Needs
        </h2>

        <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-slate-700 dark:bg-slate-800">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6"
              >
                <path d="M15 7.5V2H9v5.5l3 3 3-3zM7.5 9H2v6h5.5l3-3-3-3zM9 16.5V22h6v-5.5l-3-3-3 3zM16.5 9l-3 3 3 3H22V9h-5.5z" />
              </svg>
            </div>
            <h3 className="mb-2 text-lg font-medium text-slate-900 dark:text-white">
              Complete Workspace Visibility
            </h3>
            <p className="text-slate-600 dark:text-slate-300">
              Nx gives AI assistants a complete map of your workspace, including
              all projects, dependencies, and configurations.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-slate-700 dark:bg-slate-800">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6"
              >
                <path d="M17.5 4.5c-1.95 0-3.76.98-4.8 2.61l-2.74-3.27c-.29-.34-.72-.39-1.05-.11-.33.27-.39.71-.11 1.04l2.59 3.09c-1.25 2.08-1.16 4.67.26 6.63.26.36.57.68.91.95l-2.6 3.1c-.29.34-.23.78.11 1.04.14.13.32.19.5.19.18 0 .37-.06.51-.2l2.78-3.31c.97.78 2.21 1.25 3.54 1.25 3.03 0 5.5-2.47 5.5-5.5s-2.47-5.5-5.5-5.5zm.5 9c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z" />
                <path d="M9.5 14c-.48 0-.87-.38-.99-.86l-.02-.43c-.58-.28-1.1-.69-1.53-1.19l-.4.15c-.45.17-.95-.02-1.18-.44l-.29-.6c-.23-.42-.1-.95.28-1.23l.36-.26c-.05-.31-.08-.63-.08-.96s.03-.64.08-.95l-.37-.25c-.38-.27-.51-.8-.28-1.22l.28-.6c.23-.42.73-.62 1.18-.45l.4.16c.43-.5.96-.91 1.54-1.19L8.5 4.1c.12-.48.51-.86.99-.86h.62c.48 0 .87.38.99.86l.02.43c.58.28 1.1.69 1.53 1.19l.4-.15c.45-.17.95.02 1.18.44l.3.6c.22.42.1.95-.28 1.23l-.37.25c.05.31.08.63.08.96s-.03.64-.08.95l.37.25c.38.27.5.8.27 1.22l-.28.6c-.23.42-.73.62-1.18.45l-.4-.16c-.43.5-.95.91-1.53 1.19l-.02.43c-.12.48-.51.86-.99.86h-.62zm.11-4c1.07 0 1.93-.86 1.93-1.93s-.86-1.93-1.93-1.93-1.93.86-1.93 1.93.87 1.93 1.93 1.93z" />
              </svg>
            </div>
            <h3 className="mb-2 text-lg font-medium text-slate-900 dark:text-white">
              Build Process Intelligence
            </h3>
            <p className="text-slate-600 dark:text-slate-300">
              AI understands your toolchain setup, testing frameworks, and build
              configurations, enabling it to provide practical, applicable
              advice.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-slate-700 dark:bg-slate-800">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6"
              >
                <path d="M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4z" />
              </svg>
            </div>
            <h3 className="mb-2 text-lg font-medium text-slate-900 dark:text-white">
              Context-Aware Generation
            </h3>
            <p className="text-slate-600 dark:text-slate-300">
              Generate code that follows your project's patterns and conventions
              without extensive manual guidance or contextual prompting.
            </p>
          </div>
        </div>

        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white p-6 shadow-lg dark:border-slate-700 dark:bg-slate-800">
          <div className="flex min-h-[300px] items-center justify-center">
            {/* Placeholder for animated visualization */}
            <div className="flex h-full w-full max-w-4xl items-center justify-center rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 p-8 opacity-20">
              <p className="text-2xl font-bold text-slate-900 opacity-100 dark:text-white">
                Graph Visualization Placeholder
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
