import React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQs = () => {
  return (
    <div className=" mx-auto w-[90%] rounded  flex flex-col gap-5  ">
      <h3 className="text-4xl font-bold ">Frequently Asked Questions</h3>
      <Accordion type="single" collapsible>
        {/* <AccordionTrigger >
        Edit Personal Information{" "}
      </AccordionTrigger> */}

        {faqs.map((q, index) => (
          <AccordionItem value={q.question.charAt(1)} key={index}>
            <AccordionTrigger className="text-xl">
              {q.question}
            </AccordionTrigger>
            <AccordionContent>{q.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQs;

interface FAQType {
  question: string;
  answer: string;
}

const faqs: FAQType[] = [
  {
    question: "How do I create an account?",
    answer:
      "You can create an account by clicking the 'Sign Up' button in the top right corner of the homepage. Follow the prompts to complete your registration.",
  },
  {
    question: "Is it free to post a job?",
    answer:
      "We offer both free and premium job posting options. Basic job listings are free, while featured listings and additional recruitment tools are available with our premium plans.",
  },
  {
    question: "How can I reset my password?",
    answer:
      "Click on the 'Sign In' button, then select 'Forgot Password'. Enter your email address and follow the instructions sent to your inbox.",
  },
  {
    question: "Do you offer customer support?",
    answer:
      "Yes, our customer support team is available Monday through Friday from 9:00 AM to 6:00 PM. You can reach us by phone, email, or through the contact form on this page.",
  },
];
