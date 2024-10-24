import { TypewriterEffectSmooth } from './ui/TypewriterEffect'

export function PreLoader() {
  const words = [
    {
      text: "// ArcanistLabs",
    }
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem] ">
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}