
import Navbar from "./components/Navbar";
import { dishes } from "./data/dishes"; 
import Menu from "./components/Menu";
import styles from "./App.module.css";
import Hero from "./components/Hero";
import { Footer } from "./components/Footer";
// import { useState } from 'react'   brukes med "state")



export default function App() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <Navbar />

      <div className={styles.container}>
        <Hero />

        <Menu dishes={dishes} />
      </div>
        <Footer scrollToSection={scrollToSection} />
    </>
  );
}
