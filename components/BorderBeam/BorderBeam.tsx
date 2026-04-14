import { BorderBeam } from "@/components/ui/border-beam";
import Processo from "../process/process";

export function BorderBeamDemo() {
  return (
    <div className="relative flex h-125 w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <span className="pointer-events-none whitespace-pre-wrap bg-linear-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10"></span>
      <Processo />
      <BorderBeam size={250} duration={12} delay={9} />
    </div>
  );
}
