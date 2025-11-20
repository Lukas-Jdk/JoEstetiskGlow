// components/BookButton/GaveKort.tsx
import { site } from "@/data/site";

type Props = {
  label?: string;
  className?: string;
  href?: string;
};

export default function GaveKort({ label = "Bestill gavekort ", className = "" }: Props) {
  return (
    <a
      href="https://m.me/jjucaite"
      target="_blank"
      rel="noopener noreferrer nofollow"
      className={className}
    >
      {label}
    </a>
  );
}
