// app/providers.tsx 
'use client' 

import posthog from 'posthog-js' 
import { PostHogProvider as BasePostHogProvider } from 'posthog-js/react' 
import { useEffect } from 'react' 

export function PostHogWrapper({ children }: { children: React.ReactNode }) { 
    useEffect(() => { 
      const postHogKey = process.env.NEXT_PUBLIC_POSTHOG_KEY
      const postHogHost = process.env.NEXT_PUBLIC_POSTHOG_HOST

      if (postHogKey && postHogHost) {
        posthog.init(postHogKey, { 
          api_host: postHogHost, 
          person_profiles: 'identified_only', 
          capture_pageview: false // Disable automatic pageview capture, as we capture manually 
        }) 
      }
  }, []) 

  return ( 
    <BasePostHogProvider client={posthog}> 
      {children} 
    </BasePostHogProvider> 
  ) 
}