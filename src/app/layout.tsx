import type { Metadata } from "next";
import { Roboto_Condensed } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Background from "./components/Background";
import { AstronautProvider } from "./contexts/astronaut.context";
import { LaunchesProvider } from "./contexts/launches.context";
import { RocketProvider } from "./contexts/rockets.context";

const roboto = Roboto_Condensed({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SPACEX LIVE",
  description: "This is an SpaceX API created from the official API",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <LaunchesProvider>
        <RocketProvider>
          <AstronautProvider>
            <body className={roboto.className}>
              <Navbar />
              <Background />
              {children}
            </body>
          </AstronautProvider>
        </RocketProvider>
      </LaunchesProvider>
    </html>
  );
}
