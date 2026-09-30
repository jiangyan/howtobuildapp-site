import type { Metadata } from "next";
import IdeaLab from "./idea-lab";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return <IdeaLab />;
}
