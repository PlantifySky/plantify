"use client"
import React, { useState } from 'react';
import styles from '../styles/Accordion.module.css';

type AccordionItemProps = {
  question: string;
  children: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
};

const AccordionItem = ({ question, children, isOpen, onClick }: AccordionItemProps) => {
  return (
    <div className={styles.accordionItem}>
      <div 
        className={styles.accordionHeader} 
        onClick={onClick}
      >
        <h3 className={styles.accordionQuestion}>{question}</h3>
        <div className={`${styles.arrow} ${isOpen ? styles.arrowDown : ''}`}>
          ▸
        </div>
      </div>
      {isOpen && (
        <div className={styles.accordionContent}>
          {children}
        </div>
      )}
    </div>
  );
};

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is Plantify?",
      answer: "Plantify is a digital platform that connects small-scale farmers with everyday people who want to invest in real farm projects. Our mission is to empower farmers, promote sustainable agriculture, and provide investors with impact-driven opportunities."
    },
    {
      question: "How does investing with Plantify work?",
      answer: "It’s simple! Browse farm plots listed by local farmers, choose a project you want to support, invest a small amount, and track the growth of your investment through our platform. Once the crops are harvested and sold, you earn a share of the profits."
    },
    {
      question: "Who can invest through Plantify?",
      answer: "Anyone! Whether you’re a student, working professional, retiree, or first-time investor, Plantify makes it easy for you to start investing with as little as R100."
    },
    {
      question: "How do farmers benefit from Plantify?",
      answer: "Farmers gain access to flexible funding without the need for traditional loans or credit approvals. This allows them to expand their farming activities, improve their harvests, and increase their income—all while staying connected with supportive investors."
    },
    {
      question: "Is my investment safe?",
      answer: "While every farming project carries natural risks (like weather and market changes), Plantify uses AI-powered risk analysis to give you transparent insights before you invest. We also vet all farmers to ensure credibility and accountability."
    },
    {
      question: "When do I see returns on my investment?",
      answer: "Returns typically depend on the crop cycle of the farm you invest in. For example, a tomato crop might mature in 3–4 months, while other crops could take longer. You’ll see estimated timelines on each farm listing."
    },
    {
      question: "How do farmers join Plantify?",
      answer: "Farmers simply sign up on our platform, complete a verification process, and list their available farm plots. Once approved, their projects become visible to potential investors."
    },
    {
      question: "What makes Plantify different?",
      answer: "We blend technology, social impact, and sustainable agriculture into one easy-to-use platform. Our AI features, transparent dashboards, and focus on small-scale farmers set us apart from traditional crowdfunding models."
    },
    {
        question: "Is Plantify available worldwide?",
        answer: "We are currently launching in [your country/region — e.g., South Africa] with plans to expand across Africa and globally in the near future. Stay tuned!"
    },
    {
        question: "How can I get started?",
        answer: "Simply sign up, explore available farm projects, and make your first investment. Together, we can plant seeds for a greener, stronger future!"
    }
  ];

  return (
    <div className={styles.accordion}>
      <h2 className={styles.accordionTitle}>FAQs</h2>
      {faqs.map((faq, index) => (
        <AccordionItem
          key={index}
          question={faq.question}
          isOpen={openIndex === index}
          onClick={() => toggleAccordion(index)}
        >
          <p>{faq.answer}</p>
        </AccordionItem>
      ))}
    </div>
  );
};

export default Accordion;