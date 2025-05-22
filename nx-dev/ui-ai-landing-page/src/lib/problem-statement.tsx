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
          Why Your AI Assistant Struggles with Enterprise Codebases
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
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
              dramatically, requiring developers to manually provide context for
              every interaction.
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
              Developers must constantly provide the same contextual information
              about project structure, relationships, and interdependencies,
              negating much of the productivity gains AI promises.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
