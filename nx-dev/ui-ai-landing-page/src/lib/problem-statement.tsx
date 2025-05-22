import React from 'react';

export interface ProblemStatementProps {
  className?: string;
}

export function ProblemStatement({
  className,
}: ProblemStatementProps): JSX.Element {
  return (
    <section className={`py-12 ${className || ''}`}>
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="mb-8 text-3xl font-bold text-slate-900 md:text-4xl dark:text-white">
          Large Workspaces: A Goldmine for LLMs, Yet a Significant Challenge
        </h2>

        <div className="grid grid-cols-1 gap-x-8 gap-y-4 md:grid-cols-2">
          {/* Left Column - Problems */}
          <div>
            <h3 className="mb-3 text-lg font-bold text-slate-900 dark:text-white">
              The Challenges
            </h3>

            <div className="space-y-4">
              <div className="flex items-start">
                <div className="mr-3 mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center text-blue-600 dark:text-blue-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="mb-1 text-sm font-medium leading-tight text-slate-900 dark:text-slate-100">
                    Limited Context
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    LLMs only see individual files, missing the architectural
                    relationships in large monorepos.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-3 mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center text-blue-600 dark:text-blue-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zM8 15c0-1.66 1.34-3 3-3 .35 0 .69.07 1 .18V6h5v2h-3v7.03c-.02 1.64-1.35 2.97-3 2.97-1.66 0-3-1.34-3-3z" />
                  </svg>
                </div>
                <div>
                  <h4 className="mb-1 text-sm font-medium leading-tight text-slate-900 dark:text-slate-100">
                    Inconsistent Output
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    AI generates code that doesn't follow team standards or may
                    break components it can't see.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-3 mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center text-blue-600 dark:text-blue-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z" />
                  </svg>
                </div>
                <div>
                  <h4 className="mb-1 text-sm font-medium leading-tight text-slate-900 dark:text-slate-100">
                    No Workspace Awareness
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    AI can't understand project dependencies, ownership, or
                    cross-project integration points.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-3 mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center text-blue-600 dark:text-blue-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path d="M19 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h4l3 3 3-3h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 16H5V4h14v14z" />
                  </svg>
                </div>
                <div>
                  <h4 className="mb-1 text-sm font-medium leading-tight text-slate-900 dark:text-slate-100">
                    Manual Context Burden
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    Developers must repeatedly provide the same contextual
                    information about project structure.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Solutions */}
          <div>
            <h3 className="mb-3 text-lg font-bold text-slate-900 dark:text-white">
              How Nx Helps
            </h3>

            <div className="space-y-4">
              <div className="flex items-start">
                <div className="mr-3 mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center text-green-600 dark:text-green-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM10 17H5v-2h5v2zm0-4H5v-2h5v2zm0-4H5V7h5v2zm4.82 6L12 12.16l1.41-1.41 1.41 1.42L17.99 9l1.42 1.42-4.6 4.58z" />
                  </svg>
                </div>
                <div>
                  <h4 className="mb-1 text-sm font-medium leading-tight text-slate-900 dark:text-slate-100">
                    Architectural Awareness
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    Move from file-level to workspace-level understanding with
                    rich project relationship metadata.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-3 mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center text-green-600 dark:text-green-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="mb-1 text-sm font-medium leading-tight text-slate-900 dark:text-slate-100">
                    Predictable + Intelligent
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    Combine consistent generators with AI customization that
                    follows team standards.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-3 mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center text-green-600 dark:text-green-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="mb-1 text-sm font-medium leading-tight text-slate-900 dark:text-slate-100">
                    Integrated Workflows
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    Connect editor, CI, and AI for truly context-aware
                    assistance across your entire workspace.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-3 mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center text-green-600 dark:text-green-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z" />
                  </svg>
                </div>
                <div>
                  <h4 className="mb-1 text-sm font-medium leading-tight text-slate-900 dark:text-slate-100">
                    Up-to-Date Documentation
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    Access current docs and best practices for accurate,
                    workspace-specific guidance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
