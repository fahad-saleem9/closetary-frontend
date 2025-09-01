import React, { useState } from "react";

const faqData = [
  {
    category: "Getting started with Closetary",
    items: [
      { question: "What is Closetary?", answer: "Closetary is a smart digital closet powered by AI." },
      { question: "Is using Closetary free?", answer: "Yes, basic features are free, with premium upgrades available." },
      { question: "How do I sign up for Closetary?", answer: "Download the app and sign up with your email or social account." },
    ],
  },
  {
    category: "Account",
    items: [
      { question: "How do I update my account settings?", answer: "Go to Profile → Settings → Account to update details." },
      { question: "How secure is my data?", answer: "We use encryption and never share your personal info." },
    ],
  },
  {
    category: "Membership",
    items: [
      { question: "What is the subscription plan?", answer: "You can upgrade for advanced AI styling and unlimited wardrobe items." },
    ],
  },
  {
    category: "Closet",
    items: [
      { question: "How do I add clothes to my closet?", answer: "Take a photo of your item and upload it to the Closet section." },
      { question: "What are style stats?", answer: "Style stats show you trends based on your outfits and preferences." },
    ],
  },
  {
    category: "Technical Issues",
    items: [
      { question: "App not working?", answer: "Try restarting or reinstalling the app. Contact support if the issue continues." },
      { question: "How do I know my app version?", answer: "Go to Settings → About App to check the version." },
    ],
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-4xl mx-auto py-16 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">FAQ</h2>

      {faqData.map((section, i) => (
        <div key={i} className="mb-8">
          <h3 className="text-xl font-semibold mb-4">{section.category}</h3>
          <div className="space-y-3">
            {section.items.map((faq, j) => (
              <div key={j} className="border rounded-lg shadow-sm">
                <button
                  className="w-full flex justify-between items-center p-4 text-left font-medium"
                  onClick={() => toggle(`${i}-${j}`)}
                >
                  {faq.question}
                  <span>{openIndex === `${i}-${j}` ? "−" : "+"}</span>
                </button>
                {openIndex === `${i}-${j}` && (
                  <div className="px-4 pb-4 text-gray-600">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Faq;
