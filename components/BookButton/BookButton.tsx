// components/BookButton.tsx
import { site } from "@/data/site";

type Props = {
  label?: string;
  className?: string;
};

export default function BookButton({ label = "Bestill time", className = "" }) {
  const href = site.timmaUrl;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      aria-describedby="external-note"
    >
      {label}
      <span id="external-note" className="sr-only">
        (åpnes i ny fane)
      </span>
    </a>
  );
}
