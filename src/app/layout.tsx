import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Syed Hospital | Opening Soon",
  description:
    "Syed Hospital is a 25-bed multispeciality hospital coming soon to Hubballi, Karnataka.",
  metadataBase: new URL("https://syedhospital.in"),
  openGraph: {
    title: "Syed Hospital | Opening Soon",
    description: "Quality Healthcare. Close to You. Coming soon to Hubballi.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
