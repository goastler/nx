import React from 'react';

export interface ProblemStatementProps {
  className?: string;
}

export function ProblemStatement({
  className,
}: ProblemStatementProps): JSX.Element {
  return (
    <section className={`py-16 ${className || ''}`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="mb-12 text-3xl font-bold text-slate-900 md:text-4xl dark:text-white">
          Large Workspaces: A Goldmine for LLMs, Yet a Significant Challenge
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Left Column - Problems */}
          <div className="space-y-8">
            <h3 className="mb-6 text-xl font-bold text-slate-900 dark:text-white">
              The Challenges
            </h3>

            <div className="flex flex-col">
              <div className="mb-4 flex h-6 w-6 shrink-0 items-center justify-center text-blue-600 dark:text-blue-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6"
                >
                  <path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z" />
                </svg>
              </div>
              <h4 className="mb-2 text-base font-medium leading-6 text-slate-900 dark:text-slate-100">
                Limited Context
              </h4>
              <p className="text-slate-600 dark:text-slate-300">
                LLMs only see individual files, missing architectural
                relationships. As monorepos grow larger, this problem compounds
                dramatically, requiring developers to manually provide context
                for every interaction.
              </p>
            </div>

            <div className="flex flex-col">
              <div className="mb-4 flex h-6 w-6 shrink-0 items-center justify-center text-blue-600 dark:text-blue-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6"
                >
                  <path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zM8 15c0-1.66 1.34-3 3-3 .35 0 .69.07 1 .18V6h5v2h-3v7.03c-.02 1.64-1.35 2.97-3 2.97-1.66 0-3-1.34-3-3z" />
                </svg>
              </div>
              <h4 className="mb-2 text-base font-medium leading-6 text-slate-900 dark:text-slate-100">
                Inconsistent Output
              </h4>
              <p className="text-slate-600 dark:text-slate-300">
                AI generates code that doesn't follow your team's best practices
                and may introduce breaking changes by deprecating components it
                doesn't see being used elsewhere in the codebase.
              </p>
            </div>

            <div className="flex flex-col">
              <div className="mb-4 flex h-6 w-6 shrink-0 items-center justify-center text-blue-600 dark:text-blue-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6"
                >
                  <path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z" />
                </svg>
              </div>
              <h4 className="mb-2 text-base font-medium leading-6 text-slate-900 dark:text-slate-100">
                No Workspace Awareness
              </h4>
              <p className="text-slate-600 dark:text-slate-300">
                Can't understand project dependencies, ownership, or integration
                points, making it difficult for AI to know where to start when
                fixing issues across multiple projects.
              </p>
            </div>

            <div className="flex flex-col">
              <div className="mb-4 flex h-6 w-6 shrink-0 items-center justify-center text-blue-600 dark:text-blue-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6"
                >
                  <path d="M19 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h4l3 3 3-3h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 16H5V4h14v14z" />
                </svg>
              </div>
              <h4 className="mb-2 text-base font-medium leading-6 text-slate-900 dark:text-slate-100">
                Manual Context Burden
              </h4>
              <p className="text-slate-600 dark:text-slate-300">
                Developers must constantly provide the same contextual
                information about project structure, relationships, and
                interdependencies, negating much of the productivity gains AI
                promises.
              </p>
            </div>
          </div>

          {/* Right Column - Solutions */}
          <div className="space-y-8">
            <h3 className="mb-6 text-xl font-bold text-slate-900 dark:text-white">
              How Nx Helps
            </h3>

            <div className="flex flex-col">
              <div className="mb-4 flex h-6 w-6 shrink-0 items-center justify-center text-green-600 dark:text-green-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6"
                >
                  <path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM10 17H5v-2h5v2zm0-4H5v-2h5v2zm0-4H5V7h5v2zm4.82 6L12 12.16l1.41-1.41 1.41 1.42L17.99 9l1.42 1.42-4.6 4.58z" />
                </svg>
              </div>
              <h4 className="mb-2 text-base font-medium leading-6 text-slate-900 dark:text-slate-100">
                Architectural Awareness
              </h4>
              <p className="text-slate-600 dark:text-slate-300">
                Move from file-level to workspace-level understanding. Nx
                provides rich metadata about project relationships,
                dependencies, and overall architecture that your AI can
                leverage.
              </p>
            </div>

            <div className="flex flex-col">
              <div className="mb-4 flex h-6 w-6 shrink-0 items-center justify-center text-green-600 dark:text-green-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6"
                >
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" />
                </svg>
              </div>
              <h4 className="mb-2 text-base font-medium leading-6 text-slate-900 dark:text-slate-100">
                Predictable + Intelligent
              </h4>
              <p className="text-slate-600 dark:text-slate-300">
                Combine consistent generators with AI customization. Nx
                generators provide tested scaffolding while AI adds contextual
                customization, ensuring code follows team standards.
              </p>
            </div>

            <div className="flex flex-col">
              <div className="mb-4 flex h-6 w-6 shrink-0 items-center justify-center text-green-600 dark:text-green-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6"
                >
                  <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
                </svg>
              </div>
              <h4 className="mb-2 text-base font-medium leading-6 text-slate-900 dark:text-slate-100">
                Integrated Workflows
              </h4>
              <p className="text-slate-600 dark:text-slate-300">
                Connect editor, CI, and AI for seamless development. Your AI
                assistant can see terminal output, CI pipeline status, and
                project relationships all at once, providing truly context-aware
                help.
              </p>
            </div>

            <div className="flex flex-col">
              <div className="mb-4 flex h-6 w-6 shrink-0 items-center justify-center text-green-600 dark:text-green-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6"
                >
                  <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z" />
                </svg>
              </div>
              <h4 className="mb-2 text-base font-medium leading-6 text-slate-900 dark:text-slate-100">
                Up-to-Date Documentation
              </h4>
              <p className="text-slate-600 dark:text-slate-300">
                Nx provides your AI assistant with access to current
                documentation and best practices, eliminating hallucinated
                answers and ensuring accurate, workspace-specific guidance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
