import { parseHeading } from "@/lib/homepage";

/** Renders a heading string that may contain "\n" line breaks and "{{...}}" gradient-highlight markers. */
export default function HeadingText({ text }: { text: string }) {
  const lines = parseHeading(text);
  return (
    <>
      {lines.map((line, i) => (
        <span key={i}>
          {line.prefix}
          {line.highlight && (
            <span className="bg-gradient-to-r from-brand-600 to-violet-500 bg-clip-text text-transparent">
              {line.highlight}
            </span>
          )}
          {line.suffix}
          {i < lines.length - 1 && <br />}
        </span>
      ))}
    </>
  );
}
