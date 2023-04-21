"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Loader from "./loader/page";
import Home from "./home/page";
import About from "./about/page";
import Projects from "./projects/page";
import Contact from "./contact/page";
import Experience from "./experience/page";
import Navigation from "@/components/Navigation/Navigation";

import "./page.css";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loading
      ? document.querySelector("body")?.classList.add("loading")
      : document.querySelector("body")?.classList.remove("loading");
  }, [loading]);

  return (
    <main>
      <AnimatePresence>
        {loading ? (
          <div>
            <Loader setLoading={setLoading} />
          </div>
        ) : (
          <React.Fragment>
            <nav>
              <Navigation />
            </nav>
            <div className="content">
              <Home />
              <About />
              <Experience />
              <Projects />
              <Contact />
            </div>
          </React.Fragment>
        )}
      </AnimatePresence>
    </main>
  );
}
