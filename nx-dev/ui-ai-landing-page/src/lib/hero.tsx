import {
  ButtonLink,
  SectionHeading,
  SectionDescription,
  Strong,
} from '@nx/nx-dev/ui-common';

export interface HeroProps {
  className?: string;
}

export function Hero(): JSX.Element {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <SectionHeading as="h1" variant="title" className="mt-6">
          Make AI{' '}
          <span className="rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
            actually work
          </span>{' '}
          <br className="hidden md:block" />
          in large codebases{' '}
        </SectionHeading>
        <SectionDescription as="p" className="mt-6">
          Empower your AI assistants with workspace intelligence to{' '}
          <Strong>understand your codebase structure</Strong>, project
          dependencies, and build processes at a glance.
        </SectionDescription>

        <div className="mt-10 flex flex-col items-center justify-center gap-6 sm:flex-row">
          <ButtonLink
            href="/features/enhance-AI#setting-up-nx-mcp"
            variant="primary"
            size="default"
            title="Enhance Your AI Assistant"
          >
            Enhance Your AI Assistant
          </ButtonLink>

          <a
            href="https://youtu.be/dRQq_B1HSLA"
            className="group inline-flex items-center text-sm font-semibold leading-6 text-slate-800 dark:text-white"
          >
            Watch the video{' '}
            <span
              aria-hidden="true"
              className="ml-1 inline-block transition-transform group-hover:translate-x-1"
            >
              →
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
