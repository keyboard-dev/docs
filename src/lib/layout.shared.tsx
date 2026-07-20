import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { appName, gitConfig } from './shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      // JSX supported — the Keyboard wordmark, swapped per theme.
      title: (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo/LOGO_lightmode.svg" alt={appName} className="block dark:hidden" style={{ height: 22, width: 'auto' }} />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo/LOGO_darkmode.svg" alt={appName} className="hidden dark:block" style={{ height: 22, width: 'auto' }} />
        </>
      ),
    },
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  };
}
