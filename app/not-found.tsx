// app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <main style={{ padding: "4rem 1rem", textAlign: "center" }}>
      <h1>Siden finnes ikke</h1>
      <p>Beklager, vi fant ikke det du lette etter.</p>
      <p>
        <Link href="/">Til forsiden</Link>
      </p>
    </main>
  );
}
