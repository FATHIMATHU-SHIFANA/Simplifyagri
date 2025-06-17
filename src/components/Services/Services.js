import React from "react";
import styles from "./services.module.css";

const servicesData = [
  {
    id: 1,
    title: "Digital Marketplace for Farm Inputs",
    description:
      "FPOs (Farmer Producer Organizations) launch and manage their own online stores.",
  },
  {
    id: 2,
    title: "Farm-to-Consumer Grocery Platform",
    description:
      "A traceable e-commerce system that connects farmers directly to consumers.",
  },
  {
    id: 3,
    title: "Smart Farming Assistant (Chatbot)",
    description:
      "An AI-powered tool that simplifies, streamlines, and empowers farm management.",
  },
  {
    id: 4,
    title: "Crop Advisory Platform",
    description:
      "We connect farmers with experienced agricultural experts for better farming outcomes.",
  },
  {
    id: 5,
    title: "End-to-End Farm ERP System",
    description:
      "A robust digital backbone for seamlessly managing every aspect of farm operations.",
  },
  {
    id: 6,
    title: "Smart Farm Resource Sharing Platform",
    description:
      "A platform for farmers to access equipment, labor, and machines for better productivity.",
  },
];

const Services = () => {
  return (
    <div className={styles.servicesWrapper}>
      <div className={styles.header}>
        <h2 className={styles.serviceHead}>● Services</h2>
      </div>
      <div className={styles.cardGrid}>
        {servicesData.map((service) => (
          <div key={service.id} className={styles.card}>
            <h3 className={styles.cardNumber}>{service.id}</h3>
            <h4 className={styles.cardTitle}>{service.title}</h4>
            <p className={styles.cardDescription}>{service.description}</p>
            <p className={styles.readMore}>
              Read more <span className={styles.arrow}>&gt;</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
