// app/providers.tsx
'use client';

import posthog from 'posthog-js';
import { PostHogProvider } from 'posthog-js/react';

interface CSPostHogProviderProps {
  children: React.ReactNode;
}

// Initialize PostHog only on the client side
if (typeof window !== 'undefined') {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY ?? '', {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
    person_profiles: 'identified_only', // or 'always' for anonymous user profiles
  });
}

export function CSPostHogProvider({ children }: CSPostHogProviderProps) {
  return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
}
