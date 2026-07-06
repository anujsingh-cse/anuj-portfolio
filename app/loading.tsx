import Background from "@/components/Background";
import Spotlight from "@/components/effects/Spotlight";

export default function Loading() {
  return (
    <>
      <Background />
      <Spotlight />
      <div className="flex min-h-screen items-center justify-center">
        <div className="relative flex h-16 w-16 items-center justify-center">
          <div className="absolute inset-0 rounded-full border-t-2 border-cyan-500 opacity-20" />
          <div className="absolute inset-0 animate-spin rounded-full border-t-2 border-cyan-500" />
          <div className="h-2 w-2 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.8)]" />
        </div>
      </div>
    </>
  );
}
