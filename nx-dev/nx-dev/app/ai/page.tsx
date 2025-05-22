import type { Metadata } from 'next';
import { DefaultLayout } from '@nx/nx-dev/ui-common';
import { Hero } from '@nx/nx-dev/ui-ai-landing-page';
import { ProblemStatement } from '@nx/nx-dev/ui-ai-landing-page';
import { SolutionOverview } from '@nx/nx-dev/ui-ai-landing-page';
import { Features } from '@nx/nx-dev/ui-ai-landing-page';
import { CallToAction } from '@nx/nx-dev/ui-ai-landing-page';

export const metadata: Metadata = {
  title: 'Nx - Make AI Work in Large Codebases',
  description:
    'Empower your AI assistants with workspace intelligence to understand your codebase structure, project dependencies, and build processes at a glance.',
  alternates: {
    canonical: 'https://nx.dev/ai',
  },
  openGraph: {
    title: 'Nx - Make AI Work in Large Codebases',
    description:
      'Empower your AI assistants with workspace intelligence to understand your codebase structure, project dependencies, and build processes at a glance.',
    url: 'https://nx.dev/ai',
    siteName: 'Nx',
    images: [
      {
        url: 'https://nx.dev/images/nx-ai-landing-og.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function AiLandingPage() {
  return (
    <DefaultLayout>
      <Hero />

      {/* <div className="mt-8 scroll-mt-8 lg:mt-16">
        <NxAiBenefitsVideo />
      </div> */}

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mt-16 scroll-mt-16 lg:mt-32" id="problem-statement">
          <ProblemStatement />
          {/* Placeholder comment: ProblemStatement will go here */}
        </div>
      </div>

      {/* <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mt-16 scroll-mt-16 lg:mt-32" id="solution">
          <SolutionOverview />
        </div>
      </div> */}

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mt-16 scroll-mt-16 lg:mt-32" id="features">
          <Features />
        </div>
      </div>

      <div className="mt-16 scroll-mt-16 lg:mt-32">
        {/* Placeholder comment: Getting Started section will go here */}
      </div>

      <div className="overflow-hidden py-8 sm:py-8">
        <CallToAction />
      </div>
    </DefaultLayout>
  );
}
