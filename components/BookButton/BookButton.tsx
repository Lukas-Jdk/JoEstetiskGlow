// components/BookButton/BookButton.tsx
import { site } from "@/data/site";

type Props = {
  label?: string;
  className?: string;
};

export default function BookButton({ label = "Bestill time", className = "" }: Props) {
  return (
    <a
      href={site.timmaUrl}
      target="_blank"
      rel="noopener noreferrer nofollow"
      className={className}
    >
      {label}
    </a>
  );
}
