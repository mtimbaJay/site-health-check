import "./globals.css";

export const metadata = {
  title: "Site Health Check",
  description: "Check if a website is online",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}