"use client";

import { useEffect } from "react";

interface ConfirmDialogProps {
  isOpen: boolean;
  title?: string;
  description?: string;
  buttonText?: string;
  children?: React.ReactNode;
  onConfirm?: () => void;
  isPending?: boolean;
  isError?: boolean;
}

export default function ConfirmDialog({
  isOpen,
  title,
  description,

  children,
}: ConfirmDialogProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 " />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-md rounded-lg bg-background dark:bg-zinc-900 p-6 shadow-lg max-h-[90vh] overflow-auto">
        <h2 className="text-lg md:text-2xl font-semibold text-gray-900 dark:text-blue-100 ">
          {title}
        </h2>
        <h2 className="text-sm font-semibold text-gray-900 dark:text-blue-100 mb-4">
          {description}
        </h2>

        {children}
      </div>
    </div>
  );
}
