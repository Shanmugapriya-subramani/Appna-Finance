import "./globals.css";
import AppShell from "@/components/AppShell";

export const metadata = {
  title: "APPNA FINANCE — AI-Powered Financial Education",
  description:
    "Financial knowledge made for every Indian. Learn banking, markets, loans, insurance, taxes and government schemes through AI-guided conversations.",
  icons: {
    icon: "/icon.svg",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        style={{ background: "#0A0C10", minHeight: "100vh", color: "#F2F1EC" }}
      >
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
