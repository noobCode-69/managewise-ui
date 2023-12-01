import { useContext, createContext, ReactNode } from "react";

import { useMediaQuery } from "@chakra-ui/react";

type responsiveSizeContextType = {
  isMobile: boolean;
  isDesktop: boolean;
};
export const responsiveSizeContext =
  createContext<responsiveSizeContextType | null>(null);

export default function ResponsizeSizeProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [isMobile] = useMediaQuery("(max-width: 50em)");

  const [isDesktop] = useMediaQuery("(min-width: 51em)");

  return (
    <responsiveSizeContext.Provider value={{ isMobile, isDesktop }}>
      {children}
    </responsiveSizeContext.Provider>
  );
}

export function useResponsiveSizes() {
  const ctx = useContext(responsiveSizeContext);
  // Should use inside the context provider
  if (!ctx) return;
  const { isMobile, isDesktop } = ctx;
  return {
    isMobile,
    isDesktop,
  };
}
