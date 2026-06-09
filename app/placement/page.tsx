import type { Metadata } from "next";
import PlacementContent from "./PlacementContent";

export const metadata: Metadata = {
  title: "Placement Assistance",
  description:
    "GS Technology offers 100% placement assistance with 50+ hiring partners. Resume building, mock interviews, and direct company referrals.",
};

export default function PlacementPage() {
  return <PlacementContent />;
}
