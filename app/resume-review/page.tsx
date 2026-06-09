import type { Metadata } from "next";
import ResumeReviewContent from "./ResumeReviewContent";

export const metadata: Metadata = {
  title: "Free Resume Review",
  description:
    "Get a free professional resume review from GS Technology's expert team. We'll analyse your resume and give you actionable feedback to land more interviews.",
};

export default function ResumeReviewPage() {
  return <ResumeReviewContent />;
}
