"use client";

import { useEffect } from "react";
import { AlertTriangle, RefreshCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import Background from "@/components/Background";
import Spotlight from "@/components/effects/Spotlight";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <>
      <Background />
      <Spotlight />
      <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-red-500/10">
          <AlertTriangle className="h-8 w-8 text-red-400" />
        </div>
        <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl">
          Something went wrong!
        </h2>
        <p className="body-lg mx-auto mt-4 max-w-md text-red-200/60">
          {error.message || "An unexpected error occurred."}
        </p>
        <Button
          onClick={() => reset()}
          size="lg"
          className="mt-8 gap-2 rounded-xl bg-red-500/20 text-red-100 hover:bg-red-500/30"
        >
          <RefreshCcw className="h-4 w-4" />
          Try Again
        </Button>
      </div>
    </>
  );
}
