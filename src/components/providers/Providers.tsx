"use client";

import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <SessionProvider>
      {/* 추가 Provider들을 여기에 중첩하세요 */}
      {children}
    </SessionProvider>
  );
}
