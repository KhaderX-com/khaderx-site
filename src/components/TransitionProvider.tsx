'use client';

import { AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { memo } from 'react';

interface TransitionProviderProps {
  children: React.ReactNode;
}

function TransitionProvider({ children }: TransitionProviderProps) {
  const pathname = usePathname();

  return (
    <AnimatePresence
      mode="wait"
      initial={false}
      onExitComplete={() => {
        // Scroll to top after page transition
        if (typeof window !== 'undefined') {
          window.scrollTo(0, 0);
        }
      }}
    >
      <div key={pathname}>
        {children}
      </div>
    </AnimatePresence>
  );
}

// Memoize to prevent unnecessary re-renders
export default memo(TransitionProvider);
