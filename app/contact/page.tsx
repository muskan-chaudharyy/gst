import type { Metadata } from "next";
import ContactPageContent from "./ContactPageContent";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with GS Technology. Enroll in a course, ask about placement, or get free career counseling. Call, email, or visit us in Pune.",
};

export default function ContactPage() {
  return <ContactPageContent />;
}
