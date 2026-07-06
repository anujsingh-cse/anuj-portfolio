import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Background from "@/components/Background";
import Spotlight from "@/components/effects/Spotlight";

export default function NotFound() {
  return (
    <>
      <Background />
      <Spotlight />
      <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <h1 className="heading-xl bg-gradient-to-br from-cyan-400 to-blue-600 bg-clip-text text-transparent">
          404
        </h1>
        <h2 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
          Page Not Found
        </h2>
        <p className="body-lg mx-auto mt-4 max-w-md">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Button
          asChild
          size="lg"
          className="mt-8 gap-2 rounded-xl bg-white/10 text-white hover:bg-white/20"
        >
          <Link href="/">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </Button>
      </div>
    </>
  );
}
