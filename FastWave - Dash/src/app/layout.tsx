import "@/css/satoshi.css";
import "@/css/simple-datatables.css";
import "dropzone/dist/dropzone.css";
import "flatpickr/dist/flatpickr.min.css";
import "jsvectormap/dist/jsvectormap.css";
import "nouislider/dist/nouislider.css";

import "@/css/style.css";

import type { Metadata } from "next";
import NextTopLoader from "nextjs-toploader";
import type { PropsWithChildren } from "react";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: {
    template: "%s | FastWave Swim Event Management Software",
    default: "FastWave - Where every click makes a wave",
  },
  description:
    " FastWave has been designed to streamline and ease the running of swimming events",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <NextTopLoader showSpinner={false} />
          {children}
        </Providers>
      </body>
    </html>
  );
}
