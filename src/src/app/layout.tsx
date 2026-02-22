import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MarketScope AI — Bain-Quality Market Intelligence in 3 Minutes",
  description:
    "Generate 7-section competitive landscape reports with real market data. Powered by AI with live web research. From $2.90/report.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, background: "#0B0F1A" }}>
        {children}
      </body>
    </html>
  );
}
