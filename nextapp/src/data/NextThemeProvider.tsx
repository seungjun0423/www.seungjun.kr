'use client';

import * as React from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import type { ThemeProviderProps } from 'next-themes/dist/types';

export default function NextThemeProvider({
  children,
  ...props
}: ThemeProviderProps) {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <></>;
  } // for persistent theme page.

  return (
    <NextThemesProvider storageKey={'theme'} attribute="class" {...props}>
      {children}
    </NextThemesProvider>
  );
}