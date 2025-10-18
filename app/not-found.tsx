export default function NotFound() {
  return (
    <main
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "4rem 1.5rem",
        textAlign: "center",
      }}
    >
      <h1 style={{ textTransform: "uppercase", letterSpacing: ".5px" }}>
        Siden finnes ikke
      </h1>
      <p style={{ marginTop: "1rem" }}>
        Beklager, vi kunne ikke finne siden du lette etter.
      </p>
      <p style={{ marginTop: ".5rem" }}>
        <a href="/" style={{ textDecoration: "underline" }}>
          Gå til forsiden
        </a>
      </p>
    </main>
  );
}
