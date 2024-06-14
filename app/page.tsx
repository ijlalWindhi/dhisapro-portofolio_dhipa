import type { Metadata } from "next";
import { METADATA } from "@/constants/metadata";

export const metadata: Metadata = {
  title: `Home ${METADATA.exTitle}`,
  description: `Page home ${METADATA.creator}`,
  alternates: {
    canonical: `${process.env.DOMAIN}/about`,
  },
};

export default function Home() {
  return <div>page</div>;
}
