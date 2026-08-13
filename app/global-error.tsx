"use client";

export default function GlobalError({ reset }: { reset: () => void }) {
  return (
    <html lang="en">
      <body>
        <main style={{ fontFamily: "system-ui, sans-serif", padding: "3rem", textAlign: "center" }}>
          <h1>This page could not be loaded / Cette page n&apos;a pas pu être chargée</h1>
          <button type="button" onClick={reset} style={{ marginTop: "1.5rem" }}>
            Try again / Réessayer
          </button>
        </main>
      </body>
    </html>
  );
}
