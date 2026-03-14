"use client";
import { createContext, useContext, useState, ReactNode } from "react";

interface LoadingContextType {
  totalAssets: number;
  loadedAssets: number;
  registerAsset: () => void;
  assetLoaded: () => void;
}

const LoadingContext = createContext<LoadingContextType | null>(null);

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context)
    throw new Error("useLoading must be used inside LoadingProvider");
  return context;
};

export const LoadingProvider = ({ children }: { children: ReactNode }) => {
  const [totalAssets, setTotalAssets] = useState(0);
  const [loadedAssets, setLoadedAssets] = useState(0);

  const registerAsset = () => setTotalAssets((prev) => prev + 1);

  const assetLoaded = () => setLoadedAssets((prev) => prev + 1);

  return (
    <LoadingContext.Provider
      value={{ totalAssets, loadedAssets, registerAsset, assetLoaded }}
    >
      {children}
    </LoadingContext.Provider>
  );
};
