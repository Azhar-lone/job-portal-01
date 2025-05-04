import type React from "react";
import Hero from "./_sections/hero";
import ContactForm from "./_sections/contact-info-form";
import Map from "./_sections/map";
import FAQs from "./_sections/faqs";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Contact us",
};
export default function ContactPage() {
  return (
    <div>
      <Hero />
      <ContactForm />
      <Map />
      <FAQs />
    </div>
  );
}
